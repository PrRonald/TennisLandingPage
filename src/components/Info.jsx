import { AboutClub } from "./AboutClub";
import { TableInfo } from "./TableInfo";

export const Info = () => {
    return (
        <section className="w-full h-[100vh] tall-sm:max-h-[600px]  min-h-[600px] flex
                xl:place-content-center xl:items-center xl:bg-desktop-player bg-contain
                bg-no-repeat bg-left border-2 overflow-hidden " >
            <div className="w-full xl:h-[90%] h-full  *:relative -z-10 ">
                <div className="w-full xl:tall-sm:h-[55%] h-[60%]
                     flex justify-end place-items-center ">
                    <AboutClub />
                </div>
                <div className="w-full xl:tall-sm:h-[45%] h-[40%]
                     bg-green-500 flex xl:justify-end TableInfo
                          ">
                    <TableInfo />
                    
                </div>

            </div>
        </section>
    );
}