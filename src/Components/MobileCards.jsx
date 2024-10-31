import '../index.css';
import iphone from '../assets/iphone.png';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';

const MobileCards = () => {
  const product = [
    { img: iphone, title: 'Iphone 14 Pro Max', discrp: 'Apple iPhone 14 Pro 512GB Gold (MQ233)' },
    { img: iphone, title: 'Iphone 14 Pro Max', discrp: 'Apple iPhone 14 Pro 512GB Gold (MQ233)' },
    { img: iphone, title: 'Iphone 14 Pro Max', discrp: 'Apple iPhone 14 Pro 512GB Gold (MQ233)' },
    { img: iphone, title: 'Iphone 14 Pro Max', discrp: 'Apple iPhone 14 Pro 512GB Gold (MQ233)' },
    { img: iphone, title: 'Iphone 14 Pro Max', discrp: 'Apple iPhone 14 Pro 512GB Gold (MQ233)' },
    { img: iphone, title: 'Iphone 14 Pro Max', discrp: 'Apple iPhone 14 Pro 512GB Gold (MQ233)' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 4;

  // Handle Next Button
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleCards < product.length ? prevIndex + 1 : prevIndex
    );
  };

  // Handle Previous Button
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <div className=''>
      <div className='flex items-center gap-5 p-1 justify-center mt-10'>
        {product.slice(currentIndex, currentIndex + visibleCards).map((por, index) => {
          return (
            <div key={index} className='gradient-border w-fit p-2'>
              <div className='gradient-border-inner'>
                <img src={por.img} alt='' className='mx-auto' />
                <h2 className='text-[20px] poppins-regular text-center mt-6'>{por.title}</h2>
                <p className='text-[12px] poppins-regular text-[#888888] text-center mt-2'>{por.discrp}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className='p-2 flex items-center justify-center mt-8 w-[20%] mx-auto gap-5'>
        <button onClick={handlePrevious} className='border-2 border-[#7CC140] text-[#7CC140] p-2 rounded-full'>
          <IoIosArrowBack />
        </button>

        <div className='flex gap-2 items-center'>
          {Array.from({ length: Math.ceil(product.length / visibleCards) }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * visibleCards)}
              className={`transition-all w-3 h-3 rounded-full ${
                currentIndex >= index * visibleCards && currentIndex < (index + 1) * visibleCards
                  ? 'bg-gradient-to-t from-[#388FCB] to-[#7CC140] w-8'
                  : 'bg-gray-400'
              }`}
            ></button>
          ))}
        </div>

        <button onClick={handleNext} className='border-2 border-[#7CC140] text-[#7CC140] p-2 rounded-full'>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default MobileCards;
