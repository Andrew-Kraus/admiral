import React from 'react'
import Popovers from './Popovers'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer__item'>
                    <h3 className='footer__title'>Реквизиты</h3>
                    <p className='footer__text'>ООО "Адмиралъ"</p>
                    <p className='footer__text'>ИНН 7810759039</p>
                    <p className='footer__text'>КПП 781001001</p>
                    <p className='footer__text'>ОГРН 1197847123341</p>
                </div>

                <div className='footer__item'>
                    <h3 className='footer__title'>Часы работы</h3>
                    <p className='footer__text'>Пн-пт: 10-18 ч</p>
                    <p className='footer__text'>Сб-вс: выходной</p>
                </div>

                <div className='footer__item'>
                    <h3 className='footer__title'>Контакты</h3>
                    <p className='footer__text'>Адрес: г.Санкт-Петербург, ул. Кузнецовская, д.13</p>
                    <p className='footer__text'>Телефон: +7(963)319-90-00</p>
                    <p className='footer__text'>E-mail: poshivformi@mail.ru</p>
                    <div className='footer__icons'>
                        <a href='https://vk.com/poshivformiru'>
                            <img src={process.env.PUBLIC_URL + '/vk.png'} className='footer__icon' alt=''></img>
                        </a>
                        <Popovers info='ID телеграмм' src={process.env.PUBLIC_URL + '/telegram.png'} />
                        <Popovers info='Номер телефона' src={process.env.PUBLIC_URL + '/whatsapp.png'} />
                    </div>
                </div>
            </div>
            <div className='footer__bottom'>
                <p className='footer__bottom-text'>Copyright 2022 ADMIRAL-SPB.RU ВСЕ ПРАВА ЗАЩИЩЕНЫ.ПРИ КОПИРОВАНИИ ИНФОРМАЦИИ ССЫЛКА НА НАШ САЙТ ОБЯЗАТЕЛЬНА ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ.</p>
            </div>
        </footer>
    )
}

export default Footer