import { AboutClub } from "../components/AboutClub";
import { FrontPage } from "../components/FrontPage";
import { News } from "../components/News";
import { Plans } from "../components/Plans";
import { Search } from "../components/Search";
import { TableInfo } from "../components/TableInfo";

export const Home = () => {
    return (
        <section>
            <div>
                <FrontPage />
                <div className="w-full h-[100vh] relative">
                    <div className="w-[600px] h-full  absolute top-0 left-[10vh]
                        bg-desktop-player bg-no-repeat bg-center bg-[length:400px_700px] max-[1280px]:hidden ">

                    </div>
                    <div className="w-full h-full flex flex-col place-content-center">
                        <div className="w-full xl:h-[50vh] xl:flex xl:flex-col xl:items-end">
                            <AboutClub />
                        </div>
                        <div className="w-full xl:h-[40vh] flex flex-col xl:items-end bg-green-400  ">
                            <TableInfo />
                        </div>

                    </div>
                </div>
                <Plans />
                <News />
                <Search />
            </div>
        </section>
    );
}