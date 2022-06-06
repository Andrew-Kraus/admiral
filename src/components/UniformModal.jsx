import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const UniformModal = (props) => {
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
                <div className='uniform-modal__container'>
                    <img className='uniform-modal__image' src={props.src} alt='' />
                    <p>
                        Ткани, используемые нами для пошива спецодежды
                        Полиэстер (ПЭ) – плотный синтетический материал, очень прочный и износостойкий, одно из основных преимуществ – лёгкая очистка от промышленных загрязнений;
                        Таслан – очень лёгкая ткань с повышенной прочностью и особой структурой, защищённая с наружной стороны водогрязеотталкивающей пропиткой.
                        Смесовая –  изготовлена из смеси хлопчатобумажных и синтетических волокон. Обладает гипоаллергенными свойствами, высокой стойкостью к износу, обеспечивает лёгкую очистку от грязи.
                        Оксфортд — синтетический материал из нейлона и полиэстра, по виду напоминающий рогожку, непромокаемый, непродувающийся, легко отчищающийся от загрязнений любой сложности;
                        Рип-стоп — высокопрочная ткань из армированной пряжи, обладающая превосходными водоотталкивающими свойствами и высокой морозостойкостью.
                    </p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default UniformModal