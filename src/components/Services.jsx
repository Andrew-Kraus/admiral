import React from 'react'
import servicesData from './servicesData'
import ServicesItem from './ServicesItem'

const Services = () => {
  return (
    <section className='services' id='services'>
        <h2 className='title'>Наши услуги</h2>
        <div className='services__container'>
          {servicesData.map((obj, index) => {
            return <ServicesItem img={obj.src} title={obj.title} text={obj.text} key={obj.id}/>
          })}
        </div>
    </section>
  )
}

export default Services