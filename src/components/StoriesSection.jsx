import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import {Swiper, SwiperSlide} from 'swiper/react'
import {FreeMode, Navigation, Pagination} from 'swiper'
import Story from './Story'
import { HiOutlineArrowRightCircle, HiOutlineArrowLeftCircle } from "react-icons/hi2";

const StoriesSection = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [story, setStory] = useState(false)

  const closeStory = () => setStory(false)
  const showStory = (index) => {
    setStory(true)
    setActiveSlide(index)
  }

  return (
    <>
      <Swiper
        className="swiper-stories"
        modules={[Navigation, FreeMode]}
        speed={750}
        spaceBetween={50}
        slidesPerGroup={4}
        slidesPerView={'auto'}
        freeMode={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        <SwiperSlide>
          <Story onClick={() => showStory(0)}/>
        </SwiperSlide>
        <SwiperSlide>
          <Story onClick={() => showStory(1)}/>
        </SwiperSlide>
        <SwiperSlide>
          <Story onClick={() => showStory(2)}/>
        </SwiperSlide>
        <SwiperSlide>
          <Story onClick={() => showStory(3)}/>
        </SwiperSlide>
        <SwiperSlide>
          <Story onClick={() => showStory(0)}/>
        </SwiperSlide>
        <SwiperSlide>
          <Story onClick={() => showStory(1)}/>
        </SwiperSlide>
        <SwiperSlide>
          <Story onClick={() => showStory(2)}/>
        </SwiperSlide>
        <SwiperSlide>
          <Story onClick={() => showStory(3)}/>
        </SwiperSlide>
        <div className="swiper-button-prev">
          <HiOutlineArrowLeftCircle/>
        </div>
        <div className="swiper-button-next">
          <HiOutlineArrowRightCircle/>
        </div>
      </Swiper>

      <Modal show={story} onHide={closeStory} className="story-modal">
        <Modal.Body>
          <Swiper
            className="swiper-stories-mobile"
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable: true}}
            onSwiper={(swiper) => swiper.slideTo(activeSlide, 50)}
          >
            <SwiperSlide>
              <Story/>
            </SwiperSlide>
          </Swiper>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default StoriesSection;