import React from 'react'

function Quotecard({quote,author}) {
  return (
    <div className='border-bottom py-4'>
        <q className='italic f24 text_blue '>{quote}</q>
        <div className='f18 text_red mt-2'>– {author}</div>
    </div>
  )
}

export default Quotecard