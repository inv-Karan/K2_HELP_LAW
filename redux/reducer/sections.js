import {
    FIND_SECTION_BY_ID,
    GET_SECTIONS
    } from "../action/type";
    
    const initialState = {
      sections: {},
      sectionById: {}
    };
    
    // Creating my reducer
    export default function reducer(state = initialState, action) {
      switch (action.type) {
        case GET_SECTIONS:
          return {
            ...state,
            sections: action.payload
          };
        case FIND_SECTION_BY_ID:
          return {
            ...state,
            sectionById: action.payload
          };
        default:
            return state;
        };
      };