import React from 'react'

const Contacts = () => {
  return (
    <section className='contacts' id='contacts'>
        <div className='contacts__container'>
            <h2 className='title'>Контакты</h2>
            <h3 className='contacts__subtitle contacts__subtitle-adress'>НАШ АДРЕС: Г.САНКТ-ПЕТЕРБУРГ, УЛ. КУЗНЕЦОВСКАЯ, Д.13. ВХОД СО ДВОРА</h3>
            <h3 className='contacts__subtitle contacts__subtitle-phone'>Телефон: +7 (963) 319-90-00</h3>
            <iframe title='yandex-map' src="https://yandex.ru/map-widget/v1/?um=constructor%3Aee080b87a52f091ec9f4bd5778b15d1378dc53fba4a5662b86bc373691435fbf&amp;source=constructor" width="100%" height="514" frameBorder="0"></iframe>
        </div>
    </section>
  )
}

export default Contacts