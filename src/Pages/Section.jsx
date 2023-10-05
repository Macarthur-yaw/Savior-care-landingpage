import Navbar from "../Components/Navbar";
import backgroundImage from '../assets/background.png'
const Section = () => {
    return (
        <div className="flex flex-col gap-10">
            <Navbar/>
<div className="flex flex-row justify-center">
            <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-10">
                <h1 className="text-[#3C567B] md:text-[48px] font-bold leading-[56px]">
                    Virtual HealthCare Saviour 
                    
                    <br></br>for you.
                </h1>

                <h3 className="text-[#93C1F9] text-[19px] leading-[27px] font-semibold tracking-[0.38px]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                <br></br> Aenean commodo ligula eget dolor. Aenean massa.

                </h3>
                </div>
                <button className="bg-[#458FF6] text-white text-[19px] font-bold leading-[60px] md:rounded-[55px] md:w-[200px] md:h-[69px]">Consult today</button>
            </div>

            <div>
                <img src={backgroundImage}/>
            </div>
            </div>   </div>
      );
}
 
export default Section;