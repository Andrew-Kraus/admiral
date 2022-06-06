import React from 'react'

const header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <a href='#slider'>
          <div className='header__logo-container'>
            <img className='header__logo' src={process.env.PUBLIC_URL + '/logo-admiral.png'} alt=''></img>
            <div className='header__logo-text-container'>
              <h4 className='header__logo-text'>Admiral Fashion</h4>
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
      </div>
    </header>
  )
}

export default header