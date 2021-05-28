import {
  FIND_LAW_BY_ID,
  GET_LAWS
  } from "../action/type";
  
  const initialState = {
    laws: [],
    selectedLawDetails: {}
  };
  
  // Creating my reducer
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case GET_LAWS:
        return {
          ...state,
          laws: action.payload
        };
      case FIND_LAW_BY_ID:
        debugger
        return {
          ...state,
          selectedLawDetails: action.payload
        };
      default:
          return state;
      };
    };