import React from "react";
import Testimonial from "./components/Testimonial";
import reviews from './data';

const App = () => {
  return (
  <div className='flex flex-col w-[100vw] h-[100vh] 
  justify-center items-center  bg-gray-200'>
    <div className='text-center'>
     <h1 className='text-4xl font-bold'>Our Testimonials</h1>
     
     <div className=' bg-violet-800 h-[4px] w-1/5 mx-auto  mt-4'> </div>
   
     <Testimonial reviews={reviews}></Testimonial>
     </div>
  </div>
  );
};

export default App;
