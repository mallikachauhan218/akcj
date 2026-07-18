import Image from 'next/image';
import React from 'react'
import { HiMiniMapPin } from "react-icons/hi2";


function Careercard({post,designation,location,description}) {
  return (
    <div className='col-lg-6'>
        <div className='border border-[#c2c2c2] p-4 arrow_card'>
            <div className='text_red f20 fw_700 mb-3'>
            {post}
            </div>
            <div className='flex justify-between items-center pb-4 border-b-[0.5px] border-[#c2c2c2]'>
                <div className='f24 fw_700'>
                {designation}
                </div>
                <div className='flex items-center gap-2'>
                    <HiMiniMapPin style={{fontSize:"24px"}}/>

                    <div className='f18 text_main'>
                        {location}
                    </div>
                </div>
            </div>
            <div className='f16 text_body mt-4 line-clamp-4 mb-3'>
            {description}
            </div>
            <div className='flex items-center justify-end'>

            <button type='button' className='flex items-center  text_red  py-2 px-3 border-[#A71E28] border-[1.6px] rounded-[100px]'>
            <div className='f16 fw_600'>Apply Now </div>
            <div className='arrow_img'>
            <Image src="/images/arrow_red.svg" width={20} height={20} className="img-fluid ms-1" alt="arrow" />
            </div>
            </button>
            </div>
        </div>
    </div>
  )
}

export default Careercard