import React from 'react';

function VideoPlayer({ setOpen,link}) {
  return (
    <div className='w-full h-screen bg-black/75  fixed top-0 left-0 z-20'>
      <div className='px-20 py-28 h-full '>
        <div className='w-full h-full'>
          <div className='border-8 border-white relative h-full'>
            <iframe
              src={link}
              
             
              className='w-full h-full'
              title="Video Player"
            ></iframe>
          </div>
          <button
            onClick={() => setOpen(false)}  
            className='text-2xl font-bold bg-[#0db88f] cursor-pointer px-4 py-2 text-white rounded-lg absolute top-10 right-4'>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
