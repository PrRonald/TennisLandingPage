import { AboutClub } from "../components/AboutClub";
import { FrontPage } from "../components/FrontPage";
import { News } from "../components/News";
import { Plans } from "../components/Plans";
import { Search } from "../components/Search";
import { TableInfo } from "../components/TableInfo";

export const Home = () => {
    return( 
        <section>
            <div>
                <FrontPage />
                <AboutClub />
                <TableInfo />
                <Plans />
                <News />                
                <Search />
            </div>
        </section>
     );
}