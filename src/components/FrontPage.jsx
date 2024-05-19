export const FrontPage = () => {
    return (
        <section
            className="w-full h-[50vh] max-h-[300px] px-6  md:px-21 md:h-[50vh] bg-mobile-front
            sm:bg-desktop-front bg-cover bg-center ">
            <div className="w-full h-full flex flex-col items-center xl:gap-4 gap-2 justify-center
                     xl:w-1/2 md:items-start">
                <h1 className="w-full text-2xl font-light text-white text-center 
                        md:text-start ">
                    THE LIFESTYLE
                </h1>
                <h1 className="w-full text-2xl font-semibold text-white text-center 
                        md:w-2/5 md:text-start ">
                    THAT KEEPS YOU ENERGIZED —
                </h1>
                <p className="w-full text-xs font-normal text-white text-center 
                         md:text-start ">
                    Whe its diverse list of members profesional equipment and lots of
                    tidy courts the proShot club in your perfect sports & recreation getaway
                </p>
                <a
                    href="#"
                    className="w-[144px] h-9 rounded-3xl bg-green-400
                    flex items-center justify-center text-sm font-normal text-white " >
                    BOOK A COART
                </a>
            </div>
        </section>
    );
}
