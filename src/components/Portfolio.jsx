import React from 'react';
import price from '../assets/portfolio/bitcoin.jpeg';
import spam from '../assets/portfolio/spam.jpg';
import ticket from '../assets/portfolio/ticket.jpg';
import detection from '../assets/portfolio/imaged.jpeg';
import calculator from '../assets/portfolio/calc.jpeg';
import udemy from '../assets/portfolio/udemy.png';
import nptel from '../assets/portfolio/NPTEL.jpeg';
import coursera from '../assets/portfolio/coursera.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      text: 'Bitcoin Price Prediction - Flask, Deep Learning', 
      src: price,
      href: 'https://drive.google.com/drive/folders/1EX-K_1uZupIcVvV94jIfwf5qIkPAn-43?usp=sharing',
    },
    {
      id: 2,
      text: 'Spam Message Detection - Machine Learning, Naive-bayers', 
      src: spam,
      href: 'https://github.com/Jimil1407/spam_detection.git',
    },
    {
      id: 3,
      text: 'Ticket Enquiry System - React, MongoDB, Node.js, Render', 
      src: ticket,
      href: 'https://github.com/Jimil1407/mern_proj.git',
    },
    {
      id: 4,
      text: 'Image Detection Model - Tensorflow, Deep Learning', 
      src: detection,
      href: 'https://github.com/Jimil1407/image_detection.git',
    },
    {
      id: 5,
      text: 'Calculator - React, HTML/CSS, JS', 
      src: calculator,
      href: 'https://github.com/Jimil1407/calculator',
    },
    {
      id: 6,
      text: 'Certficate - Web Development', 
      src: udemy,
      href: 'https://www.linkedin.com/feed/update/urn:li:activity:7056981273428324352/?originTrackingId=%2Fz3YVAwwR4mNtYcWPAl0Tw%3D%3D',
    },
    {
      id: 7,
      text: 'Certficate - Python from NPTEL-IIT Madras', 
      src: nptel,
      href: 'https://drive.google.com/file/d/1AaMLIe0hcdwRiGJcNctJkGMz9Vuegyum/view?usp=sharing',
    },
    {
      id: 8,
      text: 'Certficate - Data Foundations from Google', 
      src: coursera,
      href: 'https://www.linkedin.com/feed/update/urn:li:activity:7015252666234662912/?originTrackingId=hXc%2FDS0qQ6eSxXmKrbx9Og%3D%3D',
    },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to bg-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bol d inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Check out my projects and Certificates</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, text, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <p className="text-l font-bold">{text}</p> 
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
