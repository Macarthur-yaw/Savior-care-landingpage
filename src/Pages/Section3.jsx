import leftImage from '../assets/doctor.png'
const Section3 = () => {
    return ( 

<div className='mt-20 flex flex-row justify-center gap-10 p-4 items-center'>



<div className='flex flex-col gap-4 '>
    <h1 className='text-[#462E6A] md:text-[36px] font-semibold md:leading-[56px]'>
    Leading healthcare providers
    </h1>

    <h3 className='md:w-[450px] text-[#7D7987] md:text-[18px] font-normal text-sm md:leading-[30px]'>
    Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver


    </h3>

    <button className='md:w-[200px] rounded-md w-[80%] md:h-[56px] md:rounded-[55px] border-[1px] border-[#458FF6] text-[#458FF6] font-semibold md:text-[18px] md:font-bold md:leading-[60px]'>learn more</button>
</div>

<div>
    <img src={leftImage}/>
</div>

        </div>
     );
}
 
export default Section3;