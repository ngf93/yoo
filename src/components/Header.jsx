import React from 'react';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import SelectImitation from './utils/SelectImitation';
import { HiOutlineDevicePhoneMobile, HiOutlineUserCircle, HiOutlineShoppingBag, HiOutlineHeart } from "react-icons/hi2";
import Logo from '../assets/imgs/logo.svg';
import delivery from '../assets/imgs/delivery_icon.svg';
import ruFlag from '../assets/imgs/flags/rus.jpg';
import engFlag from '../assets/imgs/flags/eng.jpg';

const Header = () => {
  return (
    <header>
      <Container>
        <nav>
          <Link to='/'><img src={Logo} alt="yoo.app" className='logo'/></Link>

          <ul>
            <li>
              <SelectImitation 
                optionsArr={[
                  {
                    value: 1,
                    label: 'Доставка',
                    icon: delivery,
                    defaultChecked: true,
                  },
                  {
                    value: 2,
                    label: 'Самовывоз',
                    icon: delivery,
                    defaultChecked: false,
                  }
                ]}
              />
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
            <span className='d-none d-xxl-inline fs-11 ms-2'>+7 987 987-78-78</span>
          </a>

          <SelectImitation 
            btnClass={'borderless'}
            imgClass={'round'}
            optionsArr={[
              {
                value: 1,
                label: 'русский',
                icon: ruFlag,
                defaultChecked: true,
              },
              {
                value: 2,
                label: 'english',
                icon: engFlag,
                defaultChecked: false,
              }
            ]}
          />

          <ul className='icons-menu'>
            <li>
              <Link to="/">
                <HiOutlineUserCircle/>
              </Link>
            </li>
            <li>
              <Link to="/" className='position-relative'>
                <HiOutlineShoppingBag/>
                <span class="position-absolute top-100 start-100 translate-middle badge rounded-pill">2</span>
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