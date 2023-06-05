import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import useIsMobile from '../hooks/isMobile';
import SelectImitation from './utils/SelectImitation';
import { HiOutlineDevicePhoneMobile, HiOutlineUserCircle, HiOutlineShoppingBag, HiOutlineHeart, HiOutlineArrowLeftCircle } from "react-icons/hi2";
import Logo from '../assets/imgs/logo.svg';
import delivery from '../assets/imgs/delivery_icon.svg';
import ruFlag from '../assets/imgs/flags/rus.jpg';
import engFlag from '../assets/imgs/flags/eng.jpg';
import MenuIcon from './svgs/MenuIcon';
import MenuPhone from './svgs/MenuPhone';
import MenuDelivery from './svgs/MenuDelivery';
import MenuVacancies from './svgs/MenuVacancies';
import MenuDocs from './svgs/MenuDocs';
import { IoCloseOutline } from "react-icons/io5";
import YooApp from './svgs/YooApp';

const Header = () => {
  const isMobileLG = useIsMobile('991px');
  const [showMenu, setShowMenu] = useState(false);
  const handleCloseMenu = () => setShowMenu(false);
  const handleShowMenu = () => setShowMenu(true);

  const [isContacts, setIsContacts] = useState(false);

  return (
    <>
      <header>
        <Container className='h-100'>
          <nav className='h-100'>
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
                  <button type='button' onClick={(showMenu) ? handleCloseMenu : handleShowMenu} className='btn-menu'>
                    {
                      (showMenu)
                      ? <IoCloseOutline/>
                      : <MenuIcon/>
                    }
                  </button>
                </li>
              }
            </ul>
          </nav>
        </Container>
      </header>

      <Offcanvas className="offcanvas-menu" show={showMenu} onHide={handleCloseMenu} placement={'end'}>
        <Offcanvas.Body>
          <Container>
            {
              (isContacts)
              ? <>
                <div className="d-flex mb-4">
                  <button type='button' onClick={()=>setIsContacts(false)} className='main-color-60 fs-12 d-flex align-items-center'>
                    <HiOutlineArrowLeftCircle className='fs-14'/>
                    <span className='ms-1'>Назад</span>
                  </button>
                  <h5 className='flex-1 text-center fs-12 fw-6 mb-0'>Контакты</h5>
                </div>
                <h5 className='text-center fs-12 fw-6'>ООО “Вкусные решения”, г. Казань</h5>
              
              </>
              : <>
              <img src="imgs/slider-main/slide-1.jpg" alt="Большие пиццы" className='menu-offer'/>
              <nav>
                <ul>
                  <li>
                    <button type='button' onClick={()=>setIsContacts(true)}>
                      <MenuPhone/>
                      <span>Контакты</span>
                    </button>
                  </li>
                  <li>
                    <Link to='/'>
                      <MenuDelivery/>
                      <span>Оплата и доставка</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <MenuVacancies/>
                      <span>Вакансии</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <MenuDocs/>
                      <span>Политика конфиденциальности</span>
                    </Link>
                  </li>
                </ul>
              </nav>

              <p className="gray text-center mt-4 mt-md-5">Разработано на платформе</p>
              <p className='text-center mt-2'><a href><YooApp/></a></p>
              </>
            }
              
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;