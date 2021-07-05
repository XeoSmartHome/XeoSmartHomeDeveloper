import {Button, Form, Modal} from "@themesberg/react-bootstrap";
import React, {useState} from "react";
import {API} from "../../../../api/API";
import {validateActionDescription, validateActionName, validateActionUri} from "../../../../utils/Validators";


export default ({deviceType, onActionTypeCreated}) => {
    const [showModal, setShowModal] = useState(false);

    const [actionName, setActionName] = useState('');
    const [actionUri, setActionUri] = useState('');
    const [actionDescription, setActionDescription] = useState('');

    const [actionNameIsValid, setActionNameIsValid] = useState(null);
    const [actionUriIsValid, setActionUriIsValid] = useState(null);
    const [actionDescriptionIsValid, setActionDescriptionIsValid] = useState(null);

    const [nameFeedback, setNameFeedback] = useState({message: ''});
    const [uriFeedback, setUriFeedback] = useState({message: ''});
    const [descriptionFeedback, setDescriptionFeedback] = useState({message: ''});

    const openModal = () => {
        setActionName('');
        setActionUri('');
        setActionDescription('');
        setActionNameIsValid(null);
        setActionUriIsValid(null);
        setActionDescriptionIsValid(null);
        setShowModal(true);
    };

    const closeModal = () => setShowModal(false);

    const onActionNameChange = (event) => {
        const name = event.target.value;
        setActionName(name);
        const {valid, message} = validateActionName(name);
        setActionNameIsValid(valid);
        setNameFeedback({message: message});
    };

    const onActionUriChange = (event) => {
        const uri = event.target.value;
        setActionUri(uri)
        const {valid, message} = validateActionUri(uri);
        setActionUriIsValid(valid);
        setUriFeedback({message: message});
    };

    const onActionDescriptionChange = (event) => {
        const description = event.target.value;
        setActionDescription(description);
        const {valid, message} = validateActionDescription(description);
        setActionDescriptionIsValid(valid);
        setDescriptionFeedback({message: message});
    };

    const buttonEnabled = actionNameIsValid === true && actionUriIsValid === true && actionDescriptionIsValid === true;

    const createActionTypeCallback = (response) => {
        console.log(response);
        if (response.status === 200) {
            closeModal();
            onActionTypeCreated();
        }
    };

    const createActionType = () => {
        API.createActionType({
            deviceTypeId: deviceType.id,
            name: actionName,
            uri: actionUri,
            description: actionDescription
        }).then(
            createActionTypeCallback
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    };

    return (
        <>
            <Button variant="primary" className="my-3 m-1" onClick={openModal}>
                Create new action type
            </Button>

            <Modal as={Modal.Dialog} centered show={showModal} onHide={closeModal}>
                <Modal.Header>
                    <Modal.Title className="h6">
                        Create new action type for "{deviceType.name}"
                    </Modal.Title>
                    <Button variant="close" aria-label="Close" onClick={closeModal}/>
                </Modal.Header>
                <Modal.Body>
                    <Form className="py-2">
                        <Form.Group className="mb-3">
                            <Form.Label>
                                Action name
                            </Form.Label>
                            <Form.Control
                                type={"text"}
                                value={actionName}
                                onChange={onActionNameChange}
                                isValid={actionNameIsValid === true}
                                isInvalid={actionNameIsValid === false}
                            />
                            <Form.Control.Feedback
                                type={actionNameIsValid ? "valid" : "invalid"}
                            >
                                {nameFeedback.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>
                                Action URI
                            </Form.Label>
                            <Form.Control
                                type={"text"}
                                value={actionUri}
                                onChange={onActionUriChange}
                                isValid={actionUriIsValid === true}
                                isInvalid={actionUriIsValid === false}
                            />
                            <Form.Control.Feedback
                                type={actionUriIsValid ? "valid" : "invalid"}
                            >
                                {uriFeedback.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>
                                Action description
                            </Form.Label>
                            <Form.Control
                                type={"text"}
                                as="textarea"
                                style={{height: 200, minHeight: 150}}
                                value={actionDescription}
                                onChange={onActionDescriptionChange}
                                isValid={actionDescriptionIsValid === true}
                                isInvalid={actionDescriptionIsValid === false}
                            />
                            <Form.Control.Feedback
                                type={actionDescriptionIsValid ? "valid" : "invalid"}
                            >
                                {descriptionFeedback.message}
                            </Form.Control.Feedback>
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
                        onClick={createActionType}
                    >
                        Create action
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}