import { TablePoints } from "./TablePoints";

export const TablePlayers = ({ player }) => {
    return (
        <section className="w-full grid grid-cols-1 grid-rows-3" >
            <div className="self-start">
                <h1 className="w-full text-center text-4xl font-bold text-yellow-500">
                    {player.playerOne.name}
                </h1>
            </div>
            <div className="w">
                <div className="w">
                    <TablePoints points={player.playerOne.points} />
                </div>
                <div className="w">
                    <TablePoints points={player.playerTow.points} />
                </div>
            </div>
            <div className="self-end">
                <h1 className="w-full text-center text-4xl font-bold text-gray-500">
                    {player.playerTow.name}
                </h1>
            </div>
        </section>
    );
}