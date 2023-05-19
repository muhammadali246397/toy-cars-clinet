import React from 'react';
import img1 from '../../../../assets/images/gallery/img1_.jpg'
import img2 from '../../../../assets/images/gallery/img2.jpg'
import img3 from '../../../../assets/images/gallery/img3.jpg'
import img4 from '../../../../assets/images/gallery/img4.jpg'
import img5 from '../../../../assets/images/gallery/img5.jpg'
import img6 from '../../../../assets/images/gallery/img6.jpg'
import img7 from '../../../../assets/images/gallery/img7.jpg'
import img8 from '../../../../assets/images/gallery/img8.jpg'
import img9 from '../../../../assets/images/gallery/img9.jpg'
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Gallery.css'
import AOSComponent from '../Bannar/Aosb';




const Galery = () => {
  return (
    <div className='my-20'>
      <div className='text-center'>
        <h3 className='font-bold text-4xl text-orange-700 pb-4'> <span className='border-b-2 border-orange-700'>car Gallery</span></h3>
        <p>Our all new cars collections you can see in this photo gallery. </p>
      </div>
      <AOSComponent>
        <div className='border-t-2 border-b-2 my-5 border-orange-700'>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper w-full py-20"
          >
            <SwiperSlide className='w-[300px] h-[250px]'>
              <img className='' src={img1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img6} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img7} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img8} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img9} />
            </SwiperSlide>
          </Swiper>
        </div>
      </AOSComponent>
    </div>
  );
};

export default Galery;