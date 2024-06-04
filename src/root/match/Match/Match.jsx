import { useEffect, useState } from "react";
import { TablePlayers } from "../Players/TablePlayers";
import { TableMetrics } from "../TableMetrics/TableMetrics";
import { PointsTable } from "../PointsTable/PointsTable"
import { FetchMatch } from "./FetchMatch";
import { useParams } from "react-router-dom";
import { ErrorView } from "./ErrorView";

export const Match = () => {

    const playerId = useParams();

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
    }

    const [players, setPlayers] = useState(initialPlayers);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const description = Object.values(playerId)[0];

    useEffect(() => {
        const fetchAndSetPlayers = async () => {
            try {
                const fetchedPlayers = await FetchMatch(initialPlayers, description);
                if (fetchedPlayers instanceof Error) {
                    throw new Error("Error to render the data")
                }
                if (fetchedPlayers) {
                    setPlayers(fetchedPlayers);
                }
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchAndSetPlayers();
    }, []);

    if (loading) {
        return (
            <section className="w-full h-auto grid grid-cols-2 grid-rows-3 *:bg-gray-600">
                <div className="w-full col-span-2 ">

                </div>
                <div className="w-full">

                </div>
                <div className="w-full">

                </div>
                <div className="w-full col-span-2">

                </div>
            </section>
        );
    }

    if (error) {
        return( 
            <ErrorView 
                error={error.message}
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
                <div className="w-full">
                    <TablePlayers player={players} />
                </div>
                <div className="w-full p-2 bg-blue-950">
                    <TableMetrics players={players} />
                </div>
            </div>
            <div className="px-4 hidden xl:inline">
                <PointsTable players={players} />
            </div>
        </section>
    );
};