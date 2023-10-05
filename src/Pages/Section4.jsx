import ribbonImage from '../assets/ribbon.png'
const Section4 = () => {
    return ( 

        <div className="flex flex-col gap-[50px] md:w-[1180px] md:h-[487px] rounded-[24px] bg-[#5A98F2] md:mx-auto ">

<h1 className="text-white  p-20 text-[36px] text-center font-bold leading-[70px]">
    What our customers are saying
</h1>


<div className='flex flex-row justify-center justify-around items-center'>

<div className='flex flex-row gap-8 items-center'>
<img src={ribbonImage} className='rounded-[450px] border-2 md:w-[113px] md:h-[87px]'/>
<div className='flex flex-col text-white'>
<h1>
    AK
</h1>

<h2>
Abc ltd
</h2>
</div>
</div>


    <div>
        <h3 className="text-[22px] text-white font-semibold leading-[55px] ">
        “Lorem ipsum dolor sit amet, consectetuer 
        <br/>
        adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa.”

        </h3>

        <h3>

        </h3>
    </div>
    </div>   </div>
     );
}
 
export default Section4;