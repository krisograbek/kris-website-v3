import React from 'react'

const NavCard = ({ children }) => {
  return (
    <div className='col-span-1 md:col-span-6 lg:col-span-4 w-full p-4 m-4 border-solid border-2'>
      {children}
    </div>
  )
}

export default NavCard;