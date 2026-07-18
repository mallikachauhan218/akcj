import Image from 'next/image'
import React from 'react'

function Testimonialcard({name,quote,img}) {
    const base_url = process.env.NEXT_PUBLIC_DB_IMG
  return (
       <div className='flex flex-col gap-4 justify-between h-full'>
            <div className='flex items-center'>
                <Image src="/images/star_rating.svg" width={24} height={24} alt="star_rating" />
                <Image src="/images/star_rating.svg" width={24} height={24} alt="star_rating" />
                <Image src="/images/star_rating.svg" width={24} height={24} alt="star_rating" />
                <Image src="/images/star_rating.svg" width={24} height={24} alt="star_rating" />
                <Image src="/images/star_rating.svg" width={24} height={24} alt="star_rating" />
            </div>
            <div className='f24 fw_500 text-white'>
            {quote}
            </div>
            <div className='flex items-center'>
                <Image src={img} width={63} height={63} alt="client1" className='rounded-circle' />
                <div className='flex flex-col ml-5'>
                    <div className='f32 fw_700 mb-2 text-white'>{name}</div>
                    {/* <div className='f18 text-white'>CEO at Linear Tech</div> */}
                </div>
            </div>
       </div>
      
    )
}

export default Testimonialcard