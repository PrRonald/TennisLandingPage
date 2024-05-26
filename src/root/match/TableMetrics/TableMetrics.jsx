import { Players } from "./Players";

export const TableMetrics = ({players}) => {

    const metricsPlayer1 =
        {
            winner: players.playerOne.winner,
            error: players.playerOne.error
        }
    

    const metricsPlayer2 =
        {
            winner: players.playerTow.winner,
            error: players.playerTow.error
        }
    

    return (
        <section className="w-full xl:w-[90%]  ">
            <Players PositionPlayer={true} PlayerData={metricsPlayer1} />
            <Players PositionPlayer={false} PlayerData={metricsPlayer2} />
        </section>
    );
}