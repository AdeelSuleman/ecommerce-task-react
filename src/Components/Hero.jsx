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
      <div className="flex justify-between p-0 2xl:w-[1550px] lg:w-full  mx-auto ">
        <div className="relative p-0  xl:w-[50%] lg:w-[70%] md:w-[100%] ">
          <img
            src={Topeffect}
            alt=""
            className="absolute top-7 xl:left-[70px] lg:left-[-0.8%] xl:w-[17%] lg:w-[27%] md:w-[20%] topEffect -rotate-45"
          />

          <h1 className="text-[48px] lg:text-[40px] md:text-[28px] leading-[72px] font-[700] text-[#388FCB] mt-[100px] lg:mt-[100px] md:mt-[60px] xl:ml-[150px] lg:ml-[15%] md:ml-[13%] z-50">
            <span className="text-[#333333]">Largest </span>
            <span className="">Wholesalers</span>
            <br />
            {/* <span className='text-[#333333]'>of </span>  */}
            {/* <span className='text-[#388FCB] pl-2 z-20 rect'> {items[currentIndex]}</span> */}
            <img
            src={Rect}
            alt=""
            className="absolute xl:top-[100px] xl:left-[168px] lg:top-[100px] md:top-[70px] md:left-[17%] lg:left-[20%] xl:w-[30%] lg:w-[50%] md:w-[40%] z-[0]"
            />
            <p className="relative text-[#388FCB] lg:mt-0 md:mt-[-20px] z-[10]">
              <span className="text-[#333333]">of </span>
              <span className="z-[9999]"> {items[currentIndex]}</span>
              {/* <span className='text-[#388FCB]'>Mobile Phones</span>
                        <span className='text-[#388FCB]'> Laptops</span>
                        <span className='text-[#388FCB]'> Tablets</span> */}
            </p>
          </h1>
          

          <div className=" ml-[150px] lg:ml-[15%] md:ml-[12%] ">
            <p className="poppins-regular mt-10 md:mt-8 md:text-[13px]">
              Supply that meets Demand. Get the best Wholesale prices of <br className="hidden lg:inline" />
              used and referbished Mobile Stocks.
            </p>
            <button className="text-[18px] md:text-[15px] flex items-center gap-2 mt-6 md:mt-3 text-[#388FCB]">
              Learn More
              <FiArrowRight className="text-[20px]" />
            </button>

            <div className="xl:mt-6 md:mt-4 lg:mt-4 flex items-center gap-4 z-10">
              <div className="border-2 border-[#7CC140] flex items-center gap-2 text-[16px] text-[#888888] p-3 w-fit rounded-3xl">
                <MdOutlineMail />
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={inputValue}
                  onChange={handleChange}
                  className="text-[16px] bg-transparent xl:w-[180px] lg:w-[160px] md:w-[140px] border-0 placeholder:border-0 active:bg-transparent  active:border-0 focus:border-0 outline-none "
                />
              </div>

              <button className="bg-[#7CC140] xl:text-base lg:text-[16px] md:text-[14px] py-3 px-5 border-2 border-transparent flex items-center gap-2 font-semibold text-white rounded-3xl hover:bg-transparent hover:text-[#7CC140] hover:border-2 hover:border-[#7CC140]">
                Subscribe
                <FiArrowRight />
              </button>

              <button className="bg-[#388FCB] xl:text-base lg:text-[16px] md:text-[14px] py-3 px-5 border-2 border-transparent lg:hidden md:hidden xl:inline-flex items-center gap-1 font-semibold text-white rounded-3xl z-10 hover:bg-transparent hover:text-[#388FCB] hover:border-2 hover:border-[#388FCB]">
                <FaArrowDown />
                Stock List
              </button>
            </div>
            <div className="">
            
            <button className="bg-[#388FCB] xl:text-base lg:text-[16px] md:text-[14px] xl:hidden lg:inline-flex md:inline-flex py-3 mt-4 px-5 border-2 border-transparent  items-center gap-1 font-semibold text-white rounded-3xl z-10 hover:bg-transparent hover:text-[#388FCB] hover:border-2 hover:border-[#388FCB]">
                <FaArrowDown />
                Stock List
            </button>
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
                <img src={people} alt="people" className="md:relative" />
                <h1 className="poppins-semibold people lg:relative lg:right-0 md:absolute md:w-full md:right-[-63%] md:z-10">
                400k people Registered
                </h1>
              </div>
            </div>
            </div>
          </div>
          <div className="mt-20 relative ">
            <img src={Rect813} className="xl:w-[50%] lg:w-[60%] md:w-[70%]" />
            <img src={Rect777} className="mt-3 xl:w-[60%] lg:w-[70%] md:w-[80%]" />
            <img
              src={Comp}
              alt=""
              className="mt-[-160px] xl:w-[30%] md:w-[34%]"
            />
          </div>
        </div>

        <div className="p-0 relative ">
        
          <img
            src={SmallBubble}
            alt="buubleM"
            className="absolute BubbleM2 xl:right-[120px] lg:right-[35px]  md:right-[6%] top-[5px] z-10 xl:w-[110.72px] lg:w-[80px] md:w-[70px]"
          />
          <img
            src={SmallBubble}
            alt="buubleM"
            className="absolute BubbleM1 xl:right-[115px] lg:right-[30px] md:right-[6%] top-[0px] z-10 rotate-3 xl:w-[110.72px] lg:w-[80px] md:w-[70px]"
          />
          <img
            src={WhiteBubble}
            alt="WhiteBubble"
            className="Bubble1 relative ml-[14px] mt-[-14px] rounded-full w-[90%] lg:w-[87%] opacity-50 "
          />
          <img
            src={Lbubble}
            alt="Bubble"
            className=" Bubble rounded-full absolute xl:top-[-100px] lg:top-[-90px] md:top-[-70px] right-0 xl:scale-[2] lg:-scale-[5]"
          />
          
          <div className="relative">
            <img
              src={Mudium2}
              alt="buubleM"
              className="absolute xl:bottom-[7rem] lg:bottom-[40px] md:bottom-[65px] xl:left-[160px] lg:left-[80px] md:left-[16%] BubbleM2 opacity-50  xl:w-[433.38px] lg:w-[50%] md:w-[42%]"
            />
            <img
              src={Mudium2}
              alt="buubleM"
                className="absolute xl:bottom-[6rem] lg:bottom-[40px] md:bottom-[65px] xl:left-[165px] lg:left-[80px] md:left-[16%] BubbleM1  opacity-50 xl:w-[433.38px] lg:w-[50%] md:w-[42%]"
            />
          </div>
          <HeroSlider/>
        </div>
      </div>
      <div className=" py-3 relative 2xl:w-[1550px]  mx-auto">

      <IntroSlider/>
      </div>
      {/* <div className=''>
              <img src={Vector} alt='Vector' className='w-full'/>
            </div> */}
    </>
  );
};

export default Hero;
