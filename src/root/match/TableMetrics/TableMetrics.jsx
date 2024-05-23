import { Players } from "./Players";

export const TableMetrics = () => {

    const metricsPlayer1 =
        {
            winner: ["13", "11", "23"],
            error: ["15", "7", "4"]
        }
    

    const metricsPlayer2 =
        {
            winner: ["8", "6", "18"],
            error: ["14", "16", "4"]
        }
    

    return (
        <section className="w-full xl:w-[90%]  ">
            <Players PositionPlayer={true} PlayerData={metricsPlayer1} />
            <Players PositionPlayer={false} PlayerData={metricsPlayer2} />
        </section>
    );
}