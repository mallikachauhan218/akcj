"use client"
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Testimonialcard from './testimonialcard';
import { Autoplay } from 'swiper/modules'; // Import Autoplay module

function Testimonial({ onSwiper,setActiveIndex , testimonials }) {

  // const testimonials = [
  //   {
  //     name: "Anjali Bansal",
  //     quote: "The team at AKCJ Capital truly understands the needs of individuals. Their innovative approach and commitment to excellence have made managing my wealth both effortless and rewarding."
  //   },
  //   {
  //     name: "Rahul Sharma",
  //     quote: "Working with them has been a seamless experience. Their personalized strategies and deep market insights have helped me achieve steady growth while maintaining complete confidence in their expertise."
  //   },
  //   {
  //     name: "Priya Verma",
  //     quote: "I have been working with them for years. Their commitment to client success is unparalleled, and their strategies are always ahead of the curve."
  //   }
  // ];
    
  return (
    <Swiper
      onSwiper={onSwiper}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} 
      autoplay={{ delay: 3000, disableOnInteraction: false }} 
      modules={[Autoplay]} 
    >
      
      {testimonials?.map((testimonial, index) => (
        <SwiperSlide key={index} style={{ width: "130px", height: "" }}>
          <Testimonialcard name={testimonial?.name} quote={testimonial?.review} img={testimonial?.image} />
        </SwiperSlide>
      ))}

    </Swiper>
  )
}

export default Testimonial;