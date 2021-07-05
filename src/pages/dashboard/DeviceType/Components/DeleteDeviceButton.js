import React, {useState} from "react";
import {API} from "../../../../api/API";
import {Button, Form, Modal} from "@themesberg/react-bootstrap";
import {Routes} from "../../../../routes";
import {useDispatch} from "react-redux";
import {deleteDeviceTypeAction} from "../../../../store/actions/devicesTypesActions";
import {useHistory} from "react-router-dom";

export default ({deviceTypeId, deviceTypeName, onDeviceTypeDeleted}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);

    const [deviceName, setDeviceName] = useState('');

    const onDeviceNameChange = (event) => {
        setDeviceName(event.target.value);
    };

    const deleteDeviceTypeCallback = (response) => {
        console.log(response);
        if (response.status === 200) {
            dispatch(deleteDeviceTypeAction(deviceTypeId));
            history.replace(Routes.Dashboard.path);
        }
    };

    const deleteDeviceType = () => {
        API.deleteDeviceType({
            id: deviceTypeId,
        }).then(
            deleteDeviceTypeCallback
        ).catch(
            (error) => {
                console.log(error);
            }
        );
    };

    const openModal = () => {
        setShowModal(true);
        setDeviceName('');
    }

    const nameMatch = deviceName === deviceTypeName;

    return (
        <>
            <Button variant="danger" className="my-3 m-1" onClick={openModal}>
                Delete device type
            </Button>

            <Modal as={Modal.Dialog} centered show={showModal} onHide={closeModal}>
                <Modal.Header>
                    <Modal.Title className="h6">
                        Are you sure that you want to delete this device?
                    </Modal.Title>
                    <Button variant="close" aria-label="Close" onClick={closeModal}/>
                </Modal.Header>
                <Modal.Body>
                    <Form className="py-2">
                        <Form.Group className="mb-3">
                            <Form.Label>Type device name to confirm delete</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                value={deviceName}
                                isValid={nameMatch}
                                isInvalid={!nameMatch}
                                onChange={onDeviceNameChange}
                            />
                            <Form.Control.Feedback
                                type={nameMatch ? "valid" : "invalid"}
                            >
                                {nameMatch ? "Look's good." : "Name not matching"}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={closeModal}>
                        Cancel
                    </Button>
                    <Button
                        variant="danger"
                        className="ms-auto"
                        disabled={!nameMatch}
                        onClick={deleteDeviceType}
                    >
                        Confirm delete
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
};