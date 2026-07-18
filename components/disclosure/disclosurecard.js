import React from 'react'

function Disclosurecard({borderClass,title,description}) {
  return (
    <div className={`${borderClass} flex flex-col gap-3 py-[48px]`}>
        <div className='f32 fw_700'>
        {title}
        </div>
        <div className='f24 fw_500 text_body '>
        {description}
        </div>
    </div>
  )
}

export default Disclosurecard