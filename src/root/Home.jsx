import { AboutClub } from "../components/AboutClub";
import { News } from "../components/News";
import { Plans } from "../components/Plans";
import { Search } from "../components/Search";
import { TableInfo } from "../components/TableInfo";

export const Home = () => {
    return( 
        <section>
            <div>
                <AboutClub />
                <TableInfo />
                <Plans />
                <News />                
                <Search />
            </div>
        </section>
     );
}