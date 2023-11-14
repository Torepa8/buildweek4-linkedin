import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalEx() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="role"
                autoFocus
              />
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="company"
                autoFocus
              />
            <Form.Label>Start date</Form.Label>
              <Form.Control
                type="date"
                placeholder="role"
                autoFocus
              />
              <Form.Label>End date</Form.Label>
              <Form.Control
                type="date"
                placeholder="company"
                autoFocus
              />
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="company"
                autoFocus
              />
              <Form.Label>Area</Form.Label>
              <Form.Control
                type="text"
                placeholder="company"
                autoFocus
              />
            </Form.Group>             
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEx;