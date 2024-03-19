<<<<<<< HEAD
import React from 'react'

const  Login = () => {
  return (
    <div>
      
    </div>
  )
}

export default Login
=======
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
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

const Login = () => {

  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleLogin = () =>{
    
  } 

  const handleChange = async () =>{
    try{

    }
    catch(error){

    }
  }

  const handleSubmit = async () =>{
    try{

    }
    catch(error){

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
        <Container className="card-title d-flex text-center">
          <Row>
            <h3>Login</h3>
          </Row>
        </Container>
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
            <Col className="column col-12 col-xl-6 m-3">
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <div className="submit">
                  <Button className="btn-login" type="submit">
                    Sign In
                  </Button>
                  <Link to="/password" className="link-redirect">
                    <p></p>Forgot password?
                  </Link>
                  <Link to="/register" className="link-redirect">
                    Do you need an account?
                  </Link>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Login;
>>>>>>> c9ebccdded6f1fd9a5f2e0e3abb67deb5704b28f
