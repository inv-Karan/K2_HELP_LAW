import {
    USER_DELETE_TOKEN,
    USER_SET_TOKEN,
    USER_SET_ID,
    PROFILE_UPDATE,
    USER_GET_OTP
  } from "../action/type";
  
  const initialState = {
    userData: null,
    status: {},
    details: [],
    user_id: 0,
    otp: '',
    mobile:'',
    preferedlanguage: 'en'
  };
  
  // Creating my reducer
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case USER_SET_TOKEN:
        return {
          ...state,
          userData: {
            ...action.payload
          },
        };
      case PROFILE_UPDATE:
        return {
          ...state,
          userData: Object.assign({}, state.userData,action.payload)
        }
      case USER_DELETE_TOKEN:
        return {
          ...state,
          userData: null
        };
      case USER_GET_OTP:
        return {
          ...state,
          otp: action.payload,
          mobile: action.mobile
        }
      case USER_SET_ID:
        return {
          ...state,
          user_id: action.payload
        }
      default:
        return state;
    }
  }