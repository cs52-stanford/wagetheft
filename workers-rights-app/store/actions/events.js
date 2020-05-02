export const SET_YOUR_EVENT = 'SET_YOUR_EVENT';

export const setYourEvent = eventId => {
    return async dispatch => {
        const response = await fetch('https://wage-theft-6c007.firebaseio.com/events.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventId)
        });
        const resData = await response.json();
        console.log(resData);

        dispatch({ 
            type: SET_YOUR_EVENT, 
            id: eventId
        });
    }
};