import React from 'react'
import './index.css'
import social from '/images/social.png';
const Social = () => {
  return (
    <div className='flex flex-wrap justify-between mt-0 items-center h-[100vh]'>
      <div className='w-[50%]'>
        <img src={social} alt="" />
      </div>
      <div className='w-[50%]'>
      <h2 className='text-slate-500 text-4xl p-4 text-left'>Light, Fast & Powerfull</h2>
      <p className='text-slate-700 text-left p-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas amet dolores sapiente delectus iure. Odit quae placeat ratione expedita error repellendus <br /><br />illum nisi cum, qui accusamus molestias magnam explicabo autem! Illo deleniti placeat eius optio cupiditate possimus fugit, consectetur quibusdam?</p>
      </div>
    </div>
  )
}

export default Social
