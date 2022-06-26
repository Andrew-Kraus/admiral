import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import portfolioData from './portfolioData'
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [size, setSize] = useState(8);
  const [isActive, setActive] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  function changeCurrentImage(id) {
    const imgIndex = portfolioData.find(x => x.id === id).src;
    setCurrentImage(imgIndex);
    setActive(true);
  }
  return (
    <section className='portfolio' id='portfolio'>
      <div className='portfolio-container'>
        <h2 className='title'>Наши работы</h2>
        <div className='portfolio__grid'>
          {portfolioData.slice(0, size).map((obj, index) => {
            return <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                default: { duration: 0.5 },
              }}
              key={obj.id}
              >
              <img onClick={() => changeCurrentImage(obj.id)} className='portfolio__image' src={obj.src} alt=''></img>
            </motion.div>
          })}
        </div>
        {size < portfolioData.length && <Button onClick={() => setSize(size + 4)} className='more-button' variant="outline-primary">Показать еще</Button>}
      </div>
      <div onClick={() => setActive(false)} className={isActive ? 'portfolio__modal active' : 'portfolio__modal'}>
        <img onClick={e => e.stopPropagation()} className={isActive ? 'portfolio__modal-content active' : 'portfolio__modal-content'} src={currentImage} alt=''></img>
      </div>
    </section>
  )
}

export default Portfolio