import leftImage from '../assets/image2.png'
const Section2 = () => {
    return (  

        <div className='flex flex-row justify-center gap-10 '>


<div>
    <img src={leftImage}/>
</div>

<div className='flex flex-col gap-4'>
    <h1 className='text-[#462E6A] text-[36px] font-bold leading-[56px]'>
    Leading healthcare providers
    </h1>

    <h3 className='md:w-[450px] text-[#7D7987] text-[18px] font-normal leading-[30px]'>
    Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver


    </h3>

    <button className='md:w-[200px] md:h-[56px] md:rounded-[55px] border-[1px] border-[#458FF6] text-[#458FF6] text-[18px] font-bold leading-[60px]'>learn more</button>
</div>
        </div>
    );
}
 
export default Section2

