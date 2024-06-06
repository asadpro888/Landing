import React from 'react'
import './index.css'
const Card = () => {
  return (
    <div className='full-f bg-slate-200 text-center p-4 m-0'>
      <h1 className='font-bold text-4xl'>A price Suit everyone</h1>
      <p className='p-3 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, assumenda? Voluptas, error doloremque earum quod deserunt, et quisquam obcaecati possimus asperiores illo ut culpa quas.</p>
      <div className='p-5'>
      <span className='text-slate-950 font-bold text-4xl'>40$</span>
      <p>UI Design Kit</p>
      <p className='text-gray-500 mt-9'>See one price simple</p>
      <button className='bg-slate-900 px-8 text-white py-1 m-4'>Purchse Now</button>
      </div>
      
    </div>
  )
}

export default Card
