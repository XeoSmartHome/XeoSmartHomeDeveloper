import React, {useState} from "react";
import {Button, Form, Modal} from "@themesberg/react-bootstrap";
import {validateActionDescription, validateActionName, validateActionUri} from "../../../../utils/Validators";
import {API} from "../../../../api/API";

export default ({actionType}) => {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const [name, setName] = useState('');
    const [uri, setUri] = useState('');
    const [description, setDescription] = useState('');
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(100);
    const [defaultValue, setDefaultValue] = useState(50);

    const [nameFeedback, setNameFeedback] = useState({valid: false, invalid: false, message: ''});
    const [uriFeedback, setUriFeedback] = useState({valid: false, invalid: false, message: ''});
    const [descriptionFeedback, setDescriptionFeedback] = useState({valid: false, invalid: false, message: ''});

    const onNameChange = (event) => {
        const name = event.target.value;
        setName(name);
        const {valid, message} = validateActionName(name);
        setNameFeedback({valid: valid, invalid: !valid, message: message});
    };

    const onUriChange = (event) => {
        const uri = event.target.value;
        setUri(uri);
        const {valid, message} = validateActionUri(uri);
        setUriFeedback({valid: valid, invalid: !valid, message: message});
    };

    const onDescriptionChange = (event) => {
        const description = event.target.value;
        setDescription(description);
        const {valid, message} = validateActionDescription(description);
        setDescriptionFeedback({valid: valid, invalid: !valid, message: message});
    };

    const onMinValueChange = (event) => {
        const minValue = event.target.value;
        setMinValue(minValue);
    };

    const onMaxValueChange = (event) => {
        const maxValue = event.target.value;
        setMaxValue(maxValue);
    };

    const onDefaultValueChange = (event) => {
        const defaultValue = event.target.value;
        setDefaultValue(defaultValue);
    }

    const buttonEnabled = nameFeedback.valid === true && uriFeedback.valid === true;

    const createParameterTypeCallback = (response) => {
        console.log(response);
        if (response.status === 200) {
            console.log("Parameter created")
        }
    };

    const createParameterType = () => {
        API.createParameterType({
            actionTypeId: actionType.id,
            name: name,
            uri: uri,
            description: description,
            minValue: minValue,
            maxValue: maxValue,
            defaultValue: defaultValue
        }).then(
            createParameterTypeCallback
        ).catch(
            (error) => {
                console.log(error);
            }
        );
    };

    return (
        <>
            <Button variant="primary" className="my-3 m-1" onClick={openModal}>
                Add new parameter
            </Button>

            <Modal as={Modal.Dialog} centered show={showModal} onHide={closeModal}>
                <Modal.Header>
                    <Modal.Title className="h6">
                        Add parameter type to "{actionType.name} {actionType.id}"
                    </Modal.Title>
                    <Button variant="close" aria-label="Close" onClick={closeModal}/>
                </Modal.Header>
                <Modal.Body>
                    <Form className="py-2">

                        <Form.Group className="mb-3">
                            <Form.Label>
                                Parameter name
                            </Form.Label>
                            <Form.Control
                                type={"text"}
                                value={name}
                                onChange={onNameChange}
                                isValid={nameFeedback.valid}
                                isInvalid={nameFeedback.invalid}
                            />
                            <Form.Control.Feedback
                                type={nameFeedback.valid ? "valid" : "invalid"}
                            >
                                {nameFeedback.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                Parameter URI
                            </Form.Label>
                            <Form.Control
                                type={"text"}
                                value={uri}
                                onChange={onUriChange}
                                isValid={uriFeedback.valid}
                                isInvalid={uriFeedback.invalid}
                            />
                            <Form.Control.Feedback
                                type={uriFeedback.valid ? "valid" : "invalid"}
                            >
                                {uriFeedback.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                Parameter description
                            </Form.Label>
                            <Form.Control
                                type={"text"}
                                as="textarea"
                                style={{height: 200, minHeight: 150}}
                                value={description}
                                onChange={onDescriptionChange}
                                isValid={descriptionFeedback.valid}
                                isInvalid={descriptionFeedback.invalid}
                            />
                            <Form.Control.Feedback
                                type={descriptionFeedback.valid ? "valid" : "invalid"}
                            >
                                {descriptionFeedback.message}
                            </Form.Control.Feedback>

                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                Minimum value
                            </Form.Label>
                            <Form.Control
                                type={"number"}
                                value={minValue}
                                onChange={onMinValueChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                Maximum value
                            </Form.Label>
                            <Form.Control
                                type={"number"}
                                value={maxValue}
                                onChange={onMaxValueChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                Default value
                            </Form.Label>
                            <Form.Control
                                type={"number"}
                                value={defaultValue}
                                onChange={onDefaultValueChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={closeModal}>
                        Cancel
                    </Button>
                    <Button
                        variant="success"
                        className="ms-auto"
                        disabled={!buttonEnabled}
                        onClick={createParameterType}
                    >
                        Add parameter
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}