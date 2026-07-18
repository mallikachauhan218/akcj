import Image from 'next/image'
import React from 'react'

function Iconsection({bgclass,src,title,description}) {
  return (
    <div className='container-fluid p-0'>
            <div className={`  md:py-[36px] py-[20px]`}>
                <div className='container'>
                    <div className='row mx-0'>
                        <div className='col-md-1 mb-md-0 mb-4'>

                            <div className='transition-transform duration-400 ease-in-out transform hover:rotate-[45deg]'>
                                <Image src={src} width={112} height={112} alt='icon1' className='img-fluid' />
                            </div>                       
                        </div>
                        <div className='col-md-9 ms-md-3'>

                                    <div className='f32 fw_700 text_main mb-[10px]'>{title}</div>
                                    <div className='f20 fw_500 text_body'>{description}</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
  )
}

export default Iconsection