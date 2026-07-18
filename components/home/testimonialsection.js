import React, { useEffect, useState } from 'react'
import Testimonial from './testimonial'
import Image from 'next/image'
import { GET } from '@/utils/api/get';

function Testimonialsection() {
    const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [testimonials, settestimonials] = useState([])

  const fatchTeam = async () => {
    try {
      const response = await GET.request({
        url: "/testimonials",
      });

      console.log(response);

      settestimonials(response.testimonials);

      //   setStocksapi(response?.stocks);
    } catch (error) {
      console.error("Error fetching video:", error);
      throw error; // Throw the error for further handling
    }
  };

  const handleSwiper = (swiper) => {
    setSwiperInstance(swiper);
    swiper.on('slideChange', () => {
      setActiveIndex(swiper.activeIndex);
    });

  };

  const goToSlide = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
      setActiveIndex(index); 
    }
  };

  useEffect(() => {
    
    fatchTeam()
  }, []);
  return (
    <div className="container-fluid p-0 " >
    <div className="bg-[#1A2A5B] text-white py-[72px]">

      <div className="container">
        <div className="row  gap-lg-0 gap-5">
          <div className="col-lg-4 lg:border-r-[#808080] lg:border-r-[0.5px]">
            <div className="white_label mb-[28px]" data-aos="fade-right">
            Testimonials
            </div>
            <div className="f56 fw_700 " data-aos="fade-right">
            What our<br/> Clients Say
            </div>
          </div>
          <div className="col-lg-8 lg:pl-[24px!important] pl-[0px!important]">
            <div className="row">
              <div className="col-2">
              <div className="flex justify-between items-center flex-col h-full">
                <Image src={"/images/quotes.svg"} width={65} height={65} className="img-fluid" alt="quotes" />
                <div className="pagination_div flex flex-col gap-2">
                <button
                      onClick={() => goToSlide(0)}
                      className={`testimonial_page ${activeIndex === 0 ? 'active' : ''}`}
                    ></button>
                    <button
                      onClick={() => goToSlide(1)}
                      className={`testimonial_page ${activeIndex === 1 ? 'active' : ''}`}
                    ></button>
                    <button
                      onClick={() => goToSlide(2)}
                      className={`testimonial_page ${activeIndex === 2 ? 'active' : ''}`}
                    ></button>

                </div>

              </div>
              </div>
              <div className="col-10">
              <Testimonial onSwiper={handleSwiper} setActiveIndex={setActiveIndex} testimonials={testimonials} />

              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Testimonialsection