import React, {useEffect, useState} from 'react';

import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import Message from "../components/message";
import Loader from "../components/loader";

import {register} from "../actions/userActions";

import {Container, Button, Col, Form, Row} from "react-bootstrap";

function RegisterPage() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    // 用来 密码不匹配弹出框 使用
    const [message, setMessage] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const register_Func = useSelector(state => state.register_Func)
    const {error, loading, userCurrent} = register_Func

    useEffect(() => {

        if(userCurrent) {
            navigate('/person')
        }

    }, [navigate, userCurrent]);

    const submitHandler = (e) => {

        e.preventDefault()

        if(password !== confirmPassword){
            setMessage('Passwords do not match')
        } else {
            console.log("Enter Here, At Least")
            dispatch(register(username, password))
        }
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>

                    <h1>Register</h1>

                    {message && <Message variant='danger'>{message}</Message>}
                    {error && <Message variant='danger'>{error}</Message>}
                    {loading && <Loader/>}

                    <Form>

                        <Form.Group controlId='username'>
                            <Form.Label>username</Form.Label>
                            <Form.Control
                                required
                                type='username'
                                placeholder='Enter Name'
                                value={username}
                                onChange={(e)=>setUsername(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type='password'
                                placeholder='Enter Password'
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='passwordConfirm'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                required
                                type='password'
                                placeholder='Confirm Password'
                                value={confirmPassword}
                                onChange={(e)=>setConfirmPassword(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Button type='submit' onClick={submitHandler} variant='primary'>
                            Register
                        </Button>
                    </Form>

                    <Row className='py-3'>
                        <Col>
                            Have an Account ? <Link to={"/login"}>Sign In</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default RegisterPage;