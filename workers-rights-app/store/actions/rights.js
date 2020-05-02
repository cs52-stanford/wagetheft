// import Firebase from '../config/Firebase.js'

// export const GET_RIGHTS_CATEGORIES = 'GET_RIGHTS_CATEGORIES'


// export const getRightsCategories = () => {
//     return async dispatch => {
//         const response = await fetch('https://wage-theft-6c007.firebaseio.com/rights-categories.json');
//         const resData = await response.json();
//         console.log(resData);

//         dispatch({ 
//             rightsCategories: resData,
//             type: GET_RIGHTS_CATEGORIES
//         });
//     }
// };

// // define types


// export const getRightsCategories = () => {
//     return {
//         rightsCategories: []
//     }
// }