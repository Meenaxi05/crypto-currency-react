import React from 'react'
import {FaCoins} from 'react-icons/fa'

const Navbar = () => {
  return (
      <div className='flex justify-center items-center p-5'>
        <FaCoins  className='text-2xl text-[#6900ff]'/>
        <h1 className='text-center m-4 text-2xl '> Crypto <span className='text-[#6900ff]'>Currency</span></h1>
        </div>
  )
}

export default Navbar
