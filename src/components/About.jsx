import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I'm Jimil Digaswala, a cse undergrad student. Currently, 
                I am pursuing Computer Science with AI and Machine Learning.
                I love to create and design the websites, I'm a learning front-end developer. 
                I use HTML,CSS,Javascript,Tailwind and React to create my webites. 
                I am also well versed with Data Structures and Algorithms.
        </p>

        <br />

        <p className="text-xl">
        Despite being a nerd, I love watching sports especially cricket and football. 
                That is like one of my favourite things to do in between breaks.
                I'm a huge Cristiano and MS Dhoni fan. I personally also love to play sports and keep myself fit.

        </p>
      </div>
    </div>
  );
};

export default About;



