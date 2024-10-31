import { useState } from "react";
import mobile from "../assets/Mobile.png";
import tablets from "../assets/Tablets.png";
import laptop from "../assets/laptop.png";

const HeroSlider = () => {
  const images = [tablets, laptop,mobile]
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleDotsClick = (index) => {
    setCurrentIndex(index);
  }
  return (
    <div>
      <div className=" flex justify-between gap-20 z-50 absolute top-72 right-20 w-[550px]">
        <img src={images[currentIndex]} alt="Mobile" className="transition-opacity duration-300 ease-in-out opacity-100 relative" style={{ transition: "opacity 0.5s ease-in-out" }} />
        <div className=" flex flex-col items-center gap-4 z-50 mt-[200px] absolute right-0">
          {images.map((_,index) => {
            return(
              <button 
                key={index} 
                onClick={() => handleDotsClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
                  currentIndex === index
                  ? 'bg-gradient-to-t from-[#388FCB] to-[#7CC140] h-8'
                  : 'bg-gray-400'
                  }`}
                ></button>
            )
          })}
          
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
