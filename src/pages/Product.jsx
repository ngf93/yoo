import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from '../components/ProductCard';
import SelectImitation from '../components/utils/SelectImitation';
import { HiOutlineInformationCircle, HiOutlineShoppingBag } from "react-icons/hi2";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Notice from '../components/Notice';

const Product = () => {
  return (
    <main>
      <Container>
        <form className='productPage mb-5'>
          <Row>
            <Col lg={3}>
              <img src="imgs/img3.png" alt="Четыре сыра" className='productPage-img'/>
            </Col>
            <Col lg={5}>
              <div className="d-flex align-items-center mb-4">
                <h1 className='mb-0'>Четыре сыра</h1>
                <h6 className='gray mb-0 ms-3'>510гр</h6>
                <HiOutlineInformationCircle className='dark-gray fs-15 ms-2'/>
              </div>
              
              <p className='mb-2'>Состав:</p>
              <p>тесто, сыр блю чиз, смесь сыров чеддер и пармезан, моцарелла, фирменный соус альфредо</p>

              <h6 className='mt-4'>Тесто</h6>

              <SelectImitation 
                boxClass={'w-fit mb-4'}
                btnClass={'rounded-pill'}
                optionsArr={[
                  {
                    value: 1,
                    label: 'Сливочный соус',
                    defaultChecked: true,
                  },
                  {
                    value: 2,
                    label: 'Сливочный соус',
                    defaultChecked: false,
                  }
                ]}
              />

              <div className='d-flex align-items-center'>
                <div>
                  <div className='fs-12'>650 ₽</div>
                  <div className='gray fs-09 text-decoration-line-through'> 650 </div>
                </div>
                <button type='button' className='btn-3 rounded-pill ms-3'>
                  <span>В корзину</span>
                  <HiOutlineShoppingBag className='fs-15 ms-2'/>
                </button>
              </div>
            </Col>
            <Col lg={4}>
              <h6>Изменить по вкусу</h6>
              <Notice/>
            </Col>
          </Row>
        </form>

        <section className='mb-5'>
          <h2>Товары из этой категории</h2>
          <Swiper
            className=""
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={4}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            // breakpoints={{
            //   1200: {
            //     spaceBetween: 30,
            //   },
            // }}
          >
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
          </Swiper>
        </section>
      </Container>
    </main>
  );
};

export default Product;