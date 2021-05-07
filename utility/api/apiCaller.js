import {
  HttpClient
} from './httpClient';
import * as apiSpinnerActions from '../../redux/action/apiSpinnerAction';
// import * as errorPagesActions from './errorPagesAction/index';
// import {logout} from '../action/loginAction';
import {
  deleteUser
} from "../../redux/action/userAction";
import { useRouter } from 'next/router'

const sendHttpCall = (dispatch, type, url, values, config = {}) => {

  return new Promise((resolve, reject) => {
    dispatch(apiSpinnerActions.sendApiRequest())
    return HttpClient[type](url, values, config)
      .then(res => {
        
        dispatch(apiSpinnerActions.apiRequestSuccess())
        resolve(res.data);
      })
      .catch(err => {
        dispatch(apiSpinnerActions.apiRequestFailure())
        if (err.response) {
          if (err.response.status == 401) {
            dispatch(deleteUser())
            // dispatch(errorPagesActions.errorUnauthorized())
          } else if (err.response.status == 403) {
            // dispatch(errorPagesActions.errorForbidden())
          } else if (err.response.status == 500) {
            // dispatch(errorPagesActions.error())
          } else if (err.response.status == 400) {
            // dispatch(errorPagesActions.error())
          } else {
            dispatch(deleteUser())
          }
        }
        reject(err)
      })
  })
}
export {
  sendHttpCall
}
