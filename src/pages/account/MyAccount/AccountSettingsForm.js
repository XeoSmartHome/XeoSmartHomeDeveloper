import {Button, Card, Col, Form, Row} from "@themesberg/react-bootstrap";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const phoneNumberRegex = /^(\+)?[0-9]*$/;

export default (props) => {
    const reduxUserInfo = useSelector(store => store.userInfo);
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        setUserInfo({...userInfo, ...reduxUserInfo})
    }, [reduxUserInfo]);

    const onFirstNameChange = (event) => {
        setUserInfo({
            ...userInfo,
            firstName: event.target.value
        });
    };

    const onLastNameChange = (event) => {
        setUserInfo({
            ...userInfo,
            lastName: event.target.value
        });
    };

    const onEmailAddressChange = (event) => {
        setUserInfo({
            ...userInfo,
            emailAddress: event.target.value
        });
    };

    const onPhoneNumberChange = (event) => {
        const value = event.target.value;

        if (!phoneNumberRegex.test(value)) {
            return;
        }

        setUserInfo({
            ...userInfo,
            phoneNumber: value
        });
    };

    return (
        <Card border="light" className="bg-white shadow-sm mb-4">
            <Card.Body>
                <h5 className="mb-4">General information</h5>
                <Form>
                    <Row>
                        <Col md={6} className="mb-3">
                            <Form.Group id="first-name">
                                <Form.Label>Developer First Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter your first name"
                                    value={userInfo.firstName}
                                    onChange={onFirstNameChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Form.Group id="last-name">
                                <Form.Label>Developer Last Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter your last name"
                                    value={userInfo.lastName}
                                    onChange={onLastNameChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6} className="mb-3">
                            <Form.Group id="email-address">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="name@company.com"
                                    value={userInfo.emailAddress}
                                    onChange={onEmailAddressChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Form.Group id="phone-number">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter phone number"
                                    value={userInfo.phoneNumber}
                                    onChange={onPhoneNumberChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <h5 className="my-4">Company Address</h5>

                    <Row>
                        <Col sm={4} className="mb-3">
                            <Form.Group id="address-country">
                                <Form.Label>Country</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Country"
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={4} className="mb-3">
                            <Form.Group id="address-state">
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="State"
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={4} className="mb-3">
                            <Form.Group id="address-city">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="City"
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12} className="mb-3">
                            <Form.Group id="address-street">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Address"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="mt-3">
                        <Button variant="primary" type="submit">Save All</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    )
};
