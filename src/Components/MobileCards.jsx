import { useState } from 'react';
import '../index.css';
import iphone from '../assets/iphone.png';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const MobileCards = () => {
  const products = [
    {
      img: iphone,
      title: 'Iphone 14 Pro Max',
      discrp: 'Apple iPhone 14 Pro 512GB Gold (MQ233)',
    },
    {
      img: iphone,
      title: 'Iphone 14 Pro Max',
      discrp: 'Apple iPhone 14 Pro 512GB Gold (MQ233)',
    },
    {
      img: iphone,
      title: 'Iphone 14 Pro Max',
      discrp: 'Apple iPhone 14 Pro 512GB Gold (MQ233)',
    },
    {
      img: iphone,
      title: 'Iphone 14 Pro Max',
      discrp: 'Apple iPhone 14 Pro 512GB Gold (MQ233)',
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div className="flex items-center gap-5 p-1 justify-center mt-10">
        <div key={currentIndex} className="gradient-border w-fit p-2 transition-transform duration-500 ease-in-out">
          <div className="gradient-border-inner">
            <img src={products[currentIndex].img} alt="" className="mx-auto" />
            <h2 className="text-[20px] poppins-regular text-center mt-6">{products[currentIndex].title}</h2>
            <p className="text-[12px] poppins-regular text-[#888888] text-center mt-2">
              {products[currentIndex].discrp}
            </p>
          </div>
        </div>
      </div>

      <div className="p-2 flex items-center justify-center mt-8 w-[20%] mx-auto gap-5">
        <button onClick={handleBack} className="border-2 border-[#7CC140] text-[#7CC140] p-2 rounded-full">
          <IoIosArrowBack />
        </button>

        <div className="flex gap-2 items-center">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-gradient-to-t from-[#388FCB] to-[#7CC140] w-8'
                  : 'bg-gray-400'
              }`}
            ></button>
          ))}
        </div>

        <button onClick={handleNext} className="border-2 border-[#7CC140] text-[#7CC140] p-2 rounded-full">
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default MobileCards;
