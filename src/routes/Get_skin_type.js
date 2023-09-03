import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { useState } from 'react';
import axios from 'axios';

const GetSkinType = () => {
  const [selectedSkinType, setSelectedSkinType] = useState(null);

  return (
    <div className="h-screen">
      <div className="w-360px max-w-lg p-2">
        {/* Header */}
        <header className="mb-10 text-center flex items-center justify-center p-5">
          <Link to="/" className="pl-6 absolute left-0 text-2xl">
            <IoIosArrowBack className="mr-2" />
          </Link>
          <div className="flex">
            <h1 className="text-xl font-bold">Chemistr</h1>
            <h1 className="text-xl font-bold text-primary">AI</h1>
          </div>
        </header>

        {/* get_skin_type */}
        <div className="flex-col pl-6 pr-4">
          <div className="flex-col mb-12">
            <div className="flex">
              <h1 className="text-primary font-bold text-xl">S</h1>
              <h1 className="font-bold text-xl">elect</h1>
            </div>
            <h1 className="font-bold text-xl">your skin type</h1>
          </div>
          <div className="flex-col text mb-7">
            <button
              className={`${
                selectedSkinType === 'Dry' ? 'bg-primary text-black' : 'bg-gray_1'
              } rounded-xl w-full mb-3 py-3 px-5 text-left font-bold focus:bg-green_2 hover:bg-green_2`}
              onClick={() => setSelectedSkinType('Dry')}
            >
              Dry
            </button>
            <button
              className={`${
                selectedSkinType === 'Oily' ? 'bg-primary text-black' : 'bg-gray_1'
              } rounded-xl w-full mb-3 py-3 px-5 text-left font-bold focus:bg-green_2 hover:bg-green_2`}
              onClick={() => setSelectedSkinType('Oily')}
            >
              Oily
            </button>
            <button
              className={`${
                selectedSkinType === 'Combination' ? 'bg-primary text-black' : 'bg-gray_1'
              } rounded-xl w-full mb-3 py-3 px-5 text-left font-bold focus:bg-green_2 hover:bg-green_2`}
              onClick={() => setSelectedSkinType('Combination')}
            >
              Combination
            </button>
            <button
              className={`${
                selectedSkinType === 'Dry and Oily' ? 'bg-primary text-black' : 'bg-gray_1'
              } rounded-xl w-full mb-3 py-3 px-5 text-left font-bold focus:bg-green_2 hover:bg-green_2`}
              onClick={() => setSelectedSkinType('Dry and Oily')}
            >
              Dry and Oily
            </button>
            <button
              className='bg-gray_1 rounded-xl w-full py-3 px-5 text-sm'>+ Learn more about skin type</button>
          </div>
        </div>
        {/* 버튼 */}
        {selectedSkinType && (
          <div className="text-center items-center flex-col justify-center p-6">
            <Link to={`/get_picture?skinType=${selectedSkinType}`}>
              <button className="w-full bg-primary text-black py-2 px-4 text-lg rounded-xl focus:bg-green_2 hover:bg-light_green">
                Select a skin type
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetSkinType;
