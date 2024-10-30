import '../index.css'
import Lbubble from '../assets/LargeBubble.png'
import WhiteBubble from '../assets/WhiteBubble.png'
import Mudium2 from '../assets/Medium1.png'
import SmallBubble from '../assets/SmallBubble.png'

const Hero = () => {
  return (
    <div>
        <div className='flex justify-between  h-full '>
                <div className='bg-red-500 p-1 '>asdhg</div>

                <div className=''>
                    <img src={SmallBubble} alt='buubleM' className='absolute BubbleM2 right-[120px] top-[200px] z-10'/>
                    <img src={SmallBubble} alt='buubleM' className='absolute BubbleM1 right-[115px] top-[195px] z-10 rotate-6'/>
                    <img src={WhiteBubble} alt='WhiteBubble' className='Bubble1 relative ml-[14px] mt-[-14px] rounded-full w-[95%] opacity-55' />
                    <img src={Lbubble} alt='Bubble' className=' Bubble rounded-full absolute top-[73px] right-0 opacity-75' />
                    <div className='relative'>
                        <img src={Mudium2} alt='buubleM' className='absolute bottom-[12rem] left-40 BubbleM2 opacity-50'/>
                        <img src={Mudium2} alt='buubleM' className='absolute bottom-48 left-36 BubbleM1  opacity-50'/>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Hero