export const AboutClub = () => {
    return (
            <section className="w-full flex flex-col gap-8 py-2.5 px-6 xl:w-1/2 
                  xl:p-0 xl:m-0 ">
                <h1 className="w-full text-lg font-bold text-center
                    xl:text-left xl:text-3xl xl:font-bold ">
                    ABOUT THE CLUB
                </h1>
                <h2 className="w-full text-base font-normal text-gray-700 text-center 
                    xl:text-left xl:text-2xl xl:font-normal ">
                    At the award-winning ProShot. than just a cold calculated business - it is passion!
                </h2>
                <p className="w-full text-xs font-normal text-gray-700 text-center
                    xl:text-left xl:text-xl xl:font-normal  ">
                    Vilas Tennis Academy offers tennis camps and professional programs every week of the year in Punta Cana (Dominican Republic) for juniors and adults tennis player.
                </p>
                <div className="w-full flex flex-row justify-center gap-5
                    xl:justify-start ">
                    <a className="w-32 h-9 rounded-3xl bg-green-400
                    flex items-center justify-center text-sm font-normal text-white " >
                        ABOUT
                    </a>
                    <a className="w-32 h-9 rounded-xl bg-white
                     border border-gray-500 flex items-center justify-center 
                     text-sm font-normal text-black  " >
                        GALLERY
                    </a>
                </div>
            </section>

    );
}