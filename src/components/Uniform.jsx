import React from 'react'
import { Carousel } from 'react-bootstrap'
import clothData from './clothData'
import ClothItem from './ClothItem'

const Uniform = () => {
  return (
    <section className='uniform' id='uniform'>
      <div className='uniform__container'>
        <h2 className='title'>Форма</h2>
        <div className='uniform__item'>
          <div className='container uniform__slider'>
            <Carousel className='uniform__carousel'>
              <Carousel.Item>
                <img
                  className="d-block w-100 uniform__image"
                  src={process.env.PUBLIC_URL + '/vmf.jpg'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 uniform__image"
                  src={process.env.PUBLIC_URL + '/suh.jpg'}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 uniform__image"
                  src={process.env.PUBLIC_URL + '/vks.png'}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 uniform__image"
                  src={process.env.PUBLIC_URL + '/mchs.jpg'}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 uniform__image"
                  src={process.env.PUBLIC_URL + '/kadeti.png'}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 uniform__image"
                  src={process.env.PUBLIC_URL + '/rosgv.png'}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 uniform__image"
                  src={process.env.PUBLIC_URL + '/fssp.png'}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 uniform__image"
                  src={process.env.PUBLIC_URL + '/fsin.png'}
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className='uniform__container-text'>
            <h3 className='uniform__title'>Пошив формы</h3>
            <p className='uniform__text'>Для пошива офисной формы с коротким и длинным рукавами, мы используем ткань: патруль (вискоза 35%,полиэстер 65%), рип-стоп (хлопок 35%,полиэстер 65%), габардин (100% полиэстер).</p>
            <p className='uniform__text'>Для пошива парадной и повседневной формы используется ткань: полушерстяная, камвольная (шерсть 75%,полиэстер 25%).</p>
          </div>
        </div>
        <div className='uniform__cloth'>

          {clothData.map((obj) => {
            return <ClothItem src={obj.src} title={obj.title} text={obj.text} key={obj.id} />
          })}

        </div>
      </div>
    </section>
  )
}

export default Uniform