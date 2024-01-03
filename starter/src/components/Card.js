import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'


const Card = (props) => {
    let review=props.review;
  return (
    <div className='flex flex-col md:relative'>
      <div className='absolute top-[-7rem] z-[10] mx-auto'>
        <img src={review.image} className=' aspect-square rounded-full 
        w-[140px] h-[140px] z-[25]'/>
        <div className='w-[140px] h-[140px] left-[10px] 
        rounded-full bg-violet-800 z-[-10] top-[-6px] absolute'></div>
      </div>

      <div className='text-center mt-7'>
        <p className='font-bold text-2xl capitalize'>{review.name}</p>
      </div>
      <div className='text-center  mt-7 '>
        <p className='text-violet-500 text-ssm 
        uppercase'>{review.job}</p>
      </div>


      <div className='text-violet-500 mx-auto mt-4'>
        <FaQuoteLeft></FaQuoteLeft>
      </div>
      <div className='text-center text-zinc-500  mt-4'>{review.text}
      </div>

      <div className='text-violet-500 mx-auto mt-4'>
        <FaQuoteRight></FaQuoteRight>
      </div>
    </div>
  )
}

export default Card
