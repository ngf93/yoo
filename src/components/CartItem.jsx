import React from 'react';
import BtnFav from './utils/BtnFav';
import { IoCaretDownOutline } from "react-icons/io5";
import CountInput from './utils/CountInput';

const CartItem = () => {
  return (
    <div className='cart-item'>
      <div className="left">
        <input type="checkbox" className='me-1 me-sm-3'/>
        <img src="imgs/img3.png" alt="Пепперони" />
        <div className='text'>
          <h6>Пепперони <span className="tag">Подарок</span></h6>
          <p className='consist'>Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус</p>
          <p>36 см</p>
          <button type='button' className='d-flex align-items-center'>
            <span>Показать ещё</span>
            <IoCaretDownOutline className='fs-08 ms-2'/>
          </button>
        </div>
      </div>
      <div className="right">
        <div className='order-2 order-md-1'>
          <p className='d-none d-md-block text-center mb-2'>Количество</p>
          <CountInput dis={true}/>
        </div>

        <div className='order-1 order-md-2'>640 ₽</div>

        <BtnFav checked={false}/>
      </div>
    </div>
  );
};

export default CartItem;