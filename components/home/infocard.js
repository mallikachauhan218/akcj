import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Infocard({image,title,description}) {
  return (
    <Link className='arrow_card cursor-pointer text_main' href="/product-and-services" >
            
        <div className='position-relative mb-4'>
            <Image src={image} width={300} height={350} className="" alt="blog1" />
            <div className='arrow_slider arrow_img'>
                <Image src={"/images/search_arrow.svg"} width={24} height={24} className="img-fluid" alt="arrow_slider" />
            </div>
        </div>

        <div className='f20 fw_700 mb-2'>
        {title}
        </div>
        <div className='f18 text_body line-clamp-3'>
        {description}
        </div>
    </Link>
  )
}

export default Infocard