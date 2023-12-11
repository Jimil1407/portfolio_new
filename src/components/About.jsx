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
        I am Jimil Digaswala, a dedicated Computer Science and Engineering undergraduate student with a specialization in Artificial Intelligence and Machine Learning. 
          My academic pursuits align with my passion for technology, particularly in the realm of web development.
          In addition to my web development skills, I have a solid foundation in Data Structures and Algorithms. This knowledge enhances my problem-solving capabilities, 
          ensuring that the solutions I design are not only visually engaging but also robust and efficient.
        </p>

        <br />

        <p className="text-xl">
        In addition to my proficiency in web development, I bring hands-on experience in building machine-learning models. 
          Having successfully developed and implemented machine learning solutions, I am adept at leveraging data to derive valuable 
          insights and enhance the functionality of digital applications.

          <br />

        Currently, I am honing my skills in web development, continually exploring emerging technologies, and staying abreast of industry trends.
          My experience in machine learning serves as a valuable asset, allowing me to approach projects with a holistic
          perspective and an understanding of both front-end design and intelligent data-driven solutions.

        </p>
      </div>
    </div>
  );
};

export default About;



