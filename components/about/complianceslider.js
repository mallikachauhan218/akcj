import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Compliancecard from './compliancecard';

function Complianceslider({onSwiper}) {
    
  return (
    <Swiper
    onSwiper={onSwiper}
    slidesPerView={1}
    modules={[Autoplay]}
    pagination={{ clickable: true }}
    autoplay={{ delay: 2000, disableOnInteraction: false }}
    loop={true}

  >
    
    <SwiperSlide >
       <Compliancecard quote={"The stock market is a device for transferring money from the impatient to the patient."} src={"/images/quoteimg1.svg"} author={"Warren Buffett"}/>
    </SwiperSlide>
    <SwiperSlide >
       <Compliancecard quote={"The stock market is filled with individuals who know the price of everything, but the value of nothing."} src={"/images/quoteimg2.svg"} author={"Philip Fisher"}/>
    </SwiperSlide>
    <SwiperSlide >
       <Compliancecard quote={`The investor’s chief problem – and even his worst enemy – is likely to be himself.`} src={"/images/quoteimg3.svg"} author={"Benjamin Graham"}/>
    </SwiperSlide>
    <SwiperSlide >
       <Compliancecard quote={`The best time to plant a tree was 20 years ago. The second-best time is now.`} src={"/images/quoteimg4.svg"} author={"Chinese Proverb"}/>
    </SwiperSlide>
    <SwiperSlide >
       <Compliancecard quote={`A lot of success in life and business comes from knowing what you want to avoid: early death, a bad marriage etc.`} src={"/images/quoteimg5.svg"} author={"Charlie Munger"}/>
    </SwiperSlide>
    
    
    
   
   
  </Swiper>

  )
}

export default Complianceslider