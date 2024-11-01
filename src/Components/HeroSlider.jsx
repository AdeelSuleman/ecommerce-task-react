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
      <div className="flex justify-between gap-20 z-50 absolute xl:top-[120px] lg:top-[70px] md:top-[70px] xl:right-20 lg:right-[50px] md:right-[15%] xl:w-[530px] lg:w-[370px] md:w-[260px] md:gap-5">
        <div
          className={`relative transition-transform duration-500 ease-in-out ${
            isTransitioning ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
          }`}
        >
          <img
            src={images[currentIndex]}
            alt="Mobile"
            className="xl:w-full xl:h-auto lg:w-[70%] md:w-[50%]"
          />
        </div>

        <div className="flex flex-col items-center gap-4 z-50 mt-[200px] absolute right-[-20px]">
          {images.map((_, index) => {
            return (
              <button
                key={index}
                onClick={() => handleDotsClick(index)}
                className={`xl:w-3 xl:h-3 lg:w-2 lg:h-2 md:w-2 md:h-2 rounded-full transition-all duration-300 ease-in-out ${
                  currentIndex === index
                    ? 'bg-gradient-to-t from-[#388FCB] to-[#7CC140] xl:h-8 lg:h-7 md:h-7'
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
