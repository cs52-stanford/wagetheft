import { EVENTS } from '../../data/dummy-data';
import { SET_YOUR_EVENT } from '../actions/events';

const initialState = {
    allEvents: EVENTS,
    yourEvents: [],
    social: [],
    workshops: []
};


const eventsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_YOUR_EVENT:
                const existingIndex = state.yourEvents.findIndex(event => event.id===action.id);
                if (existingIndex >=0){
                    const updatedYourEvents = [...state.yourEvents];
                    updatedYourEvents.splice(existingIndex, 1);
                    return {...state, yourEvents: updatedYourEvents};
                } else 
                    return {...state, yourEvents: state.yourEvents.concat(state.allEvents.find(event => event.id===action.id))};
        default:
            return state;    
    }
};

export default eventsReducer;