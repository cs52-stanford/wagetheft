import React, { useEffect, useCallback }from "react";
import { View, StyleSheet } from "react-native";
import EventDetails from "../components/EventDetails";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from 'react-redux';

import { setYourEvent } from '../store/actions/events';

import CustomHeaderButton from "../components/CustomHeaderButton";


const EventDetailsScreen = (props) => {

  eventId = props.navigation.getParam("eventId");
  const inArray = e => e.id === eventId;

  // finds the event given the event id from the parent
  // and sets it as a param so that navigation options
  // can have access to it
  event = useSelector(state => state.events.allEvents.find(inArray))
  useEffect(() => {
    props.navigation.setParams({eventTitle: event.title})
}, [event]);


  const dispatch = useDispatch();

  // boolean if an event is in "Your Events"
  const inYourEvents = useSelector(state => state.events.yourEvents.some(inArray));
  
  // Handerler to dispatch the action
  const setYourEventHandeler = useCallback(() => {
      dispatch(setYourEvent(eventId));
  }, [dispatch, eventId]);


  // Handeler and inYourEvents becomes a params 
  // so that navigation options can have access to it
  // and updates every time it is changed
  useEffect(() => {
      props.navigation.setParams({setYourEvent: setYourEventHandeler})
  }, [setYourEventHandeler]);

  useEffect(() => {
      props.navigation.setParams({inYourEvents: inYourEvents});
  }, [inYourEvents]);


  return (
    <View style={styles.screen}>
      <EventDetails event={event} />
    </View>
  );
};

EventDetailsScreen.navigationOptions = (navigationData) => {
  const eventTitle = navigationData.navigation.getParam("eventTitle");
  const setYourEvent = navigationData.navigation.getParam('setYourEvent');
  const inYourEvents = navigationData.navigation.getParam('inYourEvents');

  return {
    headerTitle: eventTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Fav"
          iconName= {inYourEvents?'ios-star':'ios-star-outline'}
          onPress={setYourEvent}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default EventDetailsScreen;
