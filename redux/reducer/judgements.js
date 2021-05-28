import {
  FIND_JUDGEMENT_BY_ID,
  GET_JUDGEMENTS
  } from "../action/type";
  
  const initialState = {
    judgements: [],
    judgementById: []
  };
  
  // Creating my reducer
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case GET_JUDGEMENTS:
        return {
          ...state,
          judgements: action.payload
        };
      case FIND_JUDGEMENT_BY_ID:
        return {
          ...state,
          judgementById: action.payload
        };
      default:
          return state;
      };
    };