import React from "react";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import rest from "../assets/rest.png";
import node from "../assets/node.png";
import ml from "../assets/tensorflow.png";


const Experience = () => {
  const techs = [
    {
      id: 1,
      src: rest,
      title: "Rest APIs",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "HTML & CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    
    {
      id: 4,
      src: node,
      title: "Node.js",
      style: "shadow-green-400",
    },
    {
      id: 5,
      src: react,
      title: "React",
      style: "shadow-cyan-500",
    },
    {
      id: 6,
      src: ml,
      title: "Machine Learning",
      style: "shadow-orange-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I am well-versed with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
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
