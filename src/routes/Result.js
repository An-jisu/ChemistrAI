import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { useEffect, useRef, useState } from 'react';
import { BiCheck } from 'react-icons/bi';
import { BsExclamationLg } from 'react-icons/bs';

const Result = ({answer}) => {

  return (
    <div className="h-screen">
      <div className="w-360px max-w-lg p-2">
        {/* Header */}
        <header className="mb-10 text-center flex items-center justify-center p-5">
          <div className="flex">
            <h1 className="text-xl font-bold">Chemistr</h1>
            <h1 className="text-xl font-bold text-primary">AI</h1>
          </div>
        </header>

        <div className='flex-col text-center items-center justify-center'>
          <div className='flex text-center items-center justify-center'>
            {answer ? (
                <div className='flex-col text-center items-center justify-center'>
                    <div className='flex text-center items-center justify-center'>
                        <h1 className='mr-2 font-bold text-2xl'>It fits</h1>
                        <h1 className='text-primary font-bold text-2xl'>well</h1>
                    </div>
                    <h1 className='mr-1 font-bold text-2xl mb-20'>with your skin!</h1>
                </div>
            ) : (
                <div className='flex-col text-center items-center justify-center'>
                    <div className='flex text-center items-center justify-center'>
                        <h1 className='mr-2 font-bold text-2xl mr-1'>It may</h1>
                        <h1 className='mr-1 font-bold text-2xl text-red_2'>not be suitable</h1>
                    </div>
                    <h1 className='mr-1 font-bold text-2xl mb-20'>with your skin!</h1>
                </div>
            )}
          </div>
        </div>

        {/* Conditional rendering based on the 'answer' value */}
        {answer ? (
          <div className="w-48 h-48 bg-green_3 rounded-full mx-auto relative mb-20">
            <div className="w-36 h-36 bg-primary rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <BiCheck className='text-8xl text-white' />
            </div>
          </div>
        ) : (
          <div className="w-48 h-48 bg-red_1 rounded-full mx-auto relative mb-20">
            {/* Blue Circle */}
            <div className="w-36 h-36 bg-red_2 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              {/* Render a different icon or content for false */}
              <BsExclamationLg className='text-8xl text-white' />
            </div>
          </div>
        )}

        {/* 버튼 */}
        <div className="text-center items-center flex-col justify-center p-6">
          <Link to="/Loading">
            <button className={`w-full ${answer ? 'bg-primary text-black hover:bg-light_green' : 'bg-red_2 text-white hover:bg-red_1'} py-2 px-4 text-lg rounded-xl focus:bg-green_2`}>
              Check ingredients
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Result;
