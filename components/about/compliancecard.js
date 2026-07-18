import Image from 'next/image'
import React from 'react'

function Compliancecard({quote,author,src}) {
  return (
    <div className='flex flex-col justify-center'>

        <q className='f24 italic text_blue text-center mb-[20px]'>
        {quote}
        </q>
        <div className='flex justify-center  items-center'>
            <Image src={src} width={80} height={80} className="img-fluid rounded-circle mr-4" alt="placeholder" />

            <div className='f24 text_red text-center'>
            {author}
            </div>
        </div>
      </div>
  )
}

export default Compliancecard