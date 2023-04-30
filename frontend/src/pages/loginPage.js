import React, {useState, useEffect} from 'react'
import {Button, Form, Row, Col, Container} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../actions/userActions";
import Message from "../components/message";
import Loader from "../components/loader";

function LoginPage(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const login_Func = useSelector(state => state.login_Func)
    const {error, loading, userCurrent} = login_Func



    useEffect(() => {
        if(userCurrent) {
            navigate('/person')
        }
    }, [navigate, userCurrent]);


    const submitHandler = (e) => {
        // 防止界面多次
        e.preventDefault()
        console.log(" At least Enter .....")
        dispatch(login(username, password))
    }


    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>

                    <h1>Sign In</h1>

                    {error && <Message variant='danger'>{error}</Message>}
                    {loading && <Loader/>}

                    <Form onSubmit={submitHandler}>

                        <Form.Group controlId='username'>
                            <Form.Control
                                type='username'
                                placeholder='Enter Username'
                                value={username}
                                onChange={(e)=>setUsername(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='password'>
                            <Form.Control
                                type='password'
                                placeholder='Enter Password'
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Button type='submit' variant='primary'>
                            Sign In
                        </Button>
                    </Form>

                    <Row className='py-3'>
                        <Col>
                            New Customer ? <Link to={'/register'}>Register Now</Link>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage