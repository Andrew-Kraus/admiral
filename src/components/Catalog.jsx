import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import CatalogItem from './CatalogItem';
import { motion } from 'framer-motion';
import civilianData from './civilianData';
import militaryData from './militaryData';

const Catalog = () => {
    const [isActive, setActive] = useState(true);
    const [size, setSize] = useState(8)
    function changeActive(number) {
        if (number === 1) {
            setSize(8);
            setActive(true);
        } else {
            setSize(8);
            setActive(false);
        }
    }
    function changeSize() {
        setSize(size + 4)
    }
    return (
        <section className='catalog' id='catalog'>
            <div className='catalog__container'>
                <div className='catalog__header'>
                    <h2 className='title title-mob'>Каталог товаров</h2>
                    <Button onClick={() => changeActive(1)} className='catalog__button' variant={`${isActive ? "outline-primary" : "outline-secondary"}`}>Военная одежда</Button>{' '}
                    <Button onClick={() => changeActive(2)} className='catalog__button' variant={`${!isActive ? "outline-primary" : "outline-secondary"}`}>Гражданская одежда</Button>{' '}
                </div>
                {isActive && <motion.div
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        default: { duration: 0.5 },
                    }}
                    className='catalog__grid'
                >
                    {militaryData.slice(0, size).map((obj, index) => {
                        return <CatalogItem title={obj.title} img={obj.img} price={obj.price} key={obj.id} id={index.toString()}/>
                    })}
                </motion.div>}
                {!isActive && <motion.div
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        default: { duration: 0.5 },
                    }}
                    className='catalog__not-found'>
                        <img className='catalog__not-found-image' src={process.env.PUBLIC_URL + '/not-found.png'} alt=''></img>
                        <p className='catalog__not-found-text'>Пока что мы не занимаемся гражданской одеждой.</p>
                </motion.div>}
                <Button onClick={() => changeSize()} className='more-button' variant="outline-primary">Показать еще</Button>{' '}
            </div>
        </section>
    )
}

export default Catalog