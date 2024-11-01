import Header from '../Components/Header'
import Hero from '../Components/Hero'
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
        </div>
        <div className='mt-[-10px] '>
            <img src={Vector} alt='Vector' className='w-full h-[160px] z-30'/>
        </div>
        <div className='p-5 relative  xl:w-[1550px] mx-auto'>
          <h1 className=' relative p-2 text-center xl:text-[48px] lg:text-[40px] md:text-[32px] poppins-bold text-white mt-[-6rem] z-20'>
          Mobile <span className='text-[#388FCB]'>Stock</span>
          </h1>
          <img src={Vector2} alt='' className=' absolute xl:top-[-85px] lg:top-[-80px] md:top-[-80px] xl:left-[590px] lg:left-[34.6%] md:left-[34.4%] xl:w-[13%] lg:w-[17%] md:w-[17%] opacity-90' />
          <p className='text-[20px] text-center mt-10 md:text-[13px]'>
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