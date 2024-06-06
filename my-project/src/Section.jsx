import React from 'react'
import './index.css'
import image from '/images/Vector.png';
import human from '/images/mobile.png';
const Section = () => {
  return (
    
    <div className='flex flex-wrap justify-between rounded mt-5 items-center h-[100vh]'>
      <div className='w-[50%]'>
        <h2 className='text-slate-500 text-4xl p-4 text-left'>Light, Fast & Powerfull</h2>
        <p className='text-slate-700 text-left p-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas amet dolores sapiente delectus iure. Odit quae placeat ratione expedita error repellendus <br /><br />illum nisi cum, qui accusamus molestias magnam explicabo autem! Illo deleniti placeat eius optio cupiditate possimus fugit, consectetur quibusdam?</p>
        <div className='flex flex-wrap justify-between rounded mt-5 items-center'>
            <div className='w-[50%] text-left p-7'>
                <img src={image} alt="something" />
                <span className='font-bold text-2xl'>Title Goes Here</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, in.</p>
            </div>
            <div className='w-[50%] text-left p-7'>
            <img src={image} alt="something" />
                <span className='font-bold text-2xl'>Title Goes Here</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, in.</p>
            </div>
        </div>
      </div>
      <div className='w-[50%]'>
      <img src={human} alt="something" />
      </div>
    </div>
  )
}
export default Section
