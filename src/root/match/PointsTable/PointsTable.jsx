import { PointsMap } from "./PointsMap";

export const PointsTable = ({ players }) => {

    return (
        <section className="w-full flex flex-col items-center">
            <table className="w-full" >
                <thead className="w-full ">
                    <tr className="*:w-[12%]  *:h-10 text-center text-lg font-light text-gray-500 ">
                        <th>
                        </th>
                        <th>
                            ACE
                        </th>
                        <th>
                            SERVICE FAULT
                        </th>
                        <th>
                            DOUBLE FAULT
                        </th>
                        <th>
                            RETURN ERROR
                        </th>
                        <th className="bg-yellow-400 text-center">
                            FORCE ERROR
                        </th>
                    </tr>
                </thead>
                <tbody className="w-full">
                    <tr className="w-auto text-center text-lg font-semibold text-yellow-500">
                        <td className="text-left text-yellow-500">
                            {players.playerOne.lastname}
                        </td >
                        <PointsMap points={players.playerOne.points} color={true} />
                    </tr>
                    <tr className="w-auto text-center text-lg font-semibold text-gray-500">
                        <td className="text-left text-gray-500">
                            {players.playerTow.lastname}
                        </td>
                        <PointsMap points={players.playerTow.points} color={false} />
                    </tr>
                </tbody>
            </table>
        </section>
    );
}
