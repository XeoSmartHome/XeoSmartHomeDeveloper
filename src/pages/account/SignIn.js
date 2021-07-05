import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faEnvelope, faUnlockAlt} from "@fortawesome/free-solid-svg-icons";
import {Button, Card, Col, Container, Form, FormCheck, InputGroup, Row} from '@themesberg/react-bootstrap';
import {Link} from 'react-router-dom';

import {Routes} from "../../routes";
import BgImage from "../../assets/img/illustrations/signin.svg";
import {API} from "../../api/API";


export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const onLoginCallback = (response) => {
        console.log(response);
    }

    const onFormSubmit = () => {
        API.login({
            emailAddress: email,
            password: password
        }).then(onLoginCallback);
    }

    return (
        <main>
            <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
                <Container>
                    <p className="text-center">
                        <Card.Link as={Link} to={Routes.Dashboard.path} className="text-gray-700">
                            <FontAwesomeIcon icon={faAngleLeft} className="me-2"/> Back to homepage
                        </Card.Link>
                    </p>
                    <Row className="justify-content-center form-bg-image" style={{backgroundImage: `url(${BgImage})`}}>
                        <Col xs={12} className="d-flex align-items-center justify-content-center">
                            <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                                <div className="text-center text-md-center mb-4 mt-md-0">
                                    <h3 className="mb-0">Sign in XeoSmartHome</h3>
                                </div>
                                <Form className="mt-4" onSubmit={onFormSubmit}>
                                    <Form.Group id="email" className="mb-4">
                                        <Form.Label>Your Email</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Text>
                                                <FontAwesomeIcon icon={faEnvelope}/>
                                            </InputGroup.Text>
                                            <Form.Control autoFocus required type="email" placeholder="Email"
                                                          onChange={onEmailChange}/>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Group id="password" className="mb-4">
                                            <Form.Label>Your Password</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text>
                                                    <FontAwesomeIcon icon={faUnlockAlt}/>
                                                </InputGroup.Text>
                                                <Form.Control required type="password" placeholder="Password"
                                                              onChange={onPasswordChange}/>
                                            </InputGroup>
                                        </Form.Group>
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <Form.Check type="checkbox">
                                                <FormCheck.Input id="defaultCheck5" className="me-2"/>
                                                <FormCheck.Label htmlFor="defaultCheck5" className="mb-0">Remember
                                                    me</FormCheck.Label>
                                            </Form.Check>
                                            <Card.Link as={Link} to={Routes.ForgotPassword.path} className="small text-end">Lost password?</Card.Link>
                                        </div>
                                    </Form.Group>
                                    <Button variant="primary" type="submit" className="w-100">
                                        Sign in
                                    </Button>
                                </Form>

                                {/*<div className="mt-3 mb-4 text-center">
                                    <span className="fw-normal">or login with</span>
                                </div>
                                <div className="d-flex justify-content-center my-4">
                                    <Button variant="outline-light"
                                            className="btn-icon-only btn-pill text-facebook me-2">
                                        <FontAwesomeIcon icon={faFacebookF}/>
                                    </Button>
                                    <Button variant="outline-light"
                                            className="btn-icon-only btn-pill text-twitter me-2">
                                        <FontAwesomeIcon icon={faTwitter}/>
                                    </Button>
                                    <Button variant="outline-light" className="btn-icon-only btn-pil text-dark">
                                        <FontAwesomeIcon icon={faGithub}/>
                                    </Button>
                                </div>*/}
                                <div className="d-flex justify-content-center align-items-center mt-4">
                                    <span className="fw-normal">
                                        Not registered?
                                        <Card.Link as={Link} to={Routes.SignUp.path} className="fw-bold">
                                            {` Create account `}
                                        </Card.Link>
                                    </span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
};
