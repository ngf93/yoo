import React from 'react';
import {Link} from 'react-router-dom';
import { HiOutlineChevronRight } from "react-icons/hi2";

const OrderCard = () => {
  return (
    <div className="order-card">
      <div className='order-card-num'>
        <span className='d-lg-none'>Заказ №</span>
        <span>3471</span>
      </div>
      <div className='order-card-time'>10:00 12 Авг 2023</div>
      <div className='order-card-status'>
        <div className='btn-5 rounded-3'>Готовится</div>
      </div>
      <div className='order-card-delivery'>Самовывоз <span className='dark-gray'>•</span></div>
      <address>Филиал — ул. Фучика 89, д 1</address>
      <div className='order-card-price'>1 500 ₽</div>
      <div className='order-card-btn'>
        <Link>
          <span>Инфо о заказе</span>
          <HiOutlineChevronRight/>
        </Link>
      </div>
    </div>
  );
};

export default OrderCard;