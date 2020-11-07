import React, { useState } from "react";
import { View, StyleSheet, FlatList, Platform } from "react-native";
import ImportedData from "../data/FetchRightsData";
import Colors from "../constants/Colors";
import RightsCategoryTile from "../components/RightsCategoryTile";
import RightsCategoryModal from "../components/RightsCategoryModal";

/*
 * 
 * Function Component Definiton: Rights Screen
 * 
 */

const RightsScreen = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState("c1");

  const openModalHandler = (id) => {
    setIsModalOpen(true);
    setActiveCategoryId(id);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  /*
  * 
  * Functions is called on Modal advance. Tells the navigation flow
  * to navigate to the subRights page with the given categoryID
  * 
  */

  const advanceScreenHandler = () => {
    closeModalHandler();

    props.navigation.navigate({
      routeName:  "SubRights", 
      params: {
        categoryId: activeCategoryId, 
      },
    });
  };

  /*
  * 
  * Functions called by the Flatlist component. Used to render the list of 
  * RightsCategoryTiles.
  * 
  */

  const renderGridItem = (itemData) => {
    return (
      <RightsCategoryTile
        title={itemData.item.title}
        image={itemData.item.image}
        onSelect={() => {
          openModalHandler(itemData.item.id);
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
        contentContainerStyle={{
          width: "100%",
          alignItems: "center",
        }}
        data={ImportedData.getRightsCategories()}
        renderItem={renderGridItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
      <RightsCategoryModal
        isVisible={isModalOpen}
        onCloseModal={closeModalHandler}
        categoryId={activeCategoryId}
        onAdvance={advanceScreenHandler}
      />
    </View>
  );
};


/*
 * 
 * Set up the layout of the navigation header. Provides the color
 * title, and font weights of the header and header text of the 
 * Rights Screen. 
 * 
 */
RightsScreen.navigationOptions = {
  headerTitle: "Rights Information",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.lightOrange : "",
  },
  headerTintColor: Colors.darkOrange,
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 10,
  },
});

export default RightsScreen;
