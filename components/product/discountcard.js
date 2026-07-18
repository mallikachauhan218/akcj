import React from 'react'

function Discountcard({title,discount}) {
  return (
        <div className='flex flex-col gap-3'>
            <div className='f20 text_blue '>{title} </div>
            <div className='f38 text_red fw_700'>{discount}%</div>
            <div className='f18 fw_700 text_body'>Discount</div>
        </div>
    )
}

export default Discountcard