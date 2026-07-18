import React from 'react';


function Homebanner() {
  return (
    <div className='home_banner'>
      <video autoPlay loop muted className='background-video' >
        <source src='/videos/banner-video.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='container'>
        <div className='row vh_85 d-flex align-items-center'>
          <div className=''>
            <div className='white_label mb-[28px] my-2.5 mx-auto'  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-duration="5000">
              Shape Your Future
            </div>
            <div className='text-white main_heading text-center' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-duration="5000">
              MAXIMIZING YOUR RESEARCH QUALITY PER UNIT OF STRESS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homebanner;