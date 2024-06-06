import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-wrap justify-between mt-0 items-center'>
      <div>
        <a href="" className='pl-6 text-1xl'>Home</a>
        <a href="" className='pl-6 text-1xl'>About</a>
        <a href="" className='pl-6 text-1xl'>Contact</a>
      </div>
      <span className='text-3xl text-slate-800 font-bold font-serif'>Landing</span>
      <button className='bg-black px-8 text-white py-1'>Buy Now</button>
    </div>
  )
}

export default Navbar
