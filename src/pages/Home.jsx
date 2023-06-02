import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import StoriesSection from '../components/StoriesSection';
import CategoryCard from '../components/CategoryCard';
import ProductCardMini from '../components/ProductCardMini';
import Offer from '../components/Offer';
import GridIcon from '../components/svgs/GridIcon';
import AppStore from '../assets/imgs/appstore-black.svg';
import GooglePlay from '../assets/imgs/googleplay-black.svg';
import Phone from '../assets/imgs/phone.png';
import Choose from '../assets/imgs/choose.svg';
import { HiOutlineArrowRightCircle, HiOutlineArrowLeftCircle, HiOutlineArrowUturnDown } from "react-icons/hi2";
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Home = () => {
  return (
    <main>
      <section className='sec-1 mb-5'>
        <div className='container-md gx-0 gx-md-4'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-11 col-xl-9 col-xxl-8'>
              <Swiper
                className='main-slider paginated'
                modules={[Navigation, Pagination]}
                loop={true}
                spaceBetween={0}
                slidesPerView={1}
                initialSlide={1}
                loopedSlides={2}
                speed={750}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                  768: {
                    spaceBetween: 35,
                  },
                }}
              >
                <SwiperSlide>
                  <Link to='/'>
                    <img src="imgs/slider-main/slide-1.jpg" alt="Большие пиццы" className='img-fluid' loading="lazy"/>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to='/'>
                    <img src="imgs/slider-main/slide-2.jpg" alt="Фестиваль уличной еды" className='img-fluid' loading="lazy"/>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to='/'>
                    <img src="imgs/slider-main/slide-3.jpg" alt="Счастливые часы" className='img-fluid' loading="lazy"/>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to='/'>
                    <img src="imgs/slider-main/slide-2.jpg" alt="Фестиваль уличной еды" className='img-fluid' loading="lazy"/>
                  </Link>
                </SwiperSlide>
                <div className="swiper-button-prev">
                  <HiOutlineArrowLeftCircle/>
                </div>
                <div className="swiper-button-next">
                  <HiOutlineArrowRightCircle/>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section className='sec-2 mb-5'>
        <Container>
          <StoriesSection/>
        </Container>
      </section>

      <section className='sec-3 mb-5'>
        <Container className='box'>
          <button type='button' className='btn-view mb-3 ms-auto me-5'>
            <img src={Choose} alt="Choose" />
            <GridIcon/>
          </button>
          <Row xs={2} md={3} xl={4} className='g-3 g-sm-4'>
            <Col><CategoryCard/></Col>
            <Col><CategoryCard/></Col>
            <Col><CategoryCard/></Col>
            <Col><CategoryCard/></Col>
            <Col><CategoryCard/></Col>
            <Col><CategoryCard/></Col>
            <Col><CategoryCard/></Col>
            <Col><CategoryCard/></Col>
            <Col><CategoryCard/></Col>
            <Col><CategoryCard/></Col>
            <Col><CategoryCard/></Col>
            <Col><CategoryCard/></Col>
          </Row>
          <button type='button' className='main-color mx-auto mt-4'>
            <span>показать все</span>
            <HiOutlineArrowUturnDown className='fs-15 ms-3 main-color rotateY-180'/>
          </button>
        </Container>
      </section>

      <Container>
        <section className='sec-4 mb-5'>
          <h3>Заказывать стало ещё&nbsp;удобнее!</h3>
          <div className="d-flex align-items-center mb-4">
            <button type='button' className='btn-2 fs-20 py-2 me-3'>скидка 15%</button>
            <p className='fs-16'>на&nbsp;первый заказ <br/>через&nbsp;приложение</p>
          </div>
          <ul className='list-unstyled d-flex mb-5'>
            <li>
              <a href="/">
                <img src={AppStore} alt="App Store" />
              </a>
            </li>
            <li className='ms-5'>
              <a href="/">
                <img src={GooglePlay} alt="Google Play" />
              </a>
            </li>
          </ul>
          <p>Акция действует при заказе на сумму от 1 000 ₽</p>
          <img src={Phone} alt="Phone" className='phone' />
        </section>
      </Container>

      <section className='sec-5 mb-5'>
        <Container>
          <h2>Часто заказывают</h2>
          <Swiper
            className='product-slider'
            spaceBetween={20}
            slidesPerView={'auto'}
            speed={750}
          >
            <SwiperSlide>
              <ProductCardMini/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCardMini/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCardMini/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCardMini/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCardMini/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCardMini/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCardMini/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCardMini/>
            </SwiperSlide>
          </Swiper>
        </Container>
      </section>

      <section className='sec-6 mb-5'>
        <Container>
          <Swiper
            className='sw-offers'
            spaceBetween={20}
            slidesPerView={'auto'}
            speed={750}
            breakpoints={{
              992: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
            }}
          >
            <SwiperSlide>
              <Offer blackText={false} img={"imgs/offers/offer1.jpg"} title={'Весна пришла'} subtitle={'А с ней новые вкусы роллов!'}/>
            </SwiperSlide>
            <SwiperSlide>
              <Offer blackText={false} img={"imgs/offers/offer2.jpg"} title={'Пицца «Гаваи»'} subtitle={'Улётный микс из курицы и ананаса'}/>
            </SwiperSlide>
            <SwiperSlide>
              <Offer blackText={true} img={"imgs/offers/offer3.jpg"} title={'Свежих ягод много бывает'} subtitle={'Попробуйте наш фирменный тарт — мы добавили в него ещё больше клубники!'}/>
            </SwiperSlide>
          </Swiper>
        </Container>
      </section>
    </main>
  );
};

export default Home;