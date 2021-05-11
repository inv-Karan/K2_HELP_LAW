import {
    GET_LAWS
  } from "../action/type";
  
  const initialState = {
    laws: {}
  };
  
  // Creating my reducer
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case GET_LAWS:
        return {
          ...state,
          laws: action.payload
        };
      default:
          return state;
      };
    };