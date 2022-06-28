import React from 'react'
import { Dropdown } from 'react-bootstrap'

const header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <a href='#slider'>
          <div className='header__logo-container'>
            <img className='header__logo' src={process.env.PUBLIC_URL + '/old-logo.png'} alt=''></img>
            <div className='header__logo-text-container'>
              <h4 className='header__logo-text'>АдмиралЪ</h4>
            </div>
          </div>
        </a>
        <ul className='header__nav'>
          <li className='header__nav-text'><a href='#slider'>Главная</a></li>
          <li className='header__nav-text'><a href='#services'>Услуги</a></li>
          <li className='header__nav-text'><a href='#catalog'>Каталог</a></li>
          <li className='header__nav-text'><a href='#portfolio'>Наши работы</a></li>
          <li className='header__nav-text'><a href='#contacts'>Контакты</a></li>
        </ul>
        <Dropdown className="header__dropdown-container">
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="header__dropdown">
            <img className='header__menu-mobile' src={process.env.PUBLIC_URL + '/menu.png'} alt=''></img>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#slider">Главная</Dropdown.Item>
            <Dropdown.Item href="#services">Услуги</Dropdown.Item>
            <Dropdown.Item href="#catalog">Каталог</Dropdown.Item>
            <Dropdown.Item href="#portfolio">Наши работы</Dropdown.Item>
            <Dropdown.Item href="#contacts">Контакты</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header>
  )
}

export default header