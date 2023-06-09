import React, {useState} from 'react';
import useIsMobile from '../hooks/isMobile';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import FoodRolls from '../components/svgs/FoodRolls';
import FoodSets from '../components/svgs/FoodSets';
import FoodPizza from '../components/svgs/FoodPizza';
import FoodCombo from '../components/svgs/FoodCombo';
import FoodPoke from '../components/svgs/FoodPoke';
import FoodDesserts from '../components/svgs/FoodDesserts';
import { HiOutlineArrowRightCircle, HiOutlineArrowLeftCircle,HiOutlineArrowUturnDown, HiArrowUturnUp } from "react-icons/hi2";

const Categories = (props) => {
  const isMobileLG = useIsMobile('991px');

  const [isFull, setIsFull] = useState(false);
  const [swiper, setSwiper] = useState(null);
  const handleExpand = () => {
    swiper.disable();
    setIsFull(true);
  };
  const handleСollapse = () => {
    swiper.enable();
    setIsFull(false);
  };
  
  // if(isMobileLG){
  //   setIsFull(false)
  // }

  return (
    <div className={"categories "+props.className}>
      <Swiper
        className={(isFull) ? "categories-slider categories-slider-disabled" : "categories-slider"}
        modules={[Navigation, FreeMode]}
        speed={750}
        spaceBetween={20}
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
        breakpoints={{
          1200: {
            spaceBetween: 30,
          },
        }}
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
            <FoodDesserts className="fs-15"/>
            <span className='ms-2'>Десерты</span>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button type='button' className='btn-8'>
            <FoodPoke className="fs-15"/>
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
            <FoodDesserts className="fs-15"/>
            <span className='ms-2'>Десерты</span>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button type='button' className='btn-8'>
            <FoodPoke className="fs-15"/>
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
      {
        (isFull)
        ? <button type='button' onClick={handleСollapse} className='categories-btn'>
          <span>свернуть</span>
          <HiArrowUturnUp className='fs-15 ms-3 main-color'/>
        </button>
        : <button type='button' onClick={handleExpand} className='categories-btn'>
          <span>показать все</span>
          <HiOutlineArrowUturnDown className='fs-15 ms-3 main-color rotateY-180'/>
        </button>
      }
    </div>
  );
};

export default Categories;