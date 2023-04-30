import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {LoginReducer, RegisterReducer} from "./reducers/userReducers"

// 1. 先对 redux 所有功能进行定义
// 注意 state 调用的是这里面的每一个 reducer, 然后再进行进一步处理
const reducer = combineReducers({
    login_Func: LoginReducer,
    register_Func: RegisterReducer,
})

// - user
const userCurrentFromStorage = localStorage.getItem('userCurrent') ?
    JSON.parse(localStorage.getItem('userCurrent')) : null

const initialState = {
    // Login - state /
    login_Func: {userCurrent: userCurrentFromStorage},
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store