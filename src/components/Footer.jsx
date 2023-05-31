import React from 'react';
import Container from 'react-bootstrap/Container';
import useIsMobile from '../hooks/isMobile';
import LogoWhite from '../assets/imgs/logo-white.svg';
import LogoTextWhite from '../assets/imgs/logo-text-white.svg';
import AppStore from '../assets/imgs/appstore.svg';
import GooglePlay from '../assets/imgs/googleplay.svg';
import {Link} from 'react-router-dom';
import { HiHashtag } from "react-icons/hi2";

const Footer = () => {
  const isMobileLG = useIsMobile('991px');

  return (
    <footer>
      <Container className='h-100'>
        {
          (isMobileLG)
          ? <nav className='h-100'>
            <ul className="h-100 list-unstyled d-flex justify-content-between align-items-center">
              <li>
                <HiHashtag/>
              </li>
              <li>
                <HiHashtag/>
              </li>
              <li>
                <HiHashtag/>
              </li>
              <li>
                <HiHashtag/>
              </li>
              <li>
                <HiHashtag/>
              </li>
            </ul>
          </nav>
          : <div className='desktop'>
            <img src={LogoWhite} alt="yoo.app" />

            <nav>
              <ul className="list-unstyled d-flex">
                <li>
                  <Link to='/'>Меню</Link>
                </li>
                <li className='ms-4'>
                  <Link to='/'>Вакансии</Link>
                </li>
                <li className='ms-4'>
                  <Link to='/'>Контакты</Link>
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