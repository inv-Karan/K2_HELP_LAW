const BASE_URL = 'https://k2helplaw.herokuapp.com/api/v1/'

export default {
    sendOTP: `${BASE_URL}user/sendOTP`,
    checkOTP: `${BASE_URL}user/checkOTP`,
    completeProfile: `${BASE_URL}user/completeProfile`,
    login: `${BASE_URL}user/login`
}
