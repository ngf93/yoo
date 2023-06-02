import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import useIsMobile from '../hooks/isMobile';
import SelectImitation from './utils/SelectImitation';
import { HiOutlineDevicePhoneMobile, HiOutlineUserCircle, HiOutlineShoppingBag, HiOutlineHeart } from "react-icons/hi2";
import Logo from '../assets/imgs/logo.svg';
import delivery from '../assets/imgs/delivery_icon.svg';
import ruFlag from '../assets/imgs/flags/rus.jpg';
import engFlag from '../assets/imgs/flags/eng.jpg';
import MenuIcon from './svgs/MenuIcon';

const Header = () => {
  const isMobileLG = useIsMobile('991px');
  const [showMenu, setShowMenu] = useState(false);
  const handleCloseMenu = () => setShowMenu(false);
  const handleShowMenu = () => setShowMenu(true);

  return (
    <>
      <header>
        <Container>
          <nav>
            <Link to='/'><img src={Logo} alt="yoo.app" className='logo'/></Link>
            {
              (!isMobileLG) && 
              <>
                <ul className='btns-menu'>
                  <li className='d-none d-xxl-block'>
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
                <a href="tel:+7987987-78-78" className='phone'>
                  <HiOutlineDevicePhoneMobile className='fs-15'/>
                  <span className='fs-11 ms-2'>+7 987 987-78-78</span>
                </a>
              </>
            }

            <ul className='icons-menu'>
              <li>
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
              </li>
              {
                (!isMobileLG)
                ? <>
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
                </>
                : <li>
                  <button type='button' className='btn-menu'>
                    <MenuIcon/>
                  </button>
                </li>
              }
            </ul>
          </nav>
        </Container>
      </header>
      <Offcanvas show={showMenu} onHide={handleCloseMenu} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;