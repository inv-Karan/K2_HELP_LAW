import {
    combineReducers
  } from "redux";
  import {reducer as toastrReducer} from 'react-redux-toastr'
  
  import user from './user'
  import laws from './laws'
  import judgements from './judgements'
  import sections from './sections'

  const combinedReducer = combineReducers({
    toastr: toastrReducer,
    user,
    laws,
    judgements,
    sections
  });
  
  export default combinedReducer
  