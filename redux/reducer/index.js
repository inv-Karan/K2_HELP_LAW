import {
    combineReducers
  } from "redux";
  import {reducer as toastrReducer} from 'react-redux-toastr'
  
  const combinedReducer = combineReducers({
    
    toastr: toastrReducer,
    
  });
  
  export default combinedReducer
  