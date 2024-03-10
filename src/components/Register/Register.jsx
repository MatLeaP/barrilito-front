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
import { register} from "../../Redux/Actions/Actions"

const  Register = () => {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState('');
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userCountry, setUserCountry] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [UserConfirmPassword, setUserConfirmPassword] = useState('');
    const role = 1;
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault()

        const data = {
            id: null,
            userName: userName,
            email: userEmail,
            firstName: userFirstName,
            lastName: userLastName,
            country : userCountry,
            password: userPassword,
            role: [1],
        }

        dispatch(register(data));

        setUserName("");
        setUserFirstName("");
        setUserLastName("");
        setUserCountry("");
        setUserEmail("");
        setUserPassword("");
        setUserConfirmPassword("");
        
        navigate("/");
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
                  required
                  minLength={6}
                  maxLength={20}
                />
              </Form.Group>
              <Form.Group controlId="formUserFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={userFirstName}
                  onChange={(e) => setUserFirstName(e.target.value)}
                  required
                  minLength={6}
                  maxLength={20}
                />
              </Form.Group>
              <Form.Group controlId="formUserLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={userLastName}
                  onChange={(e) => setUserLastName(e.target.value)}
                  required
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
                  value={userPassword}
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
  </div>
  )
}

export default Register
