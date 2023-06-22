import React from 'react';
import OrderCard from '../../components/OrderCard';
import { HiOutlineArrowLeftCircle } from "react-icons/hi2";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {Link} from 'react-router-dom';
import useIsMobile from '../../hooks/isMobile';

const Orders = () => {
  const isMobileLG = useIsMobile('991px');

  return (
    <section className='sec-orders'>
      {
        (isMobileLG)
        ? <div className="d-flex align-items-center mb-4">
          <Link to="/account" className='link-return'>
            <HiOutlineArrowLeftCircle/>
            <span>Назад</span>
          </Link>
          <h6 className='fs-12 mb-0'>Заказы</h6>
        </div>
        : <div className="order-card top">
          <div className='order-card-num'>№</div>
          <div className='order-card-time'>Время заказа</div>
          <div className='order-card-status'>Статус</div>
          <div className='order-card-delivery'>Способ доставки</div>
          <div className='order-card-price'>Стоимость</div>
          <div className='order-card-btn'></div>
        </div>
      }
      
      <ul className='row row-cols-1 row-cols-sm-2 row-cols-lg-1 gy-3 gx-2 g-md-4 g-lg-0'>
        <li><OrderCard/></li>
        <li><OrderCard/></li>
        <li><OrderCard/></li>
        <li><OrderCard/></li>
      </ul>
      <div className='fs-09 d-flex align-items-center justify-content-between justify-content-lg-end p-3'>
        <div className="d-flex align-items-center">
          <span className='d-none d-sm-inline me-3'>Страницы:</span>
          <select name="" id="" defaultValue={'1'}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="1">8</option>
            <option value="1">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
          </select>
        </div>
        
        <span className='mx-4'>6–10 из 11</span>
        
        <div className="d-flex align-items-center">
          <button type='button' disabled className='fs-14 p-2 d-flex'>
            <FiChevronLeft/>
          </button>
          <button type='button' className='fs-14 p-2 d-flex'>
            <FiChevronRight/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Orders;