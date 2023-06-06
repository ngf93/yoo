import React from 'react';
import Container from 'react-bootstrap/Container';
import useIsMobile from '../hooks/isMobile';
import LogoWhite from '../assets/imgs/logo-white.svg';
import LogoTextWhite from '../assets/imgs/logo-text-white.svg';
import AppStore from '../assets/imgs/appstore.svg';
import GooglePlay from '../assets/imgs/googleplay.svg';
import {Link, NavLink} from 'react-router-dom';
import HomeIcon from './svgs/HomeIcon';
import BellIcon from './svgs/BellIcon';
import FlameIcon from './svgs/FlameIcon';
import CartIcon from './svgs/CartIcon';
import UserIcon from './svgs/UserIcon';

const Footer = () => {
  const isMobileLG = useIsMobile('991px');

  return (
    <footer>
      <Container className='h-100'>
        {
          (isMobileLG)
          ? <nav className='h-100 mobile'>
            <ul className="h-100 list-unstyled d-flex justify-content-between align-items-center">
              <li>
                <NavLink to='/'>
                  <HomeIcon/>
                  <span>Главная</span>
                </NavLink>
              </li>
              <li>
                <NavLink to='/notifications'>
                  <BellIcon/>
                  <span>Уведомления</span>
                </NavLink>
              </li>
              <li>
                <NavLink to='/promo'>
                  <FlameIcon/>
                  <span>Акции</span>
                </NavLink>
              </li>
              <li>
                <NavLink to='/cart'>
                  <CartIcon/>
                  <span>Корзина</span>
                </NavLink>
              </li>
              <li>
                <NavLink to='/profile'>
                  <UserIcon/>
                  <span>Аккаунт</span>
                </NavLink>
              </li>
            </ul>
          </nav>
          : <div className='desktop'>
            <img src={LogoWhite} alt="yoo.app" className='logo'/>

            <nav>
              <ul className="list-unstyled d-flex">
                <li>
                  <Link to='/'>Меню</Link>
                </li>
                <li className='ms-4'>
                  <Link to='/'>Вакансии</Link>
                </li>
                <li className='ms-4'>
                  <Link to='/contacts'>Контакты</Link>
                </li>
              </ul>
              <Link to='/' className='d-block mt-4'>Политика конфиденциальности</Link>
            </nav>

            <div>
              <p>Заказывать через приложение ещё удобнее</p>
              <ul className="list-unstyled d-flex mt-2">
                <li>
                  <a href="/">
                    <img src={AppStore} alt="App Store" />
                  </a>
                </li>
                <li className='ms-3'>
                  <a href="/">
                    <img src={GooglePlay} alt="Google Play" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div>Разработано на платформе</div>
              <img src={LogoTextWhite} alt="yoo.app" className='d-block mt-2'/>
            </div>
          </div>
        }
      </Container>
      
    </footer>
  );
};

export default Footer;