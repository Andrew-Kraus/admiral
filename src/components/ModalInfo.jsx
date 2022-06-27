import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const ModalInfo = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.subtitle}</h4>
        <p className='modal-text'>
        1. Позвонить по номеру <span className='modal-phone'>8 (963) 319-90-00</span>.
        </p>
        <p className='modal-text'>
        2. Выявление потребности, уточнить все параметры товара.
        </p>
        <p className='modal-text'>
        3. Выявление дополнительных подробностей.
        </p>
        <p className='modal-text'>
        4. Обсуждение условий и оформление заказа.
        </p>
        <p className='modal-text'>
        5. Самовывоз/доставка товара.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalInfo