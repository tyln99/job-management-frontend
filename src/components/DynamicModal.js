import { Button, Modal } from 'react-bootstrap';

function DynamicModal({ show, handleClose, isSuccess, message }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{isSuccess ? 'Success' : 'Error'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DynamicModal;
