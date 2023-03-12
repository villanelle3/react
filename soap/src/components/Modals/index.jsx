import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Modal1() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

        <Button variant="primary" className='containerinfo__btn' onClick={handleShow}>Find out Now</Button>

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
            <Modal.Title>Message Us</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput0">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="texte"
                    autoFocus
                    autoComplete='off'
                />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                />
                </Form.Group>
                
                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} autoComplete='off' />
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer id='modalfooter'>
                <Button id='closebutton' onClick={handleClose}>
                    Close
                </Button>
                <Button id='savebutton'onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default Modal1

