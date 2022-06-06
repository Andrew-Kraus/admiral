import React from 'react'
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


const Slider = () => {
  return (
    <section className='slider' id='slider'>
      <div className='container'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + '/moryaki.png'}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className='slider__title'>ПОШИВ ВОЕННОЙ И ГРАЖДАНСКОЙ ОДЕЖДЫ</h3>
              <p className='slider__subtitle'>Ведомственные ткани, качественный пошив военной формы и гражданской одежды.</p>
              <a href='#uniform'>
                <Button className='slider__button' variant="primary" size="lg">Подробнее</Button>{' '}
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + '/moryaki.png'}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 className='slider__title'>ПОШИВ ВОЕННОЙ И ГРАЖДАНСКОЙ ОДЕЖДЫ</h3>
              <p className='slider__subtitle'>Ведомственные ткани, качественный пошив военной формы и гражданской одежды.</p>
              <a href='#uniform'>
                <Button className='slider__button' variant="primary" size="lg">Подробнее</Button>{' '}
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + '/moryaki.png'}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className='slider__title'>ПОШИВ ВОЕННОЙ И ГРАЖДАНСКОЙ ОДЕЖДЫ</h3>
              <p className='slider__subtitle'>Ведомственные ткани, качественный пошив военной формы и гражданской одежды.</p>
              <a href='#uniform'>
                <Button className='slider__button' variant="primary" size="lg">Подробнее</Button>{' '}
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + '/moryaki.png'}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className='slider__title'>ПОШИВ ВОЕННОЙ И ГРАЖДАНСКОЙ ОДЕЖДЫ</h3>
              <p className='slider__subtitle'>Ведомственные ткани, качественный пошив военной формы и гражданской одежды.</p>
              <a href='#uniform'>
                <Button className='slider__button' variant="primary" size="lg">Подробнее</Button>{' '}
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}

export default Slider