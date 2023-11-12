import leftImage from '../assets/image2.png'
const Section2 = () => {
    return (  

        <div className='flex flex-row justify-center gap-10 '>


<div>
    <img src={leftImage} className=''/>
</div>

<div className='flex flex-col md:gap-4 '>
    <h1 className='text-[#462E6A] md:text-[36px] font-semibold md:leading-[56px]'>
    Leading healthcare providers
    </h1>

    <h3 className='md:w-[450px] text-[#7D7987] md:text-[18px] text-sm font-normal md:leading-[30px]'>
    Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver


    </h3>
<br/>
    <button className='md:w-[200px] w-[40%] rounded-md md:h-[56px] md:rounded-[55px] border-[1px] border-[#458FF6] text-[#458FF6] md:text-[18px] font-semibold md:font-bold md:leading-[60px]'>learn more</button>
</div>
        </div>
    );
}
 
export default Section2

