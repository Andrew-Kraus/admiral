import React from 'react'

const Delivery = () => {
    return (
        <section className='delivery'>
            <div className='delivery__container'>
                <h2 className='title'>Доставка</h2>
                <h3 className='delivery__subtitle'>Мы работаем  с большим количеством служб доставки, чтобы вы могли выбрать наиболее удобный для себя вариант.</h3>
                <div className='delivery__companies'>
                    <img className='delivery__image' src={process.env.PUBLIC_URL + '/dpd.png'} alt=''></img>
                    <img className='delivery__image' src={process.env.PUBLIC_URL + '/boxberry.png'} alt=''></img>
                    <img className='delivery__image' src={process.env.PUBLIC_URL + '/cdek.png'} alt=''></img>
                    <img className='delivery__image delivery__image-mobile' src={process.env.PUBLIC_URL + '/hermes.png'} alt=''></img>
                </div>
                <img className='delivery__image delivery__image-single' src={process.env.PUBLIC_URL + '/hermes.png'} alt=''></img>
            </div>
        </section>
    )
}

export default Delivery