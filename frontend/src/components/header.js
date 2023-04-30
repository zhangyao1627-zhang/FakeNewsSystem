import React from 'react';

import {LinkContainer} from 'react-router-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {logout} from "../reducers/userReducers";

function Header() {

    const login_Func = useSelector(state => state.login_Func)
    const {userCurrent} = login_Func

    console.log("Print -- Information")
    console.log(userCurrent)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submitHandler = () => {
       dispatch(logout())
       navigate('/login')
    }

    return (
        <header>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">

                    <LinkContainer to='/'>
                        <i className="navbar-brand"> Fake-News-Detection-System</i>
                    </LinkContainer>

                    <div className="collapse navbar-collapse d-flex" id="navbarColor02" >
                        <ul className="navbar-nav me-auto">

                            {/*无登录信息: 1.Login   有登录信息: 1.MainPage  2.Logout    */}
                            {userCurrent ? (
                                <LinkContainer to='/person'>
                                    <li className="nav-item nav-link"><i className="fas fa-user"></i></li>
                                </LinkContainer>
                            ):(
                                <LinkContainer to='/login'>
                                    <li className="nav-item nav-link"><i className="fas fa-user"></i>Login</li>
                                </LinkContainer>
                            )}

                        </ul>

                     </div>

                    {userCurrent ? (
                        <form className="d-flex">
                            <button className="btn btn-secondary my-2 my-sm-0" onClick={submitHandler}>Log-out</button>
                        </form>
                    ):(
                        <div></div>
                    )}

                </div>
            </nav>
        </header>
    );
}

export default Header;