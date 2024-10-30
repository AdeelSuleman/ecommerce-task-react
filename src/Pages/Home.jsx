import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <>
        <Header/>
        <div className='bg-gradient-to-tr from-[#e2f5ff] to-[#ffffff] mt-[-20px] overflow-hidden rounded-tr-3xl rounded-tl-3xl '>
            <Navbar className='z-30' />
            <Hero/>
        </div>
    </>
  )
}

export default Home