import React, { useState, useEffect } from 'react';
import prodigy1 from '../assets/prodigy.png';
import prodigytop from '../assets/prodigytop.png';
import prodigylogo from '../assets/prodigylogo.png';
import prodigyfoot from '../assets/prodigyfoot.png';
import logo from '../assets/logo.png';
import vid from '../assets/prodigy-vid.png';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6';
import { FaPlay } from 'react-icons/fa';
import VideoPlayer from './VideoPlayer';
import prodigypartner from '../assets/prodigypartner.png';

function Prodigy() {
  const [open, setOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);



  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : prev - 1)); 
  };

  return (
    <div className='w-full my-4 relative h-screen '>
      <div className="flex overflow-x-auto hide-scrollbar h-full w-full">
        <div
          style={{ backgroundImage: `url(${prodigy1})` }}
          className={`relative pb-15 pt-4 min-w-full  h-full transition-transform ${
            currentSlide === 0 ? 'block' : 'hidden'
          }`}
        >
          <div className="flex justify-center absolute top-10 left-1/2 transform -translate-x-1/2">
            <img src={logo} alt="Logo" />
          </div>
          <div className="my-10 flex justify-center">
            <img src={prodigylogo} alt="Prodigy Logo" />
          </div>
          <div className="flex flex-col md:items-center gap-4">
            <p className="text-[#51b8ff] font-semibold text-lg text-center max-w-xl">
              The Code Ninjas Prodigy Program was designed to provide our ninjas
              with a unique opportunity that cannot be found elsewhere.
            </p>
            <p className="text-center text-white font-semibold max-w-xl">
              It offers them the chance to interact with leaders from the world's
              largest technology and gaming companies, visit some of the most
              exciting headquarters worldwide, and explore various career paths that
              coding can lead to.
            </p>
            <p className="text-center text-white font-semibold max-w-xl">
              Click the arrows to check out the amazing partnerships we've had so far.
            </p>
          </div>
          <div className="w-full absolute top-0 left-0 right-0">
            <img src={prodigytop} alt="Prodigy Top" />
          </div>
          <div className="w-full absolute bottom-0 left-0 right-0">
            <img src={prodigyfoot} alt="Prodigy Footer" />
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${prodigy1})` }}
          className={`relative pb-15 pt-4 h-[105%] md:h-full  min-w-full transition-transform overflow-y-hidden${
            currentSlide === 1 ? 'block' : 'hidden'
          }`}
        >
          <div className="my-6 flex flex-col justify-center items-center">
            <img src={prodigylogo} alt="Prodigy Logo" />
            <p className="text-white text-2xl">IN PARTNERSHIP WITH</p>
          </div>
          <div className="md:flex  gap-3">
            <div className="w-full md:w-1/2 relative z-10">
              <img src={vid} alt="Video Thumbnail" className="md:px-4 mx-auto  md:mx-0 h-80" />
              <FaPlay
                onClick={() => setOpen(true)}
                className="absolute top-1/2 left-36 transform -translate-y-1/2 text-white text-4xl bg-green-400 px-8 hover:bg-[#0dcaf0] cursor-pointer rounded-full h-20 w-20 z-10"
              />
            </div>
            {open && (
              <VideoPlayer setOpen={setOpen} link="https://youtu.be/iXd9qOUBo54?si=WdX2ouklQyCM_Qb1" />
            )}
            <div className="w-full md:w-1/2 flex flex-col gap-2 px-4">
              <img src={prodigypartner} alt="Prodigy Partner" className="h-10 w-fit" />
              <p className="text-center text-white font-semibold max-w-xl">
                Winning Ninjas had the extraordinary chance to visit Microsoft's
                Headquarters in Seattle, WA! During their stay, our Ninjas got to
                visit Microsoft's Garage, a hub of innovation where tech professionals
                collaborate on cutting-edge projects.
              </p>
              <p className="text-center text-white font-semibold max-w-xl">
                They also got the amazing opportunity to meet with both the Microsoft
                Minecraft team and the Microsoft MakeCode team, as well as engage in
                conversations with other esteemed teams such as XBOX, Bing, and AI.
              </p>
              <p className="text-[#51b8ff] font-semibold text-lg text-center max-w-xl">
                Click the video to check out the winners for this program!
              </p>
            </div>
          </div>
          <div className="w-full absolute top-0 left-0 right-0">
            <img src={prodigytop} alt="Prodigy Top" />
          </div>
          <div className="w-full absolute bottom-0 left-0 right-0">
            <img src={prodigyfoot} alt="Prodigy Footer" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between space-x-2 bg-white p-2 rounded-full w-fit gap-4 shadow-md absolute -bottom-7 left-1/2 transform -translate-x-1/2">
        <button onClick={handlePrevSlide} className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full cursor-pointer">
          <FaChevronLeft size={10} />
        </button>
        <div className="flex space-x-2">
          <span
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === 0 ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          ></span>
          <span
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === 1 ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          ></span>
        </div>
        <button onClick={handleNextSlide} className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full cursor-pointer">
          <FaChevronRight size={10} />
        </button>
      </div>
    </div>
  );
}

export default Prodigy;
