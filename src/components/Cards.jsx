import { data } from "autoprefixer";
import React from "react";
import profile from './../assets/avatar.png';



const Cards = () => {

  return (
    <div className="mx-32 justify-center items-center  bg-white opacity-80 px-10 py-10 rounded-3xl sm:w-2/3 md:w-2/3 lg:w-2/3">
    <div className="text-center mb-14">
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
        Formations
        </p>
    </div>
    <ol class="relative border-l border-gray-200 dark:border-gray-700 ">                  
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full  -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-lg font-normal leading-none text-gray-600 dark:text-gray-500">2020 - 2022</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Diplôme d’ingénieur Généraliste en numérique</h3>
        <h4 class="text-lg font-medium text-gray-900 dark:text-white">Télécom Saint-Étienne</h4>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Programme de double Diplôme avec ENSIAS</p>
    </li>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-lg font-normal leading-none text-gray-600 dark:text-gray-500">2018 - 2020</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Diplôme ingénieur d'état en Ingénierie web</h3>
        <h4 class="text-lg font-medium text-gray-900 dark:text-white">École Nationale Supérieure d'Informatique et d'Analyse des Systèmes</h4>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Programme de double Diplôme avec ENSIAS</p>
    </li>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-lg font-normal leading-none text-gray-600 dark:text-gray-500">2016 - 2018</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Classe préparatoire aux grandes écoles</h3>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Option: Mathématiques-Physique (MP)</p>
    </li>

    <li class="ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-lg font-normal leading-none text-gray-600 dark:text-gray-500">2015 - 2016</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Baccalauréat en sciences mathématiques-A</h3>
        
    </li>
    
</ol>
  
  
    </div>

  );
};

export default Cards;