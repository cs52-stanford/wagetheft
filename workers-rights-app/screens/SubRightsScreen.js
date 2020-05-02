import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { RIGHTSCATEGORIES, SUBRIGHTS } from "../data/dummy-data";
import SubRightsItem from "../components/SubRightsItem";
import Colors from "../constants/Colors";

const SubRightsScreen = (props) => {
  // Get the rights category that we passed in with navigation (eg. "Getting Paid")
  const catId = props.navigation.getParam("categoryId");
  const selectedCategory = RIGHTSCATEGORIES.find((cat) => cat.id == catId);
  const displayedSubRights = SUBRIGHTS;
  // const displayedSubRights = SUBRIGHTS.filter(
  //   (subright) => subright.categoryIds.indexOf(catId) >= 0
  // );

  const renderSubright = (itemData) => {
    return (
      <SubRightsItem
        title={itemData.item.title}
        emoji={itemData.item.emoji}
        img={itemData.item.img}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "RightsDetails",
            params: {
              subrightId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

   async function dummyFunc(itemData) {
    const response = await fetch('https://workers-rights-46c43.firebaseio.com/subrights.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // categoryIds, title, img, emoji, learnMores, description, organizations
        body: JSON.stringify({ // automatically creates ID
          categoryIds: itemData.item.categoryIds,
          title: itemData.item.title,
          img: itemData.item.img,
          emoji: itemData.item.emoji,
          learnMores: itemData.item.learnMores,
          description: itemData.item.description,
          organizations: itemData.item.organizations,
        })
    });

    const resData = await response.json();
    console.log(resData);

  } 

  // async function dummyFunc() {

  //   fetch('https://workers-rights-46c43.firebaseio.com/testing.json', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       firstParam: 'HELLO',
  //       secondParam: 'BYE',
  //     }),
  //   });
  // }

  return (
    <View style={styles.screen}>
      <Button title="Post data!" color={Colors.darkOrange} onPress={dummyFunc} /> 
      <FlatList
        data={displayedSubRights}
        renderItem={renderSubright}
        numColumns={1}
        style={{ width: "95%" }}
      />
    </View>
  );
};

// the category id / name will change, so we need to make this dynamic
SubRightsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = RIGHTSCATEGORIES.find((cat) => cat.id == catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
});

export default SubRightsScreen;
