import React from "react";



import avatar from '../assets/avatar.png';
import Cards from "./Cards";


const Home = () => (
  <div className="w-full flex md:justify-center  items-center flex-col p-4">
    
    <div className="flex flex-col  md:p-20 py-12 px-4">
     
    
          <div className="text-center items-center">
          <img
            src={avatar}
            className="rounded-3xl w-44 mb-4 mx-auto"
            alt="Profile"
          />
          <h5 className="text-xl text-white font-medium leading-tight mb-2">BENMOUSSA Mohammed</h5>
          <p className="text-gray-300 w-72 text-3xl font-extrabold">Software engineer</p>
        </div>
      
        </div>

        
          <Cards/>
          
          
        





  </div>
  
);

export default Home;