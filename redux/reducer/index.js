import {
    combineReducers
  } from "redux";
  import {reducer as toastrReducer} from 'react-redux-toastr'
  
  import user from './user'

  const combinedReducer = combineReducers({
    toastr: toastrReducer,
    user
  });
  
  export default combinedReducer
  