import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,

    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,

    LOGOUT,
} from '../constants/userConstants'

import axios from "axios"

export const login = (username, password) => async (dispatch) => {
    try {
        dispatch({
            type: LOGIN_REQUEST
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const {data} = await axios.post(
            'user/login/',{'username': username, 'password': password},
            config
        )
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userCurrent', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const register = (username, password) => async (dispatch) => {
    try {
        dispatch({
            type: REGISTER_REQUEST
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const {data} = await axios.post(
            'user/register/',{'username':username, 'password': password},
            config
        )
        dispatch({
            type: REGISTER_SUCCESS,
            payload: data
        })
        // 注册完成 后 进行相对应的登录操作 (type 只是一种显示: 本身不具备任何函数效果)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userCurrent', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })
    }
}


