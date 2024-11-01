import mob from '../assets/Mob.png'
import watch from '../assets/watch.png'
import headphone from '../assets/headphone.png'
import { useEffect, useState } from 'react'



const IntroSlider = () => {

    const Images =  [mob, watch, headphone, mob, watch, headphone, mob, watch, headphone, mob, watch, headphone , mob, watch, headphone , mob, watch, headphone , mob, watch, headphone, mob, watch, headphone, mob, watch, headphone]

    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3000 ms ke delay ke sath (3 seconds)

    return () => clearInterval(interval);
  }, [Images.length]);

  return (
    <div className="overflow-hidden   w-full absolute xl:top-[-180px] lg:top-[-100px] md:top-[-70px]">
      
      <div
        className="flex gap-5 "
        style={{
          animation: "scroll 180s linear infinite",
          display: "flex",
        }}
      >
        {Images.concat(Images).map((img, index) => (
          <div key={index} className="  p-2 flex-shrink-0">
            <img src={img} alt={`image-${index}`} className="" />
          </div>
        ))}
      </div>

      {/* Inline keyframes CSS */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  )
}

export default IntroSlider;