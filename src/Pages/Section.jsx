import Navbar from "../Components/Navbar";
import backgroundImage from '../assets/background.png'
const Section = () => {
    return (
        <div className="flex flex-col gap-10 mb-20">
            <Navbar/>
<div className="flex md:flex-row flex-col flex-col-reverse justify-center items-center">
            <div className="flex flex-col md:gap-20">
            <div className="flex flex-col md:gap-10">
                <h1 className="text-[#3C567B] md:text-[48px] font-bold leading-[56px]">
                    Virtual HealthCare Saviour 
                    
                    for you.
                </h1>

                <h3 className="text-[#93C1F9] md:text-[19px] leading-[27px] font-semibold tracking-[0.38px]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                <br></br> Aenean commodo ligula eget dolor. Aenean massa.

                </h3>
                </div>
                <button className="bg-[#458FF6] w-[40%] rounded-md p-1 text-white md:text-[19px] font-semibold md:font-bold md:leading-[60px] md:rounded-[55px] md:w-[200px] md:h-[69px]">Consult today</button>
            </div>

            <div>
                <img src={backgroundImage}/>
            </div>
            </div>   </div>
      );
}
 
export default Section;