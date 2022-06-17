import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { motion } from 'framer-motion';
import CatalogModal from './CatalogModal';
import militaryData from './militaryData';

const CatalogItem = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const [modalId, setModalId] = useState(0);
    function modalRender(id) {
        setModalId(id);
        setModalShow(true);
    }
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{
                default: { duration: 0.5 },
            }}
            className='catalog__item'
        >
            <div className='catalog__item-content' id={props.id}
                onClick={(e) => modalRender(e.target.id)}>
                <h3 className='catalog__item-title' id={props.id}>{props.title}</h3>
                <img className='catalog__item-img' src={props.img} alt='' id={props.id}></img>
                <Button className='catalog__item-price' variant="outline-primary" id={props.id}>{props.price}</Button>{' '}
            </div>
            <CatalogModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                title='Заказать'
                subtitle='Как сделать заказ?'
                src={militaryData[modalId].img}
                price={militaryData[modalId].price}
            />
        </motion.div>
    )
}

export default CatalogItem