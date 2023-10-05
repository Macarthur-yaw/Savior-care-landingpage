const Navbar = () => {
    return (  
        <nav className="flex flex-row justify-around p-8">
           <h1 className="text-[#462E6A] font-bold text-[24px] leading-normal"> Savior care</h1> 
        <ul  className="list-none flex flex-row  gap-4">
            <li className="hover:text-[#2E4E92] cursor-pointer hover:underline hover:underline-offset-8 text-[18px] font-normal leading-normal opacity-[0.5] text-[1F1534]">Home</li>
            <li className="hover:text-[#2E4E92] cursor-pointer hover:underline hover:underline-offset-8 text-[18px] font-normal leading-normal opacity-[0.5] text-[1F1534]">Find a doctor</li>
            <li className="hover:text-[#2E4E92] cursor-pointer hover:underline hover:underline-offset-8 text-[18px] font-normal leading-normal opacity-[0.5] text-[1F1534]">
                Apps
            </li>
            <li className="hover:text-[#2E4E92] cursor-pointer hover:underline hover:underline-offset-8 text-[18px] font-normal leading-normal opacity-[0.5] text-[1F1534]">Testimonials</li>
            <li className="hover:text-[#2E4E92] cursor-pointer hover:underline hover:underline-offset-8 text-[18px] font-normal leading-normal opacity-[0.5] text-[1F1534]">About us</li>
        </ul>
        </nav>
    );
}
 
export default Navbar;