import { useEffect, useState } from "react";
import { FrontPage } from "../components/FrontPage";
import { Info } from "../components/Info";
import { News } from "../components/News";
import { Plans } from "../components/Plans";
import { Search } from "../components/Search";

export const Home = () => {

    


    return (
        <section>
            <div>
                <FrontPage />
                <Info />
                <News />
                <Search />
            </div>
        </section>
    );
}