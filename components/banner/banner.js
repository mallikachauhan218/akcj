import Link from 'next/link'
import React from 'react'

function Banner({title,bannerClass}) {
  return (
    <div className={`${bannerClass} common_banner`}>
        <div className='container'>
            <div className='row 	  d-flex items-center' style={{height:"30vh"}}>
                <div className=' col-lg-7'  style={{zIndex:"5000"}}>
                    <div className='f56 fw_700 text-capitalize text-white mb-[24px]' data-aos="fade-right">
                    {title}
                    </div>
                    <nav aria-label="breadcrumb">
                  <ol className="breadcrumb banner_breadcrumb mb-0" data-aos="fade-left">
                    <li className="breadcrumb-item ">
                      <Link href="/" className='text-white' >Home</Link>
                    </li>
                    <li className="breadcrumb-item active" >
                      {title}
                    </li>
                   
                  </ol>
                </nav>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Banner