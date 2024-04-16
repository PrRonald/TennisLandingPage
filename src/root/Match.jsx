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
        <section className="w-full h-[100vh] grid grid-rows-[20vh_50vh_30vh]
                bg-blue-950  ">
            <div className="w-full px-4 pt-2">
                <img
                    className="w-[150px] h-[100px]"
                    src="/img/TennisLogo.png"
                    alt="Logo" />
            </div>
                <div className="w-full h-[40vh] grid grid-cols-2 grid-rows-auto
                    place-items-center ">
                    <div className="w-full ">
                        <TablePlayers player={players} />
                    </div>
                    <div className="w-full p-2">
                        <TableMetrics />
                    </div>
                </div>
                <div className="px-4">
                    <PointsTable players={players} />
                </div>
        </section>
    );
}