import React, {useState} from "react";
import {Accordion, Button, Card, Form} from "@themesberg/react-bootstrap";

const Parameter = (props) => {
    const [parameterType, setParameterType] = useState(props.parameterType);
    const [unsavedChanges, setUnsavedChanges] = useState(false);

    const onNameChange = (event) => {
        setParameterType({
            ...parameterType,
            name: event.target.value
        });
        setUnsavedChanges(true);
    };

    const onUriChange = (event) => {
        setParameterType({
            ...parameterType,
            uri: event.target.value
        });
        setUnsavedChanges(true);
    };

    const onDescriptionChange = (event) => {
        setParameterType({
            ...parameterType,
            description: event.target.value
        });
        setUnsavedChanges(true);
    };

    const onMinValueChange = (event) => {
        setParameterType({
            ...parameterType,
            minValue: event.target.value
        });
        setUnsavedChanges(true);
    };

    const onMaxValueChange = (event) => {
        setParameterType({
            ...parameterType,
            maxValue: event.target.value
        });
        setUnsavedChanges(true);
    };

    const onDefaultValueChange = (event) => {
        setParameterType({
            ...parameterType,
            defaultValue: event.target.value
        });
        setUnsavedChanges(true);
    }

    const onSaveButtonClick = () => {
        setUnsavedChanges(false);
    }

    return (
        <Accordion.Item eventKey={`parameter-type-event-key-${parameterType.id}`}>
            <Accordion.Button variant="link" className="w-100 d-flex justify-content-between">
                    <span className="h6 mb-0 fw-bold">
                        {parameterType.name}
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
                                value={parameterType.name}
                                onChange={onNameChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>URI</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                value={parameterType.uri}
                                onChange={onUriChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                value={parameterType.description}
                                onChange={onDescriptionChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Minimum value</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                value={parameterType.minValue}
                                onChange={onMinValueChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Maximum value</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                value={parameterType.maxValue}
                                onChange={onMaxValueChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Default value</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                value={parameterType.defaultValue}
                                onChange={onDefaultValueChange}
                            />
                        </Form.Group>
                    </Form>
                    <Button
                        variant="danger"
                        className="mb-3"
                    >
                        Delete parameter
                    </Button>
                    <Button
                        variant="tertiary"
                        disabled={!unsavedChanges}
                        className="float-end m-1 mb-3"
                        onClick={onSaveButtonClick}
                    >
                        Save changes
                    </Button>
                </Card.Body>
            </Accordion.Body>
        </Accordion.Item>
    )
}

export const Parameters = ({parametersTypes}) => {
    if (parametersTypes.length === 0) {
        return null;
    }
    return (
        <>
            <h1 className="h5 py-2">Parameters</h1>
            <Accordion className="py-2">
                {
                    parametersTypes.map((parameter) => (
                        <Parameter parameterType={parameter} key={`parameter-type-${parameter.id}`}/>
                    ))
                }
            </Accordion>
        </>
    )
}