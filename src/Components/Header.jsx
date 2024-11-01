import { TfiEmail } from "react-icons/tfi";
import { LuPhone } from "react-icons/lu";
import '../index.css'

const Header = () => {
  return (
    <div className="bg-[#388FCB] ">
    <div className="hidden 2xl:flex lg:flex md:flex justify-between items-center py-5 lg:py-3 md:py-3 px-[66px] 2xl:w-[1550px] mx-auto ">

        <div className=" flex items-center gap-8">
            <div className=" flex items-center gap-2 text-white poppins-medium">
                <TfiEmail />
                <p className="text-[12.86px]">info@abc.com</p>
            </div>
            <div className=" flex items-center gap-2 text-white poppins-medium">
                <LuPhone />
                <p className="text-[12.86px]">+123 456 789</p>
            </div>
        </div>


        <div className="">
            <div className=" flex items-center ">
                <div className=" px-4 text-white poppins-medium">
                    <p className="text-[12.86px]">Privacy Policy</p>
                </div>
                <div className=" px-4 text-white border-l poppins-medium">
                    <p className="text-[12.86px]">Trems & Condition</p>
                </div>
            </div>
        </div>
    </div>
    <div className="lg:hidden md:hidden py-2 px-5">
        <div className=" flex items-center justify-between gap-8">
            <div className=" flex items-center gap-2 text-white poppins-medium">
                <TfiEmail />
                <p className="text-[12.86px]">info@abc.com</p>
            </div>
            <div className=" flex items-center gap-2 text-white poppins-medium">
                <LuPhone />
                <p className="text-[12.86px]">+123 456 789</p>
            </div>
        </div>
        <div className="mt-2">
            <div className=" flex items-center justify-between gap-8">
                <div className="  text-white  poppins-medium">
                    <p className="text-[12.86px]">Trems & Condition</p>
                </div>
                <div className="  text-white poppins-medium">
                    <p className="text-[12.86px]">Privacy Policy</p>
                </div>
            </div>
        </div>
        
    </div>
    <div className="bg-[#9ECCEA] w-[99.5%] mx-auto h-[37px] rounded-tr-full rounded-tl-full">
    
    </div>
    </div>
  )
}

export default Header