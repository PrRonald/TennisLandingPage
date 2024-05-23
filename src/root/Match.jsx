import { TablePlayers } from "./match/Players/TablePlayers";
import { TableMetrics } from "./match/TableMetrics/TableMetrics";
import { PointsTable } from "./match/PointsTable/PointsTable";

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
        <section className="w-full xl:h-[100vh] h-auto grid grid-rows-[20vh_50vh_30vh]
                bg-blue-950  ">
            <div className="w-full px-4 pt-2">
                <img
                    className="w-[150px] h-[100px]"
                    src="/img/TennisLogo.png"
                    alt="Logo" />
            </div>
                <div className="w-full xl:h-[40vh] h-auto grid grid-cols-1 grid-rows-auto 
                     xl:grid-cols-2 place-items-center gap-8 xl:gap-0 ">
                    <div className="w-full ">
                        <TablePlayers player={players} />
                    </div>
                    <div className="w-full p-2 bg-blue-950">
                        <TableMetrics />
                    </div>
                </div>
                <div className="px-4 hidden xl:inline">
                    <PointsTable players={players} />
                </div>
        </section>
    );
}