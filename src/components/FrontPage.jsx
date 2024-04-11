export const FrontPage = () => {
    return( 
        <section 
        style={
            { 
                backgroundImage: `url("./img/frontPage.jpeg")`,
                backgroundPosition: 'center center',
                backgroundSize: 'cover' 
            }
        }
        className="w-full h-[70vh] px-6  ">
                <div className="w-full h-full flex flex-col items-center gap-4 justify-center">
                    <h1 className="w-full text-2xl font-light text-white text-center">
                        THE LIFESTYLE
                    </h1>
                    <h1 className="w-full text-2xl font-semibold text-white text-center">
                        THAT KEEPS YOU ENERGIZED -
                    </h1>
                    <p className="w-full text-xs font-normal text-white text-center">
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
