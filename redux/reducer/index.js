import {
    combineReducers
  } from "redux";
  import {reducer as toastrReducer} from 'react-redux-toastr'
  
  import user from './user'
  import laws from './laws'
  import judgements from './judgements'

  const combinedReducer = combineReducers({
    toastr: toastrReducer,
    user,
    laws,
    judgements
  });
  
  export default combinedReducer
  