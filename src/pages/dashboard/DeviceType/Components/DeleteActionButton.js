import {Button, Modal} from "@themesberg/react-bootstrap";
import React, {useState} from "react";
import {API} from "../../../../api/API";


export default ({actionType}) => {
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);
    const openModal = () => setShowModal(true);

    const deleteActionTypeCallback = (response) => {
        console.log(response);
        if (response.status === 200) {
            closeModal();
        }
    }

    const deleteActionType = () => {
        API.deleteActionType({
            id: actionType.id
        }).then(
            deleteActionTypeCallback
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    };

    return (
        <>
            <Button
                variant="danger"
                className="m-1 mb-3"
                onClick={openModal}
            >
                Delete action
            </Button>

            <Modal as={Modal.Dialog} centered show={showModal} onHide={closeModal}>
                <Modal.Header>
                    <Modal.Title className="h6">
                        Are you sure that you want to delete this action?
                    </Modal.Title>
                    <Button variant="close" aria-label="Close" onClick={closeModal}/>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="primary" onClick={closeModal}>
                        Cancel
                    </Button>
                    <Button
                        variant="danger"
                        className="ms-auto"
                        onClick={deleteActionType}
                    >
                        Confirm delete
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}