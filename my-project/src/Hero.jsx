import React from 'react'
import './index.css'
import image from '/images/Group.png';


function Hero() {
  return (
    <div className='flex flex-wrap justify-between rounded mt-5 items-center back'>
      <div className='w-[50%]'>
        <h1 className='text-5xl mb-7 capitalize text-left'>Introduce your product quicly & effectivly</h1>
        <p className='text-left text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex vitae aliquam quisquam cupiditate sed quibusdam blanditiis vel, beatae tempora excepturi! Delectus veritatis quae fugit, a magni temporibus vitae eveniet, tenetur debitis consequuntur blanditiis, in ea? Asperiores nulla illum similique earum voluptatum voluptas totam eaque ratione iure doloribus omnis minima <br /> <br /> quibusdam libero aliquam commodi dolorum, enim officia voluptates. Minima fugit facere a ad ipsam. Laborum iste tempora hic repellendus, dolore nihil!</p>
        <button className='px-8 p-0 bg-slate-900 text-white m-4'>Purchase UI kit</button>
        <button className='border border-slate-900 p-0 px-6 ml-3 m-4'>Learn More</button>
      </div>
      <div className=' w-[50%] max-w-full'>
        <img src={image} alt='image' />
      </div>
    </div>
  );
}

export default Hero
