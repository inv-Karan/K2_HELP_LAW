export const API_REQUEST = "API_REQUEST";
export const API_REQUEST_SUCCESS = "API_REQUEST_SUCCESS";
export const API_REQUEST_FAILURE = 'API_REQUEST_FAILURE';

export const sendApiRequest = () => {
  return {
    type: API_REQUEST,
    payload: true
  }
}

export const apiRequestSuccess = () => {
  return {
    type: API_REQUEST_SUCCESS,
    payload: false
  }
}

export const apiRequestFailure = () => {
  return {
    type: API_REQUEST_FAILURE,
    payload: false
  }
}