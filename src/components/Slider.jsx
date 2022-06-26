import React from 'react'
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


const Slider = () => {
  return (
    <section className='slider' id='slider'>
      <div className='container'>
        <Carousel className='slider__carousel'>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + '/vmf-slider.png'}
              alt="First slide"
            />
            <Carousel.Caption>
              <h2 className='slider__title'>АдмиралЪ</h2>
              <h3 className='slider__subtitle'>Производство военной и гражданской одежды.</h3>
              <a href='#uniform'>
                <Button className='slider__button' variant="primary" size="lg">Подробнее</Button>{' '}
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + '/suh-slider.png'}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h2 className='slider__title'>АдмиралЪ</h2>
              <h3 className='slider__subtitle'>Производство военной и гражданской одежды.</h3>
              <a href='#uniform'>
                <Button className='slider__button' variant="primary" size="lg">Подробнее</Button>{' '}
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + '/vks-slider.png'}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h2 className='slider__title'>АдмиралЪ</h2>
              <h3 className='slider__subtitle'>Производство военной и гражданской одежды.</h3>
              <a href='#uniform'>
                <Button className='slider__button' variant="primary" size="lg">Подробнее</Button>{' '}
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + '/mchs-slider.png'}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h2 className='slider__title'>АдмиралЪ</h2>
              <h3 className='slider__subtitle'>Производство военной и гражданской одежды.</h3>
              <a href='#uniform'>
                <Button className='slider__button' variant="primary" size="lg">Подробнее</Button>{' '}
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + '/kadeti-slider.png'}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h2 className='slider__title'>АдмиралЪ</h2>
              <h3 className='slider__subtitle'>Производство военной и гражданской одежды.</h3>
              <a href='#uniform'>
                <Button className='slider__button' variant="primary" size="lg">Подробнее</Button>{' '}
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + '/rosgv-slider.png'}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h2 className='slider__title'>АдмиралЪ</h2>
              <h3 className='slider__subtitle'>Производство военной и гражданской одежды.</h3>
              <a href='#uniform'>
                <Button className='slider__button' variant="primary" size="lg">Подробнее</Button>{' '}
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + '/fssp-slider.png'}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h2 className='slider__title'>АдмиралЪ</h2>
              <h3 className='slider__subtitle'>Производство военной и гражданской одежды.</h3>
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