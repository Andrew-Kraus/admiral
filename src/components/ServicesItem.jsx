import { Button } from 'react-bootstrap';
import React, { useState } from 'react'
import ModalInfo from './ModalInfo';

const ServicesItem = (props) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className='services__item'>
            <img className='services__image' src={props.img} alt=''></img>
            <div className='services__item-container'>
                <h3 className='services__item-title'>{props.title}</h3>
                <p className='services__text'>{props.text}</p>
                <Button onClick={() => setModalShow(true)} className='services__button' variant="primary" size="lg">Заказать</Button>{' '}
            </div>
            <ModalInfo
                show={modalShow}
                onHide={() => setModalShow(false)}
                title='Заказать'
                subtitle='Как сделать заказ?'
            />
        </div>
    )
}

export default ServicesItem