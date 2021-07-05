import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Form, Row} from '@themesberg/react-bootstrap';
import {Actions} from "./Components/Actions";
import {API} from "../../../api/API";
import {useParams} from "react-router-dom";
import DeleteDeviceButton from "./Components/DeleteDeviceButton";
import CreateActionButton from "./Components/CreateActionButton";


export default () => {
    const [deviceType, setDeviceType] = useState(null);
    const [unsavedChanges, setUnsavedChanges] = useState(false);
    const {deviceTypeId} = useParams();

    const getDeviceTypeCallback = (response) => {
        setDeviceType(response.deviceType);
    };

    const getDeviceType = () => {
        API.getDeviceType({
            id: deviceTypeId
        }).then(
            getDeviceTypeCallback
        ).catch(
            (error) => {
                console.log(error);
            }
        );
    };

    useEffect(() => {
        getDeviceType();
    }, [deviceTypeId]);

    const onDeviceTypeNameChange = (event) => {
        setDeviceType(
            {
                ...deviceType,
                name: event.target.value
            }
        );
        setUnsavedChanges(true);
    };

    const onDeviceTypeDescriptionChange = (event) => {
        setDeviceType(
            {
                ...deviceType,
                description: event.target.value
            }
        );
        setUnsavedChanges(true);
    };

    const updateDeviceTypeCallback = (response) => {
        console.log(response);
        if (response.status === 200) {
            setDeviceType({
                ...deviceType,
                ...response.deviceType
            });
        }
        setUnsavedChanges(false);
    };

    const updateDeviceType = () => {
        API.updateDeviceType({
            id: deviceType.id,
            name: deviceType.name,
            description: deviceType.description,
        }).then(
            updateDeviceTypeCallback
        ).catch(
            (error) => {
                console.log(error);
            }
        );
    };

    const onSaveButtonClick = () => {
        updateDeviceType();
    };

    const onDeviceTypeDeleted = () => {
        console.log('Device was deleted. Should go to main page.')
    };

    const onActionTypeCreated = () => {
        getDeviceType();
    };

    if (deviceType === null) {
        return null;
    }

    const deviceNameIsValid = deviceType.name.length > 0;
    const deviceDescriptionIsValid = deviceType.description.length > 0;

    return (
        <article>
            <Container className="px-0">
                <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
                    <Col className="d-block mb-4 mb-md-0">
                        <h1 className="h2">{deviceType.name}</h1>
                        <p className="mb-0" style={{wordBreak: "break-word"}}>
                            {deviceType.description}
                        </p>
                    </Col>
                </Row>

                <Form className="py-2">
                    <Form.Group className="mb-3">
                        <Form.Label>Device name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            isValid={deviceNameIsValid && unsavedChanges}
                            isInvalid={!deviceNameIsValid}
                            value={deviceType.name}
                            onChange={onDeviceTypeNameChange}
                        />
                        <Form.Control.Feedback
                            type={deviceNameIsValid ? "valid" : "invalid"}
                        >
                            {deviceNameIsValid ? "Look's good." : "Invalid device name."}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Device description</Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            style={{height: 200, minHeight: 150}}
                            type="text"
                            isValid={deviceDescriptionIsValid && unsavedChanges}
                            isInvalid={!deviceDescriptionIsValid}
                            value={deviceType.description}
                            onChange={onDeviceTypeDescriptionChange}
                        />
                        <Form.Control.Feedback
                            type={deviceDescriptionIsValid ? "valid" : "invalid"}
                        >
                            {deviceDescriptionIsValid ? "Look's good." : "Invalid device description."}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>

                <Row className="d-flex flex-wrap flex-md-nowrap align-items-center">
                    <Col className="d-block mb-4 mb-md-0">
                        <Button
                            variant="tertiary "
                            disabled={!unsavedChanges}
                            className="float-end m-1"
                            onClick={onSaveButtonClick}
                        >
                            Save changes
                        </Button>
                    </Col>
                </Row>

                <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-2">
                    <Col className="d-block mb-4 mb-md-0">
                        <h1 className="h2">
                            Actions
                        </h1>
                    </Col>
                </Row>

                <Actions actionTypes={deviceType.actionsTypes}/>

                {/*<div className="py-2">
                    <Button className="m-1">Create new action</Button>
                </div>*/}
                <CreateActionButton
                    deviceType={deviceType}
                    onActionTypeCreated={onActionTypeCreated}
                />

                <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-2">
                    <Col className="d-block mb-4 mb-md-0">
                        <h1 className="h3">
                            Danger zone
                        </h1>
                    </Col>
                </Row>

                <DeleteDeviceButton
                    deviceTypeId={deviceType.id}
                    deviceTypeName={deviceType.name}
                    onDeviceTypeDeleted={onDeviceTypeDeleted}
                />

            </Container>
        </article>
    )
};
