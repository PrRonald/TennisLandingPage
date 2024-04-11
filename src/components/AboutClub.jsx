import { Link } from "react-router-dom";

export const AboutClub = () => {
    return( 
        <section className="flex flex-col gap-8 py-2.5 px-6 ">
            <h1 className="w-full text-lg font-bold text-center">
                ABOUT THE CLUB
            </h1>
            <h2 className="w-full text-base font-normal text-gray-700 text-center ">
                At the award-winning ProShot. than just a cold calculated business - it is passion!
            </h2>
            <p className="w-full text-xs font-normal text-gray-700 text-center">
                Vilas Tennis Academy offers tennis camps and professional programs every week of the year in Punta Cana (Dominican Republic) for juniors and adults tennis player.
            </p>
            <div className="w-full flex flex-row justify-center gap-5">
                <a className="w-32 h-9 rounded-3xl bg-green-400
                    flex items-center justify-center text-sm font-normal text-white " >
                    ABOUT
                </a>
                <a className="w-32 h-9 rounded-3xl bg-white
                     border border-gray-500 flex items-center justify-center 
                     text-sm font-normal text-black  " >
                    GALLERY
                </a>
            </div>
        </section>
     );
}