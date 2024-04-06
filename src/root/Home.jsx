import { FrontPage } from "../components/FrontPage";
import { Search } from "../components/Search";

export const Home = () => {
    return( 
        <section>
            <div>
                <FrontPage />
                <Search />
            </div>
        </section>
     );
}