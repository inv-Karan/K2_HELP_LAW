import {
  FIND_LAW_BY_ID,
  GET_LAWS
  } from "../action/type";
  
  const initialState = {
    laws: {},
    lawById: {}
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
        return {
          ...state,
          lawById: action.payload
        };
      default:
          return state;
      };
    };