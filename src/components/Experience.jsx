import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import kafka from "../assets/kafka.png";
import mysql from "../assets/mysql.png";
import hadoop from "../assets/hadoop.png";
import redis from "../assets/redis.png";
import neo4j from "../assets/neo4j.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import spring from "../assets/spring.png";
import vuejs from "../assets/vuejs.png";
import angular from "../assets/angular.png";
import java from "../assets/java.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: java,
      title: "JAVA",
      style: "shadow-amber-500",
    },
    {
      id: 2,
      src: spring,
      title: "Spring",
      style: "shadow-lime-500",
    },
    {
      id: 3,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: reactImage,
      title: "React",
      style: "shadow-cyan-500",
    },
    {
      id: 7,
      src: angular,
      title: "Angular",
      style: "shadow-red-500",
    },
    {
      id: 8,
      src: vuejs,
      title: "Vue.js",
      style: "shadow-emerald-500",
    },
    {
      id: 9,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 10,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 11,
      src: mysql,
      title: "MySQL",
      style: "shadow-cyan-500",
    },
    {
      id: 12,
      src: hadoop,
      title: "Hadoop",
      style: "shadow-yellow-400",
    },
    {
      id: 13,
      src: kafka,
      title: "Kafka",
      style: "shadow-gray-500",
    },
    
  ];

  return (
    <div
      name="experience"
      className="w-full h-auto"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-auto text-white">
        <div className="text-center">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
          Compétences
          </p>
          <p className="py-6">Voici les technologies avec lesquelles j'ai travaillé</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-8 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
