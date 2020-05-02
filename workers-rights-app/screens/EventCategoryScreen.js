import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import EventCategoryCard from '../components/EventCategoryCard';

const EventCategoryScreen = props => {

  const allEvents = useSelector(state => state.events.allEvents);
  const yourEvents = useSelector(state => state.events.yourEvents);
  const category = props.navigation.getParam("categoryTitle");

  const displayedEvents = (category === "Your Events") ? yourEvents : allEvents.filter(
    event => event.category === category);
  
    const renderCards = (itemData) => {
        return (
          <EventCategoryCard
            title={itemData.item.title}
            date={itemData.item.date}
            time={itemData.item.time}
            location={itemData.item.location}
            image={itemData.item.image}
            pressAction={(id) => {
                props.navigation.navigate({
                  routeName: "EventDetails",
                  params: {
                    eventId: id,
                  }
                }) }
            }
            id={itemData.item.id}
          />
        );
      };
    
    return (
       <View style={styles.container}>
         <FlatList
           data={displayedEvents}
           renderItem={renderCards}
           showsVerticalScrollIndicator={false}
         />
       </View>
    );
}    
const styles = StyleSheet.create({      
    container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10
    }
});


// Sets the header title to the category title
EventCategoryScreen.navigationOptions = (navigationData) => {
    return{headerTitle: navigationData.navigation.getParam('categoryTitle')};
};


export default EventCategoryScreen;