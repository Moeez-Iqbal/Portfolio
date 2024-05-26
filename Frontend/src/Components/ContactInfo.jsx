import React from 'react'

function ContactInfo({icon, details}) {
  return (
   <> 
   <span className='flex gap-2 mt-3'>
   {icon}
  <p className="text-1xl text-orange-500 font-semibold ">{details}</p>
  </span>
   </>
  )
}

export default ContactInfo