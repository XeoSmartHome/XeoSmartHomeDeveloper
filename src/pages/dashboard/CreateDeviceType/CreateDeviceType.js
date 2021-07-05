import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from '@themesberg/react-bootstrap';
import {API} from "../../../api/API";
import {useHistory} from 'react-router-dom'
import {Routes} from "../../../routes";
import {validateDeviceDescription, validateDeviceName} from "../../../utils/Validators";
import {useDispatch} from "react-redux";
import {addDeviceTypeAction} from "../../../store/actions/devicesTypesActions";


export default () => {
    const [deviceName, setDeviceName] = useState('');
    const [deviceDescription, setDeviceDescription] = useState('');

    const [deviceNameIsValid, setDeviceNameISValid] = useState(null);
    const [nameFeedback, setNameFeedback] = useState('');

    const [deviceDescriptionIsValid, setDeviceDescriptionIsValid] = useState(null);
    const [descriptionFeedback, setDescriptionFeedback] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const onDeviceNameChange = (event) => {
        const name = event.target.value;
        setDeviceName(name);

        const {valid, message} = validateDeviceName(name);
        setDeviceNameISValid(valid);
        setNameFeedback(message);
    };

    const onDeviceDescriptionChange = (event) => {
        const description = event.target.value;
        setDeviceDescription(description);
        const {valid, message} = validateDeviceDescription(description);
        setDeviceDescriptionIsValid(valid);
        setDescriptionFeedback(message);
    };

    const createDeviceTypeCallback = (response) => {
        console.log(response);
        if (response.status === 200) {
            dispatch(addDeviceTypeAction(response.deviceType));
            history.replace(Routes.DeviceType.path.replace(Routes.DeviceType.deviceTypeId, response.deviceType.id))
        }
    };

    const createDeviceType = () => {
        API.createDeviceType({
            name: deviceName,
            description: deviceDescription
        }).then(
            createDeviceTypeCallback
        ).catch(
            (error) => {
                console.log(error);
            }
        );
    };

    const buttonEnabled = deviceNameIsValid === true && deviceDescriptionIsValid === true;

    return (
        <article>
            <Container className="px-0">
                <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
                    <Col className="d-block mb-4 mb-md-0">
                        <h1 className="h2">Create new device type</h1>
                        <p className="mb-0" style={{wordBreak: "break-word"}}>
                            Here you can create a new device type.
                        </p>
                    </Col>
                </Row>

                <Form className="py-2">
                    <Form.Group className="mb-3">
                        <Form.Label>Device name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value={deviceName}
                            onChange={onDeviceNameChange}
                            isValid={deviceNameIsValid === true}
                            isInvalid={deviceNameIsValid === false}
                        />
                        <Form.Control.Feedback
                            type={deviceNameIsValid ? "valid" : "invalid"}
                        >
                            {nameFeedback}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Device description</Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            type="text"
                            style={{height: 200, minHeight: 150}}
                            value={deviceDescription}
                            onChange={onDeviceDescriptionChange}
                            isValid={deviceDescriptionIsValid === true}
                            isInvalid={deviceDescriptionIsValid === false}
                        />
                        <Form.Control.Feedback
                            type={deviceDescriptionIsValid ? "valid" : "invalid"}
                        >
                            {descriptionFeedback}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Row className="d-flex flex-wrap flex-md-nowrap align-items-center">
                        <Col className="d-block mb-4 mb-md-0">
                            <Button
                                variant="tertiary "
                                disabled={!buttonEnabled}
                                className="float-end m-1"
                                onClick={createDeviceType}
                            >
                                Create
                            </Button>
                        </Col>
                    </Row>
                </Form>

            </Container>
        </article>
    )
};
