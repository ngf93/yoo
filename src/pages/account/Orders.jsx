import React from 'react';
import OrderCard from '../../components/OrderCard';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import SelectImitation from '../../components/utils/SelectImitation';

const Orders = () => {
  return (
    <section className='sec-orders'>
      <div className="order-card top">
        <div className='order-card-num'>№</div>
        <div className='order-card-time'>Время заказа</div>
        <div className='order-card-status'>Статус</div>
        <div className='order-card-delivery'>Способ доставки</div>
        <div className='order-card-price'>Стоимость</div>
        <div className='order-card-btn'></div>
      </div>
      <ul>
        <li>
          <OrderCard/>
        </li>
        <li><OrderCard/></li>
        <li><OrderCard/></li>
        <li><OrderCard/></li>
      </ul>
      <div className='d-flex align-items-center justify-content-end p-3'>
        <span className='me-3'>Страницы:</span>
        <SelectImitation 
          btnClass={'borderless'}
          optionsArr={[
            {
              value: 1,
              label: '1',
              defaultChecked: true,
            },
            {
              value: 2,
              label: '2',
              defaultChecked: false,
            },
            {
              value: 3,
              label: '3',
              defaultChecked: false,
            },
            {
              value: 4,
              label: '4',
              defaultChecked: false,
            },
            {
              value: 5,
              label: '5',
              defaultChecked: false,
            },
            {
              value: 6,
              label: '6',
              defaultChecked: false,
            }
          ]}
        />
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
            <option value="15"><HiOutlineChevronLeft/></option>
          </select>
        <span className='mx-4'>6–10 из 11</span>
        <button type='button'>
          <HiOutlineChevronLeft/>
        </button>
        <button type='button'>
          <HiOutlineChevronRight/>
        </button>
      </div>
    </section>
  );
};

export default Orders;