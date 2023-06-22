import React from 'react';
import { IoCaretDownOutline } from "react-icons/io5";
import CountInput from './utils/CountInput';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import useIsMobile from '../hooks/isMobile';

const OrderItem = () => {
  const isMobileXXL = useIsMobile('1399px');

  return (
    <div className='order-item'>
      <img src="imgs/img3.png" alt="Пепперони" />
      <div className='text'>
        <h6>Пепперони <span className="tag">Подарок</span></h6>
        <OverlayTrigger
          placement={'bottom'}
          overlay={
            <Tooltip>
              Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус
            </Tooltip>
          }
        >
          <p className='consist'>Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус</p>
        </OverlayTrigger>
        <p className='dark-gray mb-2'>36 см</p>
        <button type='button' className='d-flex align-items-center'>
          <span>Показать ещё</span>
          <IoCaretDownOutline className='fs-08 ms-2'/>
        </button>
      </div>
      <div className='count'>
        {
          (isMobileXXL)
          ? <div className="input w-50p py-1 px-2 rounded-4 text-center">x2</div>
          : <>
            <p className='text-center mb-2'>Количество</p>
            <CountInput dis={true}/>
          </>
        }
      </div>
      <div className='price'>640 ₽</div>
    </div>
  );
};

export default OrderItem;