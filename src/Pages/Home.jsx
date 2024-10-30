import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Vector from '../assets/Vector (5).png'

const Home = () => {
  return (
    <>
        <Header/>
        <div className='bg-gradient-to-tl from-[#e2f5ff] to-[#ffffff]  mt-[-20px] overflow-hidden rounded-tr-3xl rounded-tl-3xl '>
            <Navbar className='z-30' />
            <Hero/>
        </div>
        <div className='mt-[-10px]'>
            <img src={Vector} alt='Vector' className='w-full h-[160px] z-30'/>
        </div>
    </>
  )
}

export default Home