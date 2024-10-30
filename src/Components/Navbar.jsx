import Logo from '../assets/logo.png'
import Small from '../assets/small.png'
import Medium from '../assets/medium.png'
import Large from '../assets/large.png'
import '../index.css'

const Navbar = () => {
  return (
    <div className='p-1 pt-8 z-40'>
        <div className=' w-[65%] mx-auto flex items-center justify-center gap-20'>
            <ul className='flex items-center gap-14 poppins-medium text-[18px] leading-[20px] tracking-[0.6px]'>
                <li className='cursor-pointer menu py-1 text-[#333333]'>Home</li>
                <li className='cursor-pointer menu py-1 text-[#333333]'>About Us</li>
                <li className='cursor-pointer menu py-1 text-[#333333]'>Wholesale</li>
            </ul>
            <div className='relative'>
                <img src={Large} alt='Logo' className='absolute top-[-20px] right-[-23px] image-animation large' />
                <img src={Medium} alt='Logo' className='absolute top-[-13px] right-[-15px] image-animation medium' />
                <img src={Small} alt='Logo' className='absolute -top-1 -right-2 image-animation small' />
                <img src={Logo} alt='Logo' className='relative' />
            </div>
            <ul className='flex items-center gap-14 poppins-medium text-[18px] leading-[20px] tracking-[0.6px]'>
                <li className='cursor-pointer menu py-1 text-[#333333]'>Services</li>
                <li className='cursor-pointer menu py-1 text-[#333333]'>News</li>
                <li className='cursor-pointer menu py-1 text-[#333333]'>How it Works</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar