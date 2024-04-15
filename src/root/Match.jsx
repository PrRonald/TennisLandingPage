import { TablePlayers } from "../components/match/Players/TablePlayers";
import { PointsTable } from "../components/match/PointsTable/PointsTable";
import { TableMetrics } from "../components/match/TableMetrics/TableMetrics";

export const Match = () => {

    const players = {
        playerOne: {
            name: "GRIGOR", 
            lastname: "DIMITROV",
            country: "BUL",
            points: ["6", "7", "6"]
        },
        playerTow: {
            name: "ALEJANDRO",
            lastname: "TABILO",
            country: "CHIL",
            points: ["7", "6", "2"]
        }
    }

    return (
        <section>
            <div className="w-full h-[50vh] grid grid-cols-2 grid-rows-1 place-items-center
                bg-blue-950">
                <div className="w-full ">
                    <TablePlayers player={players} />
                </div>
                <div className="w-full p-2">
                    <TableMetrics />
                </div>
            </div>
            <div>
                <PointsTable  players={players}/>
            </div>
        </section>
    );
}