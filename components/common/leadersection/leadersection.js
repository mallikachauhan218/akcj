import Image from 'next/image'
import React from 'react'

function Leadersection({title}) {
  return (
    <div className="container-fluid p-0" >
      <div className="row flex items-stretch g-0  mb-[60px]">
        <div className="col-lg-5 pe-0 padding_left mb-lg-0 mb-5">
          <Image src="/images/home2.png" width={546} height={500} alt="home2" />
        </div>
        <div className="col-lg-7 py-lg-0 py-5 d-flex align-items-center bg-[#A71E28] ps-0">
          <div className="text-white lg:px-[48px] px-[20px]">
            <div className="d-flex align-items-start" data-aos="fade-left">
              <Image src="/images/quotes.svg" width={60} height={60} className="img-fluid mr-[24px]" alt="quote" />
              <div className="flex flex-col">
                <div className="  leaderquote mb-[48px]">
                {title}
                </div>
                
                <div className="f24 fw_700 mb-2" data-aos="fade-left">Amit KC Jain</div>
                <div className="f18" data-aos="fade-left">Founder & Managing Partner</div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leadersection