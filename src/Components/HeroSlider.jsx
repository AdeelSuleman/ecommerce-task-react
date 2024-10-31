import { useState, useEffect } from "react";
import mobile from "../assets/Mobile.png";
import tablets from "../assets/Tablets.png";
import laptop from "../assets/laptop.png";

const HeroSlider = () => {
  const images = [tablets, laptop, mobile];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleDotsClick = (index) => {
    if (index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
    }
  };

  // Transition ko khatam karne ke liye effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Is waqt ko image transition duration ke barabar rakhein

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div>
      <div className="flex  justify-between gap-20 z-50 absolute top-[120px] right-20 w-[550px]">
        <div
          className={`relative transition-transform duration-500 ease-in-out ${
            isTransitioning ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
          }`}
        >
          <img
            src={images[currentIndex]}
            alt="Mobile"
            className="w-full h-auto"
          />
        </div>

        <div className="flex flex-col items-center gap-4 z-50 mt-[200px] absolute right-[-20px]">
          {images.map((_, index) => {
            return (
              <button
                key={index}
                onClick={() => handleDotsClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
                  currentIndex === index
                    ? 'bg-gradient-to-t from-[#388FCB] to-[#7CC140] h-8'
                    : 'bg-gray-400'
                }`}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
