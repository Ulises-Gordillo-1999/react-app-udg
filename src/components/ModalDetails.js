import React from 'react'

//Bootstrap
import Button from 'react-bootstrap/Button';
import ModalDetailsItem from './ModalDetailsItem'

const ModalDetails = ({viajes}) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Button variant="outline-secondary" onClick={() => setModalShow(true)}>
        See product detail
      </Button>
      <ModalDetailsItem
        viajes={viajes}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default ModalDetails
