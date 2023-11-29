import React from 'react';
import price from '../assets/portfolio/bitcoin.jpeg';
import spam from '../assets/portfolio/spam.jpg';
import ticket from '../assets/portfolio/ticket.jpg';
import detection from '../assets/portfolio/imaged.jpeg';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      text: 'Bitcoin Price Prediction', 
      src: price,
      href: 'https://drive.google.com/drive/folders/1EX-K_1uZupIcVvV94jIfwf5qIkPAn-43?usp=sharing',
    },
    {
      id: 2,
      text: 'Spam Message Detection', 
      src: spam,
      href: 'https://github.com/Jimil1407/spam_detection.git',
    },
    {
      id: 3,
      text: 'Ticket Enquiry System', 
      src: ticket,
      href: 'https://github.com/Jimil1407/mern_proj.git',
    },
    {
      id: 4,
      text: 'Image Detection Model', 
      src: detection,
      href: 'https://github.com/Jimil1407/image_detection.git',
    },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to bg-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bol d inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Check out my projects and Certificates</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, text, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <p className="text-xl font-bold">{text}</p> {/* Display text field here */}
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
              <div className="flex items-center justify-center">
                <a href={href}>
                  <button className="w-1/2 px-6 py-3 m-4 duration:200 hover:scale-105">Code</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
