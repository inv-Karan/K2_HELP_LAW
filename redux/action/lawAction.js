import {
  FIND_LAW_BY_ID,
  GET_LAWS
  } from "./type";
  import {
    sendHttpCall
  } from '../../utility/api/apiCaller'
  import {
    toastr
  } from 'react-redux-toastr'
  import urlMapper from '../../utility/api/urlMapper'
  import _ from 'lodash'
  
  export const getLaws = () => (dispatch) => {
    return new Promise((resolve, reject) => {
      sendHttpCall(dispatch, 'get', `${urlMapper.getLaws}`)
        .then(res => {
          dispatch({
            type: GET_LAWS,
            payload: res.data,
          });
          return resolve(res)
        }).catch(err => {
          toastr.error('Error', 'Something went wrong!')
          return reject()
        })
    })
  };

  export const findLawById = () => (dispatch) => {
    return new Promise((resolve, reject) => {
      sendHttpCall(dispatch, 'post', `${urlMapper.findLawById}${_id}`)
        .then(res => {
          dispatch({
            type: FIND_LAW_BY_ID,
            payload: res.data,
          });
          return resolve(res)
        }).catch(err => {
          toastr.error('Error', 'Something went wrong!')
          return reject()
        })
    })
  };