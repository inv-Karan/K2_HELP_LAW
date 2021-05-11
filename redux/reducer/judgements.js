import {
    GET_JUDGEMENTS
  } from "../action/type";
  
  const initialState = {
    judgements: {}
  };
  
  // Creating my reducer
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case GET_JUDGEMENTS:
        return {
          ...state,
          judgements: action.payload
        };
      default:
          return state;
      };
    };