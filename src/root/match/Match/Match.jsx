import { useEffect, useState } from "react";
import { TablePlayers } from "../Players/TablePlayers";
import { TableMetrics } from "../TableMetrics/TableMetrics";
import { PointsTable } from "../PointsTable/PointsTable";
import { useParams } from "react-router-dom";
import { ErrorView } from "./ErrorView";
import { useDispatch, useSelector } from "react-redux";
import { fetchMatch } from "../Match/matchSlice";

const initialPlayers = {
    playerOne: {
        id: 1,
        name: "name",
        lastname: "name",
        country: "country",
        points: ["0", "0", "0", "0", "0"],
        winner: ["0", "0"],
        error: ["0", "0", "0"]
    },
    playerTow: {
        id: 2,
        name: "name",
        lastname: "name",
        country: "country",
        points: ["0", "0", "0", "0", "0"],
        winner: ["0", "0"],
        error: ["0", "0", "0"]
    }
};

export const Match = () => {
    const playerId = useParams();
    const description = Object.values(playerId)[0];
    const dispatch = useDispatch();
    const [players, setPlayers] = useState(initialPlayers)
    const { transformedPlayers, status, error } = useSelector(state => state.match);

    useEffect(() => {
        dispatch(fetchMatch({ players: initialPlayers, description }));
    }, [dispatch, description]);

    useEffect(()=>{
        if(status === "succeeded"){
            setPlayers(transformedPlayers)
        }
    }, [status, transformedPlayers])

    if (status === 'loading') {
        return (
           <p>LOADING</p>
        );
    }

    if (status === 'failed') {
        return( 
            <ErrorView 
                error={error}
                Return={"Return to Players"} 
                to={"/Tennis/Players"}
            />
        ); 
    }

    return (
        <section className="w-full xl:h-[100vh] h-auto grid grid-rows-[20vh_50vh_30vh] bg-blue-950">
            <div className="w-full px-4 pt-2">
                <img className="w-[150px] h-[100px]" src="/img/TennisLogo.png" alt="Logo" />
            </div>
            <div className="w-full xl:h-[40vh] h-auto grid grid-cols-1 grid-rows-auto xl:grid-cols-2 place-items-center gap-8 xl:gap-0">
                <div className=" hidden w-full">
                    <TablePlayers player={players} />
                </div>
                <div className="w-full p-2 bg-blue-950 ">
                    <TableMetrics players={players} />
                </div>
            </div>
            <div className="px-4 hidden xl:inline">
                <PointsTable players={players} />
            </div>
        </section>
    );
};