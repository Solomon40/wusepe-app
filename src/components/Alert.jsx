import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const AlertComponent = ({ show, handleClose }) => {

    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='alert-success'>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Added Successfully!</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
}

export default AlertComponent;