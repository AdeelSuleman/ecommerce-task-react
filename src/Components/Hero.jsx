import "../index.css";
import Lbubble from "../assets/LargeBubble.png";
import WhiteBubble from "../assets/WhiteBubble.png";
import Mudium2 from "../assets/Medium1.png";
import SmallBubble from "../assets/SmallBubble.png";
import Comp from "../assets/Comp.png";
import { useEffect, useState } from "react";
import Topeffect from "../assets/TopEffects.png";
import Rect from "../assets/Rectangle.png";
import { FiArrowRight } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import insta from '../assets/insta.png'
import FaceBook from '../assets/facebook.png'
import LinkedIn from '../assets/LinkedIn.png'
import X from '../assets/X.png'
import people from '../assets/people.png'
import Rect777 from '../assets/Rect777.png'
import Rect813 from '../assets/Rect813.png'
import HeroSlider from "./HeroSlider";
import IntroSlider from "./IntroSlider";
// import mobile from '../assets/Mobile.png'


// const Slider = () => {
//   return(
//     <>
//       <div className="bg-pink-600 p-5 flex z-50">
//         <img src={mobile} alt="Mobile" className=""/>
//         <div className="bg-orange-600 z-50">
//           <button className="bg-gray-400 w-5 h-5 rounded-full "></button>
//         </div>
//       </div>
//     </>
//   )
// }


const Hero = () => {
  const items = ["Mobile Phones", "Laptops", "Tablets"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="flex justify-between p-0">
        <div className=" relative p-0">
          <img
            src={Topeffect}
            alt=""
            className="absolute top-7 left-[70px] topEffect -rotate-45"
          />

          <h1 className="text-[48px] leading-[72px] font-[700] text-[#388FCB] mt-[100px] ml-[150px] z-50">
            <span className="text-[#333333]">Largest </span>
            <span className="">Wholesalers</span>
            <br />
            {/* <span className='text-[#333333]'>of </span>  */}
            {/* <span className='text-[#388FCB] pl-2 z-20 rect'> {items[currentIndex]}</span> */}
            <img
            src={Rect}
            alt=""
            className="absolute top-[100px] left-[200px] z-[0]"
            />
            <p className="relative text-[#388FCB] z-[10]">
              <span className="text-[#333333]">of </span>
              <span className="z-[9999]"> {items[currentIndex]}</span>
              {/* <span className='text-[#388FCB]'>Mobile Phones</span>
                        <span className='text-[#388FCB]'> Laptops</span>
                        <span className='text-[#388FCB]'> Tablets</span> */}
            </p>
          </h1>
          

          <div className=" ml-[150px]">
            <p className="poppins-regular mt-10 ">
              Supply that meets Demand. Get the best Wholesale prices of <br />
              used and referbished Mobile Stocks.
            </p>
            <button className="text-[18px] flex items-center gap-2 mt-6 text-[#388FCB]">
              Learn More
              <FiArrowRight className="text-[20px]" />
            </button>

            <div className="mt-6 flex items-center gap-4 z-10">
              <div className="border-2 border-[#7CC140] flex items-center gap-2 text-[16px] text-[#888888] p-3 w-fit rounded-3xl">
                <MdOutlineMail />
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={inputValue}
                  onChange={handleChange}
                  className="text-[16px] bg-transparent border-0 placeholder:border-0 active:border-0 focus:border-0 outline-none "
                />
              </div>

              <button className="bg-[#7CC140] py-3 px-5 border-2 border-transparent flex items-center gap-2 font-semibold text-white rounded-3xl hover:bg-transparent hover:text-[#7CC140] hover:border-2 hover:border-[#7CC140]">
                Subscribe
                <FiArrowRight />
              </button>

              <button className="bg-[#388FCB] py-3 px-5 border-2 border-transparent flex items-center gap-1 font-semibold text-white rounded-3xl z-10 hover:bg-transparent hover:text-[#388FCB] hover:border-2 hover:border-[#388FCB]">
                <FaArrowDown />
                Stock List
              </button>
            </div>
            <div className="mt-8 gap-7 flex items-center ">
              <div className='flex items-center gap-3'>
                <Link to=''>
                  <img src={insta} alt="instagram" className=""/>
                </Link>
                <Link to=''>
                  <img src={FaceBook} alt="FaceBook" className=""/>
                </Link>
                <Link to=''>
                  <img src={LinkedIn} alt="LinkedIn" className=""/>
                </Link>
                <Link to=''>
                  <img src={X} alt="X" className=""/>
                </Link>
              </div>
              <div className='flex items-center gap-2'>
                <img src={people} alt="people" className="" />
                <h1 className="poppins-semibold people">
                400k people Registered
                </h1>
              </div>
            </div>
          </div>
          <div className="mt-20 relative">
            <img src={Rect813} className="" />
            <img src={Rect777} className="mt-3" />
            <img
              src={Comp}
              alt=""
              className="mt-[-160px]"
            />
          </div>
        </div>

        <div className="p-0">
        
          <img
            src={SmallBubble}
            alt="buubleM"
            className="absolute BubbleM2 right-[120px] top-[200px] z-10"
          />
          <img
            src={SmallBubble}
            alt="buubleM"
            className="absolute BubbleM1 right-[115px] top-[195px] z-10 rotate-6"
          />
          <img
            src={WhiteBubble}
            alt="WhiteBubble"
            className="Bubble1 relative ml-[14px] mt-[-14px] rounded-full w-[95%] opacity-50"
          />
          <img
            src={Lbubble}
            alt="Bubble"
            className=" Bubble rounded-full absolute top-[73px] right-0 "
          />
          
          <div className="relative">
            <img
              src={Mudium2}
              alt="buubleM"
              className="absolute bottom-[12rem] left-40 BubbleM2 opacity-50"
            />
            <img
              src={Mudium2}
              alt="buubleM"
              className="absolute bottom-48 left-36 BubbleM1  opacity-50"
            />
          </div>
          <HeroSlider/>
        </div>
      </div>
      <IntroSlider/>
      {/* <div className=''>
              <img src={Vector} alt='Vector' className='w-full'/>
            </div> */}
    </>
  );
};

export default Hero;
