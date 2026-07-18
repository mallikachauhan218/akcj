import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Blogcard({src,title,id}) {
  return (
    <div className='col-lg-4' data-aos="flip-left">
        <Link href={`/blog/${id}`} className='flex flex-col gap-3 arrow_card text_main  cursor-pointer'>
            <div className='flex flex-col'>

                <Image src={src} width={300} height={300} className='w-full' alt='blog1'/>
                {/* <div className='flex justify-between items-center mt-3'>
                    <div className='f16 text_body'>Article</div>
                    <div className='f16 text_body'>{date}</div>
                </div> */}
            </div>
            <div className='row'>
                <div className='col-10'>
                <div className='f20 fw_500 blog_text'>
                {title}
                </div>

                </div>
                <div className='col-2 flex justify-end'>

                <div className='arrow_img'>
                    <Image src={"/images/contact_arrow.svg"} width={24} height={24} className='img-fluid' alt='arrow'/>
                </div>
                </div>
            </div>
            
        </Link>
    </div>
  )
}

export default Blogcard