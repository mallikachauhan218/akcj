import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode, Navigation, Thumbs,Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import Infocard from './infocard';

function Infoslider({onSwiper}) {
  return (
    <Swiper
      onSwiper={onSwiper}
      spaceBetween={24}
      breakpoints={{
        // Define breakpoints for responsive behavior
        640: {
          slidesPerView: 1, 
        },
        768: {
          slidesPerView: 2, 
        },
        1024: {
          slidesPerView: 3, 
        },
    }}
      modules={[FreeMode, Navigation, Thumbs,Autoplay]}
      // autoplay={{ delay: 2000, disableOnInteraction: false }}
      // loop={true}

    >
      
      <SwiperSlide >
        <Infocard image={"/images/choose1.png"} title={"Contra - Alpha curve"} description={"Capitalize on market inefficiencies by avoiding popular trends and focusing on undervalued stocks & turnaround stocks."}/>
      </SwiperSlide>
      <SwiperSlide>
        <Infocard image={"/images/choose2.png"} title={"Multi Cap – Sab Kuch"} description={"Invest strategically across a diverse range of large-cap, mid-cap, and small-cap stocks to capitalize on growth opportunities."}/>
      </SwiperSlide>
      <SwiperSlide >
        <Infocard image={"/images/choose3.png"} title={"Large Cap – Kings Crest"} description={"Invest into companies having market cap of Above 30000 cr"}/>
      </SwiperSlide>
      <SwiperSlide>
        <Infocard image={"/images/choose4.png"} title={"Blue Chip -  Kya Sochna"} description={"Selective investment from the top 150 NIFTY companies"}/>
      </SwiperSlide>
      <SwiperSlide >
        <Infocard image={"/images/choose5.png"} title={"Mid Cap – Ubharte Sitare"} description={"Invest into stocks between market cap. of 8000 cr to 30000 cr with very high growth conviction."}/>
      </SwiperSlide>
      <SwiperSlide>
        <Infocard image={"/images/choose6.png"} title={"Momentum – In Trends"} description={"Focus on capitalizing on the strength of recent price trends by investing in stocks that have demonstrated strong performance"}/>
      </SwiperSlide>
      <SwiperSlide >
        <Infocard image={"/images/choose7.png"} title={"Small Cap – Chota Packet Bada Dhamaka"} description={"Invest into companies having market cap of lower than 8000 cr"}/>
      </SwiperSlide>
      <SwiperSlide>
        <Infocard image={"/images/choose8.png"} title={"Combo -  Royal Bhoj"} description={"Invest strategically across a diverse range of large-cap, mid-cap, and small-cap stocks to capitalize on growth opportunities."}/>
      </SwiperSlide>
     
     
    </Swiper>
  )
}

export default Infoslider