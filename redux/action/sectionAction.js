import {
    FIND_SECTION_BY_ID,
    GET_SECTIONS
    } from "./type";
    import {
      sendHttpCall
    } from '../../utility/api/apiCaller'
    import {
      toastr
    } from 'react-redux-toastr'
    import urlMapper from '../../utility/api/urlMapper'
    import _ from 'lodash'
    
    export const getSections = () => (dispatch) => {
      return new Promise((resolve, reject) => {
        sendHttpCall(dispatch, 'get', `${urlMapper.getSections}`)
          .then(res => {
            dispatch({
              type: GET_SECTIONS,
              payload: res.data,
            });
            return resolve(res)
          }).catch(err => {
            toastr.error('Error', 'Something went wrong!')
            return reject()
          })
      })
    };
  
    export const findSectionById = () => (dispatch) => {
      return new Promise((resolve, reject) => {
        sendHttpCall(dispatch, 'post', `${urlMapper.findSectionById}${_id}`)
          .then(res => {
            dispatch({
              type: FIND_SECTION_BY_ID,
              payload: res.data,
            });
            return resolve(res)
          }).catch(err => {
            toastr.error('Error', 'Something went wrong!')
            return reject()
          })
      })
    };