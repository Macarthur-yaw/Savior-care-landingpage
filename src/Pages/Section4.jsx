import ribbonImage from '../assets/ribbon.png'
const Section4 = () => {
    return ( 

        <div className="flex mt-20 flex-col md:gap-[50px] md:w-[1180px] md:h-[487px] rounded-[24px] bg-[#5A98F2] md:mx-auto ">

<h1 className="text-white  md:p-20 md:text-[36px] text-center font-semibold md:font-bold leading-[70px]">
    What our customers are saying
</h1>


<div className='grid grid-cols-2   items-center p-2'>

<div className='flex flex-row gap-8 items-center p-4'>
<img src={ribbonImage} className='rounded-[450px] w-[30%] border-2 md:w-[113px] md:h-[87px]'/>
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
        <h3 className="md:text-[22px] text-white font-semibold md:leading-[55px] text-sm">
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