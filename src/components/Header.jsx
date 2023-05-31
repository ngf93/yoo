import React from 'react';
import Container from 'react-bootstrap/Container';
import Logo from '../assets/imgs/logo.svg';
import {Link} from 'react-router-dom';
import { HiOutlineDevicePhoneMobile, HiOutlineUserCircle, HiOutlineShoppingBag, HiOutlineHeart } from "react-icons/hi2";

const Header = () => {
  return (
    <header>
      <Container>
        <nav>
          <Link to='/'><img src={Logo} alt="yoo.app" /></Link>

          <ul>
            <li>
              <button type='button' className='btn-1 py-2'>Меню</button>
            </li>
            <li className='ms-3'>
              <button type='button' className='btn-1 py-2'>Меню</button>
            </li>
          </ul>

          <ul className='text-menu'>
            <li>
              <Link to='/'>Доставка и оплата</Link>
            </li>
            <li>
              <Link to='/'>О нас</Link>
            </li>
          </ul>

          <a href="tel:+7987987-78-78" className='d-flex align-items-center'>
            <HiOutlineDevicePhoneMobile className='fs-15'/>
            <span className='fs-11 ms-2'>+7 987 987-78-78</span>
          </a>

          <ul className='icons-menu'>
            <li>
              <Link to="/">
                <HiOutlineUserCircle/>
              </Link>
            </li>
            <li>
              <Link to="/">
                <HiOutlineShoppingBag/>
              </Link>
            </li>
            <li>
              <Link to="/">
                <HiOutlineHeart/>
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;