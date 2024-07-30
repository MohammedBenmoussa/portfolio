import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import { data } from './mockData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
const Portfolio = () => {

  
    const slideLeft = () => {
      var slider = document.getElementById('slider');
      slider.scrollLeft = slider.scrollLeft - 500;
    };
  
    const slideRight = () => {
      var slider = document.getElementById('slider');
      slider.scrollLeft = slider.scrollLeft + 500;
    };
  

  return (
    <div
      name="portfolio"
      className="w-2/3 mx-auto text-center  bg-white opacity-80 text-black   rounded-xl"
    >
      <div className="text-center mt-8 pt-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Projets
          </p>
          <p className="py-6 px-3">Découvrez certains de mes travaux ici</p>
        </div>
      <div className='relative flex items-center'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
        <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar'
        >
          
            <div
              class="w-2/3 h-full my-4 md:w-1/3 mr-8 md:pb-4 border rounded-lg inline-block p-2 cursor-pointer  ease-in-out duration-300 bg-gray-600 bg-opacity-20"
            >
              
                <div class="aspect-w-16 aspect-h-9">
                  <img
                    class="object-cover shadow-md hover:shadow-xl rounded-lg"
                    src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                    alt=""
                  />
                </div>
                <div class="px-4 py-2  h-80">
                  <div class="text-lg leading-6 font-medium space-y-1 flex  h-20 ">
                    <h3 class="font-bold text-gray-800 text-3xl whitespace-pre-line  m-auto">
                      title
                    </h3>
                  </div>
                  <div class="text-lg flex h-48 overflow-hidden text-ellipsis whitespace-nowrap w-auto left-0 right-0">
                    <p class="whitespace-pre-line text-ellipsis overflow-hidden m-auto ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad recusandae, consequatur corrupti vel quisquam id itaque
                      nam
                    </p>
                    </div>
                    <a href="#" class="space-y-4 ">
                    <div>
                    <p class="font-medium text-sm text-white mt-2 cursor-pointer bg-gray-400  rounded-md">
                      Voir le code
                    </p>
                  </div>
                  </a>
                </div>
              
            </div>
            


            <div
              class="w-2/3 h-full my-4 md:w-1/3 mr-8 md:pb-4 border rounded-lg inline-block p-2 cursor-pointer  ease-in-out duration-300 bg-gray-600 bg-opacity-20"
            >
              
                <div class="aspect-w-16 aspect-h-9">
                  <img
                    class="object-cover shadow-md hover:shadow-xl rounded-lg"
                    src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                    alt=""
                  />
                </div>
                <div class="px-4 py-2  h-80">
                  <div class="text-lg leading-6 font-medium space-y-1 flex  h-20 ">
                    <h3 class="font-bold text-gray-800 text-3xl whitespace-pre-line  m-auto">
                      title
                    </h3>
                  </div>
                  <div class="text-lg flex h-48 overflow-hidden text-ellipsis whitespace-nowrap w-auto left-0 right-0">
                    <p class="whitespace-pre-line text-ellipsis overflow-hidden m-auto ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad recusandae, consequatur corrupti vel quisquam id itaque
                      nam
                    </p>
                    </div>
                    <a href="#" class="space-y-4 ">
                    <div>
                    <p class="font-medium text-sm text-white mt-2 cursor-pointer bg-gray-400  rounded-md">
                      Voir le code
                    </p>
                  </div>
                  </a>
                </div>
              
            </div>



            <div
              class="w-2/3 h-full my-4 md:w-1/3 mr-8 md:pb-4 border rounded-lg inline-block p-2 cursor-pointer  ease-in-out duration-300 bg-gray-600 bg-opacity-20"
            >
              
                <div class="aspect-w-16 aspect-h-9">
                  <img
                    class="object-cover shadow-md hover:shadow-xl rounded-lg"
                    src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                    alt=""
                  />
                </div>
                <div class="px-4 py-2  h-80">
                  <div class="text-lg leading-6 font-medium space-y-1 flex  h-20 ">
                    <h3 class="font-bold text-gray-800 text-3xl whitespace-pre-line  m-auto">
                      title
                    </h3>
                  </div>
                  <div class="text-lg flex h-48 overflow-hidden text-ellipsis whitespace-nowrap w-auto left-0 right-0">
                    <p class="whitespace-pre-line text-ellipsis overflow-hidden m-auto ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad recusandae, consequatur corrupti vel quisquam id itaque
                      nam
                    </p>
                    </div>
                    <a href="#" class="space-y-4 ">
                    <div>
                    <p class="font-medium text-sm text-white mt-2 cursor-pointer bg-gray-400  rounded-md">
                      Voir le code
                    </p>
                  </div>
                  </a>
                </div>
              
            </div>



            <div
              class="w-2/3 h-full my-4 md:w-1/3 mr-8 md:pb-4 border rounded-lg inline-block p-2 cursor-pointer  ease-in-out duration-300 bg-gray-600 bg-opacity-20"
            >
              
                <div class="aspect-w-16 aspect-h-9">
                  <img
                    class="object-cover shadow-md hover:shadow-xl rounded-lg"
                    src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                    alt=""
                  />
                </div>
                <div class="px-4 py-2  h-80">
                  <div class="text-lg leading-6 font-medium space-y-1 flex  h-20 ">
                    <h3 class="font-bold text-gray-800 text-3xl whitespace-pre-line  m-auto">
                      title
                    </h3>
                  </div>
                  <div class="text-lg flex h-48 overflow-hidden text-ellipsis whitespace-nowrap w-auto left-0 right-0">
                    <p class="whitespace-pre-line text-ellipsis overflow-hidden m-auto ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad recusandae, consequatur corrupti vel quisquam id itaque
                      nam
                    </p>
                    </div>
                    <a href="#" class="space-y-4 ">
                    <div>
                    <p class="font-medium text-sm text-white mt-2 cursor-pointer bg-gray-400  rounded-md">
                      Voir le code
                    </p>
                  </div>
                  </a>
                </div>
              
            </div>
      
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
      </div>
    </div>
  );
};

export default Portfolio;
