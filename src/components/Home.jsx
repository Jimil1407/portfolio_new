import React from "react";
import { useSpring, animated } from "react-spring";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import HeroImage from "../assets/final.png";

const Home = () => {
  const textSpring = useSpring({
    opacity: 1,
    transform: "translateX(0%) rotate(0deg)",
    from: { opacity: 0, transform: "translateX(50%) rotate(45deg)" },
    delay: 1000,
  });

  const imageSpring = useSpring({
    opacity: 1,
    transform: "translateX(10%) rotate(0deg)", // Adjust the translateX value
    from: { opacity: 0, transform: "translateX(50%) rotate(45deg)" },
    delay: 1000,
  });

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex items-center justify-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row p-8"> {/* Added vertical padding */}
        <div className="flex flex-col justify-center h-full w-full md:w-1/2">
          <animated.h2
            className="text-4xl sm:text-7xl font-bold text-white"
            style={textSpring}
          >
            Machine Learning & Full Stack Developer
          </animated.h2>
          <animated.p
            className="text-gray-500 py-4 max-w-md"
            style={textSpring}
          >
            I'm a Computer Science undergrad passionate about AI and Machine Learning. With hands-on experience in building Machine Learning Models, I also enjoy creating user-friendly web applications using HTML, JavaScript, React, and Tailwind. Let's connect and explore opportunities!
          </animated.p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <animated.div style={imageSpring} className="w-full md:w-1/2">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-full"
          />
        </animated.div>
      </div>
    </div>
  );
};

export default Home;
