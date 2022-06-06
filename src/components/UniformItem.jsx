import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import uniformData from './uniformData';
import UniformModal from './UniformModal'

const UniformItem = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const [modalId, setModalId] = useState(0);
    function modalRender(id) {
        setModalId(id);
        setModalShow(true);
    }
    return (
        <div className={'uniform__item-' + props.reverse}>
            <img className='uniform__image' src={props.img} alt=''></img>
            <div className='uniform__container-text'>
                <h3 className='uniform__title'>{props.title}</h3>
                <p className='uniform__text'>{props.text}</p>
                <Button onClick={(e) => modalRender(e.target.id)} className='uniform__button' variant="primary" size="lg" id={props.id}>Подробнее</Button>{' '}
            </div>
            <UniformModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                title={uniformData[modalId].title}
                src={uniformData[modalId].src}
                subtitle='Как сделать заказ?'
            />
        </div>
    )
}

export default UniformItem