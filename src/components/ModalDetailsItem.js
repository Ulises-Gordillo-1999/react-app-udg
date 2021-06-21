import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

function ModalDetailsItem(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <Image src={props.viajes.img} fluid />
          <hr></hr>
          {props.viajes.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>${props.viajes.precio}</h4>
        <p>
          {props.viajes.description}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDetailsItem;
