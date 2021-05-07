import {
    USER_SET_TOKEN,
    USER_GET_TOKEN,
    USER_DELETE_TOKEN,
    STATUS_GET,
    STATUS_SHOW,
    USER_SET_ID,
    WEATHER_DELETE,
    USER_GET_OTP
  } from "./type";
  import {
    sendHttpCall
  } from '../../utiliy/api/apiCaller';
  import {
    toastr
  } from 'react-redux-toastr';
  import urlMapper from '../../utiliy/api/urlMapper';
  
  export const newUser = (values,webToken) => (dispatch) => {
    return new Promise((resolve, reject) => {
      sendHttpCall(dispatch, 'post', urlMapper.newRegistration, values)
        .then(res => {
          dispatch({
            type: USER_GET_TOKEN,
            payload: res.success[0]
          });
          dispatch(setUser(values.email, values.password, webToken, values))
          .then(r => {
            return resolve(res)
          })
        }).catch(err => {
          toastr.error('Number is already in use', 'This number is already with an another user. Please try with a different number.')
          return reject(err)
        })
    })
  };
  
  export const updateUser = (values,id) => (dispatch) => {
    return new Promise((resolve, reject) => {
      sendHttpCall(dispatch, 'post', urlMapper.updateProfile+id, values)
          .then(res => {
            dispatch(setUser(values.email, values.password))
            .then(r => {
              return resolve(res)
            })
          }).catch(err => {
            toastr.error('Unauthorized', 'Please try again!')
            return reject(err)
      })
    })
  };
  
  export const setUser = (phone, password, webToken) => (dispatch) => {
    return new Promise((resolve, reject) => {
      sendHttpCall(dispatch, 'post', urlMapper.login, {
          phone,
          password,
          web_id: webToken,
          device_id: webToken
        })
        .then(res => {
          dispatch({
            type: USER_SET_TOKEN,
            payload: res.success[0],
          });
          return resolve(res)
        }).catch(err => {
          toastr.error('Unauthorized', 'Please check your Mobile number and password then try again!')
          return reject(err)
        })
    })
  };
  
  export const setSocialLogin = (email, name, webToken) => (dispatch) => {
    return new Promise((resolve, reject) => {
      sendHttpCall(dispatch, 'post', urlMapper.loginSocial, {
        email,
        name,
        web_id: webToken,
        device_id: webToken
      })
          .then(res => {
            if(res.error === false){
              if(res.success[0]){
                res.success = res.success[0]
              }
              if(res.success.designation_id==null){
                return resolve(res)
              }else{
                dispatch({
                  type: USER_SET_TOKEN,
                  payload: res.success,
                });
                return resolve(res)
              }
            }
          }).catch(err => {
          toastr.error('Unauthorized', 'This email id or mobile number is already in use!')
          return reject(err)
      })
    })
  };
  
  export const getUserId = () => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      const user_id = getState().user.userData.user_id
      dispatch({
        type: USER_SET_ID,
        payload: user_id,
      });
      return resolve(user_id);
    })
  };
  
  export const resetPassword = (password) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      const user_id = getState().user.userData.user_id
      sendHttpCall(dispatch, 'post', urlMapper.resetPassword, {
          newpass: password,
          uid: user_id
        })
        .then(res => {
          toastr.success('Success', 'Password reset successfully!')
          return resolve(res)
        }).catch(err => {
          toastr.error('Passwords not matched', 'Please try again!')
          return reject(err)
        })
  
    })
  };
  
  export const deleteUser = () => (dispatch) => {
    return new Promise((resolve) => {
      dispatch({
        type: USER_DELETE_TOKEN,
        payload: {},
      });
      dispatch({
        type: WEATHER_DELETE
      });
      return resolve('hi')
    })
  };
  
  export const sendOTP = (mobile) => (dispatch) => {
    return new Promise((resolve, reject) => {
      sendHttpCall(dispatch, 'post', `${urlMapper.sendOTP}`, mobile)
      .then(res => {
        dispatch({
          type: USER_GET_OTP,
          payload: res,
        });
        return resolve(res)
      }).catch(err => {
        return reject(err)
      })
    })
  };

  export const checkOTP = (mobile, otp) => (dispatch) => {
    let values = {
      mobile,
      otp
    }
    return new Promise((resolve, reject) => {
      sendHttpCall(dispatch, 'post', `${urlMapper.verifyOTP}`, values)
      .then(res => {
        return resolve(res)
      }).catch(err => {
        return reject(err)
      })
    })
  }
  
  export const forgotPassword = (mobile, newpassword) => (dispatch) => {
    return new Promise((resolve, reject) => {
      let values = {
        mob: mobile,
        newpass: newpassword
      }
      sendHttpCall(dispatch, 'post', `${urlMapper.forgotPassword}`, values)
      .then(res => {
        return resolve(res)
      }).catch(err => {
        return reject(err)
      })
    })
  };
  
  export const getStatus = () => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      const user_id = getState().user.userData.user_id
      sendHttpCall(dispatch, 'get', `${urlMapper.getStatus}${user_id}`)
      .then(res => {
        dispatch({
          type: STATUS_GET,
          payload: res,
        });
        return resolve(res)
        }).catch(err => {
          return reject(err)
        })
    })
  };
  
  export const updateStatus = (values) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      debugger
      const user_id = getState().user.userData.user_id
      values.user_id = user_id
      sendHttpCall(dispatch, 'post', `${urlMapper.addAttendance}`, values)
      .then(res => {
        dispatch(getStatus())
        return resolve(res)
      }).catch(err => {
        toastr.error('Error', 'Something went wrong!')
        return reject()
      })
    })
  };
  
  export const showStatus = () => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      const user_id = getState().user.userData.user_id
      sendHttpCall(dispatch, 'get', `${urlMapper.getAttendance}${user_id}`)
      .then(res => {
        dispatch({
          type: STATUS_SHOW,
          payload: res.details,
        });
        return resolve(res)
        }).catch(err => {
          return reject(err)
        })
    })
  };