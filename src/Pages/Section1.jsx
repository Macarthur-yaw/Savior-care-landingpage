// import { icons } from 'react-icons'
import icon1 from '../assets/Frame (1).svg'
import icon2 from '../assets/Frame (2).svg'
import icon3 from '../assets/Frame (3).svg'
import icon4 from '../assets/Frame (4).svg'
import icon5 from '../assets/Frame.svg'

function Card({imagePath,title,content}){
    return (
        <div className='md:w-[350px] md:h-[354px] rounded-[20px] flex flex-col items-center p-4 gap-[24px] shadow-md cursor-pointer'>

    <img src={imagePath} className='mx-auto'/>
<span>
    <h1 className='text-center font-bold text-black text-[24px] leading-[56px]'>{title}</h1>
    <h3 className='text-[#7D7987] text-[16px] font-normal'>{content}</h3>
    </span>  </div>
    )
}

const Section1 = () => {
    return (  
        <div>
            
            <div id="fisrtSection">
<h1 className="text-[#462E6A] text-center text-[45px] font-bold leading-[56px]  border-b-2/4">Services we Offer</h1>
            </div>

            <h3 className="text-[#CCD2E9] text-center text-[19px] font-semibold leading-[27px] tracking-[0.38px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.

            </h3>

            <div className='flex flex-col gap-4 items-center py-10'>

                <div className='flex flex-row gap-4'>
                <Card imagePath={icon1} title="Search Donor" content="Choose your doctor from thousands of specialist, general, and trusted hospitals"/>
<Card imagePath={icon5} title="Online pharmacy" content="Buy your medicines with our mobile application with a simple delivery system"/>

<Card imagePath={icon2} title="Consultation" content="Free consultation with our trusted doctors and get the best recomendations"/>
</div>

<div className='flex flex-row gap-4'>
<Card imagePath={icon3} title="Details info" content="Free consultation with our trusted doctors and get the best recomendations"/>


<Card imagePath={icon4} title="Emergency care" content="You can get 24/7 urgent care for yourself or your children and your lovely family"/>

<Card imagePath={icon5} title="Tracking" content="Track and save your medical history and health data"/>
</div>

<button className='md:w-[200px] md:h-[56px] md:rounded-[55px] border-[1.4px] border-[#458FF6] text-[#458FF6]'>Learn more</button>
            </div>
        </div>
    );
}
 
export default Section1;