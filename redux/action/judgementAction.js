import {
    GET_JUDGEMENTS
  } from "./type";
  import {
    sendHttpCall
  } from '../../utility/api/apiCaller'
  import {
    toastr
  } from 'react-redux-toastr'
  import urlMapper from '../../utility/api/urlMapper'
  import _ from 'lodash'
  
  export const getJudgements = () => (dispatch) => {
    return new Promise((resolve, reject) => {
      sendHttpCall(dispatch, 'get', `${urlMapper.getJudgements}`)
        .then(res => {
          dispatch({
            type: GET_JUDGEMENTS,
            payload: res.data,
          });
          return resolve(res)
        }).catch(err => {
          toastr.error('Error', 'Something went wrong!')
          return reject()
        })
    })
  };