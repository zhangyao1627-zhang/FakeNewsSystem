import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,

    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,

    LOGOUT,
} from '../constants/userConstants'

// login
export const LoginReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {loading: true}
        case LOGIN_SUCCESS:
            return {loading: false, userCurrent: action.payload}
        case LOGIN_FAIL:
            return {loading: false, error: action.payload}
        case LOGOUT:
            return {}
        default:
            return state
    }
}

// register
export const RegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {loading: true}
        case REGISTER_SUCCESS:
            return {loading: false, userCurrent: action.payload}
        case REGISTER_FAIL:
            return {loading: false, error: action.payload}
        case LOGOUT:
            return {}
        default:
            return state
    }
}

// log-out
export const logout = () => async (dispatch) => {

    //1. 移走 userCurrent
    localStorage.removeItem('userCurrent')
    dispatch({type: LOGOUT})
}
