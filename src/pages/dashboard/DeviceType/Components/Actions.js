import React, {useState} from "react";
import {Accordion, Button, Card, Form} from "@themesberg/react-bootstrap";
import {Parameters} from "./Parameters";
import DeleteActionButton from "./DeleteActionButton";
import CreateParameterButton from "./CreateParameterButton";

const Action = (props) => {
    const [actionType, setActionType] = useState(props.actionType);
    const [unsavedChanges, setUnsavedChanges] = useState(false);

    const onNameChange = (event) => {
        setActionType({
            ...actionType,
            name: event.target.value
        });
        setUnsavedChanges(true);
    };

    const onUriChange = (event) => {
        setActionType({
            ...actionType,
            uri: event.target.value
        });
        setUnsavedChanges(true);
    };

    const onDescriptionChange = (event) => {
        setActionType({
            ...actionType,
            description: event.target.value
        });
        setUnsavedChanges(true);
    };

    const onSaveButtonClick = () => {
        setUnsavedChanges(false);
    }

    return (
        <Accordion.Item eventKey={`action-type-event-key-${actionType.id}`}>
            <Accordion.Button variant="link" className="w-100 d-flex justify-content-between">
                    <span className="h6 mb-0 fw-bold">
                        {actionType.name}
                    </span>
            </Accordion.Button>
            <Accordion.Body>
                <Card.Body className="py-2 px-0">
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                value={actionType.name}
                                onChange={onNameChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>URI</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                value={actionType.uri}
                                onChange={onUriChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                value={actionType.description}
                                onChange={onDescriptionChange}
                            />
                        </Form.Group>
                        <DeleteActionButton actionType={actionType}/>
                        <Button
                            variant="tertiary"
                            disabled={!unsavedChanges}
                            className="float-end m-1 mb-3"
                            onClick={onSaveButtonClick}
                        >
                            Save changes
                        </Button>
                    </Form>
                    <Parameters parametersTypes={actionType.parametersTypes}/>
                    <div className="py-2 m-1">
                        <CreateParameterButton actionType={actionType}/>
                    </div>
                </Card.Body>
            </Accordion.Body>
        </Accordion.Item>
    )
}

export const Actions = ({actionTypes}) => {
    return (
        <Accordion className="py-2">
            {
                actionTypes.map((actionType) => (
                    <Action actionType={actionType} key={`action-type-${actionType.id}`}/>
                ))
            }
        </Accordion>
    )
}
