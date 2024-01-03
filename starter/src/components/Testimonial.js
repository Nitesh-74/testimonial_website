import React from 'react'
import Card from './Card'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi';
import { useState } from 'react';
const Testimonial = (props) => {
    let reviews=props.reviews;
    const[index,setIndex]=useState(0);

    function leftHandler(){
            if(index-1 <  0){
                setIndex(reviews.length-1)
            }
            else{
                setIndex(index-1)
            }
    }
    function rightHandler(){
             if(index+1>=reviews.length){
                setIndex(0);
             }
             else{
                setIndex(index+1);
             }
    }
    function surpriseHandler(){
           let randomIndex=  Math.floor(Math.random()*reviews.length);
                setIndex(randomIndex);
    }
  return (
    <div className='w-[85vw md:w-[700px] bg-white flex flex-col
     justify-center items-center mt-10 p-10 transition-all duration-200
     hover:shadow-xl'>
      <Card review={reviews[index]}></Card>


      <div className='text-violet-400 flex text-center
       mx-auto text-2xl mt-4 gap-3'>
        <button 
        onClick={leftHandler}
        className='cursor-pointer hover:text-violet-800'>
            <FiChevronLeft></FiChevronLeft></button>
        <button 
        onClick={rightHandler}
         className='cursor-pointer hover:text-violet-800'>
            <FiChevronRight></FiChevronRight></button>
      </div>
      <div>
        <button 
        onClick={surpriseHandler}
         className='bg-violet-500 text-white font-bold px-10 cursor-pointer
       py-2 rounded-md text-lg hover:bg-violet-700 mt-4 transition-all duration-200'>
        Surprise Me</button>
      </div>
    </div>
  )
}

export default Testimonial
