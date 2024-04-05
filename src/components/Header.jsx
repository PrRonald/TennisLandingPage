import { Link } from "react-router-dom";

export const Header = () => {
    return( 
        <section className="flex flex-col items-center" >
            <div className="w-[90%] h-10 grid grid-cols-2
            grid-rows-1 ">
                <div className="self-center">
                    <Link to="/" >Logo</Link>
                </div>
                <div className="w-full 
                grid grid-cols-4 grid-rows-1 place-items-center  ">
                    <Link to="menu" >Menu</Link>
                    <Link to="about" >About</Link>
                    <Link to="services" >Services</Link>
                    <Link to="event" >Events</Link>
                </div>
            </div>
        </section>
     );
}