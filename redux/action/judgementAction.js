import {
    GET_JUDGEMENTS,
    FIND_JUDGEMENT_BY_ID
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

  export const findJudgementById = () => (dispatch) => {
    return new Promise((resolve, reject) => {
      sendHttpCall(dispatch, 'post', `${urlMapper.findJudgementById}${_id}`)
        .then(res => {
          dispatch({
            type: FIND_JUDGEMENT_BY_ID,
            payload: res.data,
          });
          return resolve(res)
        }).catch(err => {
          toastr.error('Error', 'Something went wrong!')
          return reject()
        })
    })
  };