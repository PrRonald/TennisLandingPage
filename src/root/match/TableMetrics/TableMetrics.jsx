import { Players } from "./Players";

export const TableMetrics = ({players}) => {
    const playerone = [...players.playerOne.winner]
    const playertwo = [...players.playerTow.winner]

    return (
        <section className="w-full xl:w-[90%]  ">
            <Players PositionPlayer={true} PlayerData={playerone} />
            <Players PositionPlayer={false} PlayerData={playertwo} />
        </section>
    );
}