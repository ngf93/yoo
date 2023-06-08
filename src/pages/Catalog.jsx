import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import SelectImitation from '../components/utils/SelectImitation';
import ProductCard from '../components/ProductCard';

import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import FoodRolls from '../components/svgs/FoodRolls';
import FoodSets from '../components/svgs/FoodSets';
import FoodPizza from '../components/svgs/FoodPizza';
import FoodCombo from '../components/svgs/FoodCombo';
import { HiOutlineArrowRightCircle, HiOutlineArrowLeftCircle,HiOutlineArrowUturnDown, HiOutlineAdjustmentsHorizontal, HiOutlineMagnifyingGlass } from "react-icons/hi2";


const Catalog = () => {
  const [swiper, setSwiper] = useState(null);

  return (
    <main>
      <section className='sec-5 mb-5'>
        <Container>
          <img src="imgs/Rectangle.png" alt="Rectangle" className='img-fluid mb-4' />

          <div className="categories mb-5">
            <Swiper
              className="categories-slider"
              modules={[Navigation, FreeMode]}
              speed={750}
              spaceBetween={30}
              slidesPerView={'auto'}
              freeMode={true}
              observer={true}
              observeSlideChildren={true}
              watchSlidesProgress={true}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              onSwiper={setSwiper}
              // breakpoints={{
              //   576: {
              //     spaceBetween: 15,
              //   },
              // }}
            >
              <SwiperSlide>
                <button type='button' className='btn-8'>
                  <FoodRolls className="fs-15"/>
                  <span className='ms-2'>Роллы</span>
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button type='button' className='btn-8'>
                  <FoodSets className="fs-15"/>
                  <span className='ms-2'>Сеты</span>
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button type='button' className='btn-8'>
                  <FoodPizza className="fs-15"/>
                  <span className='ms-2'>Пицца</span>
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button type='button' className='btn-8'>
                  <FoodCombo className="fs-15"/>
                  <span className='ms-2'>Комбо</span>
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button type='button' className='btn-8'>
                  <FoodSets className="fs-15"/>
                  <span className='ms-2'>Десерты</span>
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button type='button' className='btn-8'>
                  <FoodSets className="fs-15"/>
                  <span className='ms-2'>Поке</span>
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button type='button' className='btn-8'>
                  <FoodRolls className="fs-15"/>
                  <span className='ms-2'>Роллы</span>
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button type='button' className='btn-8'>
                  <FoodSets className="fs-15"/>
                  <span className='ms-2'>Сеты</span>
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button type='button' className='btn-8'>
                  <FoodPizza className="fs-15"/>
                  <span className='ms-2'>Пицца</span>
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button type='button' className='btn-8'>
                  <FoodCombo className="fs-15"/>
                  <span className='ms-2'>Комбо</span>
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button type='button' className='btn-8'>
                  <FoodSets className="fs-15"/>
                  <span className='ms-2'>Десерты</span>
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button type='button' className='btn-8'>
                  <FoodSets className="fs-15"/>
                  <span className='ms-2'>Поке</span>
                </button>
              </SwiperSlide>
              <div className="swiper-button-prev">
                <HiOutlineArrowLeftCircle/>
              </div>
              <div className="swiper-button-next">
                <HiOutlineArrowRightCircle/>
              </div>
            </Swiper>
            <button type='button' onClick={() => swiper.destroy()} className='main-color ms-5 py-4'>
              <span>показать все</span>
              <HiOutlineArrowUturnDown className='fs-15 ms-3 main-color rotateY-180'/>
            </button>
          </div>

          <div className='d-flex align-items-center justify-content-between mb-4'>
            <div className="d-flex">
              <h4 className='mb-0 me-4'>Роллы</h4>
              <ul className='list-unstyled d-flex'>
                <li>
                  <button type='button' className='btn-90'>Фирменные</button>
                </li>
                <li>
                  <button type='button' className='btn-90 active'>Запечённые</button>
                </li>
                <li>
                  <button type='button' className='btn-90'>Классические</button>
                </li>
                <li>
                  <button type='button' className='btn-90'>В темпуре</button>
                </li>
              </ul>
              <button type='button' className='btn-90 rounded-circle p-2 ms-3'>
                <HiOutlineMagnifyingGlass className='fs-15 dark-gray'/>
              </button>
            </div>
            

            <div className='d-flex'>
              <button type='button' className='btn-10 rounded-circle p-2 me-3'>
                <HiOutlineAdjustmentsHorizontal className='fs-15'/>
              </button>
              <SelectImitation 
                btnClass={''}
                imgClass={'round'}
                optionsArr={[
                  {
                    value: 1,
                    label: 'По увеличению',
                    defaultChecked: true,
                  },
                  {
                    value: 2,
                    label: 'По уменьшению',
                    defaultChecked: false,
                  }
                ]}
              />
            </div>
          </div>
          <ul className='list-unstyled row row-cols-4 g-5'>
            <li>
              <ProductCard/>
            </li>
            <li>
              <ProductCard/>
            </li>
            <li>
              <ProductCard/>
            </li>
            <li>
              <ProductCard/>
            </li>
            <li>
              <ProductCard/>
            </li>
            <li>
              <ProductCard/>
            </li>
          </ul>

          <hr className='divider'/>

          <div className='d-flex align-items-center justify-content-between mb-4'>
            <h4 className='mb-0'>Пицца</h4>

            <div className='d-flex'>
              <button type='button' className='btn-10 rounded-circle p-2 me-3'>
                <HiOutlineAdjustmentsHorizontal className='fs-15'/>
              </button>
              <SelectImitation 
                btnClass={''}
                imgClass={'round'}
                optionsArr={[
                  {
                    value: 1,
                    label: 'По увеличению',
                    defaultChecked: true,
                  },
                  {
                    value: 2,
                    label: 'По уменьшению',
                    defaultChecked: false,
                  }
                ]}
              />
            </div>
          </div>
          <ul className='list-unstyled row row-cols-4 g-5'>
            <li>
              <ProductCard/>
            </li>
            <li>
              <ProductCard/>
            </li>
            <li>
              <ProductCard/>
            </li>
            <li>
              <ProductCard/>
            </li>
            <li>
              <ProductCard/>
            </li>
            <li>
              <ProductCard/>
            </li>
          </ul>
          
        </Container>
      </section>
    </main>
  );
};

export default Catalog;