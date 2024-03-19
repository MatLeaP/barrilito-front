<<<<<<< HEAD
import React from 'react'
import { Form, Button, Container, Row, Col, Image, Alert } from "react-bootstrap";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import logo from "../../assets/barrilito imagen.png"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../Redux/Actions/Actions';

const Register = () =>{
    const  dispatch=useDispatch(); 
    const navigate = useNavigate();
    const [userName, setUsername] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [country, setCountry] = useState("")
    const [email, setUseremail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    //const roles = 1;

    const handleRegister = async (e) => {
        e.preventDefault();
        const data = {
            id: null,
            userName: userName,
            firstName : firstName,
            lastName : lastName,
            country : country,
            email: email,
            password: password,
            roles: [],
            }

            
        dispatch(register(data));
        //navigate("/")
    }

    


return (
    <div>
        <div className="card p-5 mt-1 mb-3">
            <div className="w-100 text-start">
                <Link to="/" className="btn btn-primary">
                back to home
                </Link>
            </div>
        <div className="card-title text-center">
            <h3>Register</h3>
        </div>
        <Container className="no-flex">
            <Row>
                <Col className="text-center">
                    <Image
                    src={logo}
                    alt="Descripción de la imagen"
                    fluid
                    width={500}
                    />
                </Col>
                <Col className="column col-12 col-xl-6">
                    <Form onSubmit={handleRegister}>
                    <Form.Group controlId="formUsername">
                        <Form.Label>User</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder=""
                        value={userName}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        minLength={6}
                        maxLength={20}
                        />
                    </Form.Group>
                    <Form.Group controlId="formUseremail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                        type="email"
                        value={email}
                        maxLength={30}
                        required
                        onChange={(e) => setUseremail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formFirstname">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="formLastname">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                    <Form.Group controlId="formCountry">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        minLength={8}
                        maxLength={20}
                        />
                    </Form.Group>
                    <Form.Group controlId="formConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        minLength={8}
                        maxLength={20}
                        />
                    </Form.Group>
                    <div className="submits">
                        <Button className="btn-register mt-3" type="submit">
                        Register
                        </Button>
                        <Link to="/login" className="link-redirect">
                        Do you already have an account?
                        </Link>
                    </div>
                    </Form>
                </Col>
            </Row>
        </Container>
        </div>
=======
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useDispatch  } from 'react-redux'
import {
    Form,
    Button,
    Container,
    Row,
    Col,
    Image,
    Alert,
  } from "react-bootstrap";
import logo from "../../assets/barrilito imagen.png"

const  Register = () => {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState('');
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userCountry, setUserCountry] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [UserConfirmPassword, setUserConfirmPassword] = useState('');
    const roles = 1;
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault()

        const data = {
            id: null,
            userName: userName,
            userEmail: userEmail,
            userFirstName: userFirstName,
            userLastName: userLastName,
            userPassword: userPassword,
            roles: [1],
        }
    }


  return (
    <div>
    <div className="card p-5 mt-1 mb-3">
      <div className="w-100 text-start">
        <Link to="/" className="btn btn-primary">
          back to home
        </Link>
      </div>
      <div className="card-title text-center">
        <h3>Register</h3>
      </div>
      <Container className="no-flex">
        <Row>
          <Col className="text-center">
            <Image
              src={logo}
              alt="Descripción de la imagen"
              fluid
              width={500}
            />
          </Col>
          <Col className="column col-12 col-xl-6">
            <Form onSubmit={handleRegister}>
              <Form.Group controlId="formUsername">
                <Form.Label>User</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  requerid
                  minLength={6}
                  maxLength={20}
                />
              </Form.Group>
              <Form.Group controlId="formUserFirstName">
                <Form.Label>User</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={userFirstName}
                  onChange={(e) => setUserFirstName(e.target.value)}
                  requerid
                  minLength={6}
                  maxLength={20}
                />
              </Form.Group>
              <Form.Group controlId="formUserLastName">
                <Form.Label>User</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={userLastName}
                  onChange={(e) => setUserName(e.target.value)}
                  requerid
                  minLength={6}
                  maxLength={20}
                />
              </Form.Group>
              <Form.Group controlId="formUseremail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={userEmail}
                  maxLength={30}
                  required
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formUserCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  value={userCountry}
                  maxLength={30}
                  required
                  onChange={(e) => setUserCountry(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  minLength={8}
                  maxLength={20}
                />
              </Form.Group>
              <Form.Group controlId="formConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  value={confirmUserPassword}
                  onChange={(e) => setUserConfirmPassword(e.target.value)}
                  minLength={8}
                  maxLength={20}
                />
              </Form.Group>
              <div className="submits">
                <Button className="btn-register mt-3" type="submit">
                  Register
                </Button>
                <Link to="/login" className="link-redirect">
                  Do you already have an account?
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
>>>>>>> c644ad745c0429bcd80187e14d82e7ef7722d25a
  </div>
  )
}

export default Register
