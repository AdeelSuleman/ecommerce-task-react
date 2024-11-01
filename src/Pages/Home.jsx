import Header from '../Components/Header'
import Hero from '../Components/Hero'
import IntroSlider from '../Components/IntroSlider'
import MobileCards from '../Components/MobileCards'
import Navbar from '../Components/Navbar'
import Vector from '../assets/Vector (5).png'
import Vector2 from '../assets/Vector (6).png'
import '../index.css'

const Home = () => {
  return (
    <>
        <Header/>
        <div className='bg-gradient-to-tl from-[#e2f5ff] to-[#ffffff] overflow-hidden mt-[-20px] p-0 rounded-tr-3xl rounded-tl-3xl'>
            <Navbar className='z-30' />
            <Hero/>
            {/* <IntroSlider/> */}
        </div>
        <div className='mt-[-10px] '>
            <img src={Vector} alt='Vector' className='w-full h-[160px] z-30'/>
        </div>
        <div className='p-5 relative  xl:w-[1550px] mx-auto'>
          <h1 className=' relative p-2 text-center text-[48px] poppins-bold text-white mt-[-7rem] z-20'>
          Mobile <span className='text-[#388FCB]'>Stock</span>
          </h1>
          <img src={Vector2} alt='' className=' absolute top-[-98px] left-[590px] opacity-90' />
          <p className='text-[20px] text-center mt-10'>
            We stay upto date with latest technology trends and offer innovative solutions. that help<br/>
            you stay ahead in competetion
          </p>
        </div>
        <div className='pb-10'>
          <MobileCards/>
        </div>
    </>
  )
}

export default Home