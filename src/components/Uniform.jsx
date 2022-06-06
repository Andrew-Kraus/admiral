import React from 'react'
import uniformData from './uniformData'
import UniformItem from './UniformItem'

const Uniform = () => {
  return (
    <section className='uniform' id='uniform'>
      <div className='uniform__container'>
        <h2 className='title'>Форма</h2>
        {uniformData.map((obj, index) => {
          return <UniformItem reverse={obj.reverse} img={obj.src} title={obj.title} text={obj.text} key={index} id={index.toString()}/>
        })}
      </div>
    </section>
  )
}

export default Uniform