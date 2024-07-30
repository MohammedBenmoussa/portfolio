import React from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import bmclogo from '../assets/BMC-btn-logo.svg';
  
const ScrollButton = () =>{

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="flex items-end justify-end fixed bottom-0 left-0 mb-4 ml-4 z-11">
    <div>
    <button className='block w-8 h-8 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12' title='défiler vers le haut' >
     
     <FaArrowCircleUp fontSize={31} color="#fff" className="object-cover object-center w-30 h-30 rounded-full bg-[#313131] opacity-70" onClick={scrollToTop} src={bmclogo}/>
    </button>
    </div>
</div>
  );
}
  
export default ScrollButton;