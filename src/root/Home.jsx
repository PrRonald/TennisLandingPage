import { News } from "../components/News";
import { Search } from "../components/Search";

export const Home = () => {
    return( 
        <section>
            <div>
                <News />                
                <Search />
            </div>
        </section>
     );
}