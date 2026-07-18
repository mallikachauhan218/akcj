import React from 'react'
import { Accordion } from 'react-bootstrap'

function AccordionItem({eventKey, title, description}) {
  return (
    <Accordion.Item eventKey={eventKey} className='border-bottom border-0'>
        <Accordion.Header className='bg-white '>{title}</Accordion.Header>
        <Accordion.Body>
          {description}
        </Accordion.Body>
      </Accordion.Item>
  )
}

export default AccordionItem