import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavTop from '../components/utils/NavTop';
import Gifts from '../components/utils/Gifts';
import { HiOutlineTrash } from "react-icons/hi2";
import { IoCaretDownOutline } from "react-icons/io5";

const Cart = () => {
  return (
    <main>
      <Container>
        <NavTop toBack={true} breadcrumbs={false}/>
        <form className='cart'>
          <Row className='gx-5'>
            <Col md={8}>
              <h1>Вы добавили 3 товара</h1>
              <div className="cart-filter">
                <label>
                  <input type="checkbox"/>
                  <span className='fs-11 ms-2'>Все товары</span>
                </label>
                <button type='button' className='d-flex align-items-center gray ms-auto'>
                  <HiOutlineTrash className='fs-15'/>
                  <span className='fs-11 ms-2'>Удалить выбранные</span>
                </button>
                <button type='button' className='btn-9 py-1 ms-5'>Очистить</button>
              </div>

              <ul className='list-unstyled row g-4'>
                <li className='col'>
                  <div className='cart-item'>
                    <input type="checkbox"/>
                    <img src="imgs/img3.png" alt="" />
                    <div className='text'>
                      <h6>Пепперони</h6>
                      <p>Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус</p>
                      <p>36 см</p>
                      <button type='button' className='d-flex align-items-center'>
                        <span>Показать ещё</span>
                        <IoCaretDownOutline className='fs-08 ms-2'/>
                      </button>
                    </div>
                  </div>
                </li>
                <li className='col'>

                </li>
              </ul>
            </Col>
            <Col md={4}>
              <div className='main-color fs-11 mb-1'>Комментарий</div>
              <textarea rows="3" className='mb-3'>Уберите, пожалуйста, лук</textarea>

              <div className='fs-11 mb-1'>Промокод</div>
              <fieldset>
                <input type="text" />
                <button ty></button>
                <button></button>
              </fieldset>

              <Gifts/>

              <p>Добавьте товары на 268 ₽, чтобы получить подарок</p>
              <div className='btn-6 w-100 rounded-3 mt-3'>34 бонуса будут начислены за этот заказ</div>
              <button type='button' className='btn-3 mt-3 w-100'>Перейти к оформлению</button>
            </Col>
          </Row>
        </form>
      </Container>
    </main>
  );
};

export default Cart;