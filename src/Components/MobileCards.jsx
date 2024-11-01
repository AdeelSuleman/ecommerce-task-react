import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../index.css';
import iphone from '../assets/iphone.png';
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const MobileCards = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      const product = [
        { img: iphone, title: 'Iphone Xs Pro Max', discrp: 'Apple iPhone 14 Pro 512GB Gold (MQ233)' },
        { img: iphone, title: 'Iphone 11 Pro Max', discrp: 'Apple iPhone 14 Pro 512GB Gold (MQ233)' },
        { img: iphone, title: 'Iphone 12 Pro Max', discrp: 'Apple iPhone 14 Pro 512GB Gold (MQ233)' },
        { img: iphone, title: 'Iphone 13 Pro Max', discrp: 'Apple iPhone 14 Pro 512GB Gold (MQ233)' },
        { img: iphone, title: 'Iphone 14 Pro Max', discrp: 'Apple iPhone 14 Pro 512GB Gold (MQ233)' },
        { img: iphone, title: 'Iphone 15 Pro Max', discrp: 'Apple iPhone 14 Pro 512GB Gold (MQ233)' },
        { img: iphone, title: 'Iphone 16 Pro Max', discrp: 'Apple iPhone 14 Pro 512GB Gold (MQ233)' },
      ];
  
  return (
    <div className="mt-10 w-[70%] xl:w-[1250px] mx-auto ">
        <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  {product.map((por, index) => (
            <div className="p-2" key={index}>
            <div 
              className={`gradient-border w-fit p-2 transition-transform duration-300 ease-in-out`}
            >
              <div className='gradient-border-inner animate-fade-in'>
                <img src={por.img} alt='' className='mx-auto' />
                <h2 className='text-[20px] poppins-regular text-center mt-6'>{por.title}</h2>
                <p className='text-[12px] poppins-regular text-[#888888] text-center mt-2'>{por.discrp}</p>
              </div>
            </div>
            </div>
          ))}
</Carousel>
    </div>
  )
}

export default MobileCards