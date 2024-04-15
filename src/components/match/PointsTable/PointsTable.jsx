import { sum } from "../Sum";
import { PointsMap } from "./PointsMap";

export const PointsTable = ({players}) => {

    const playerPoints = {
        LastName: "DIMITROV",
        Points: ["1", "2", "3", "4"]
    }

    return (
        <section className="w-full flex flex-col items-center">
            <div className="w-full" >
            <thead className="w-full ">
                <tr className="*:w-[12%]  *:h-10 text-center text-lg font-light text-gray-500 ">
                    <th>

                    </th>
                    <th>
                        UNRETURNED SERVES
                    </th>
                    <th>
                        SERVE POINTS WON
                    </th>
                    <th>
                        BASELINE POINTS WON
                    </th>
                    <th>
                        NET POINTS WON
                    </th>
                    <th className=" bg-yellow-400 text-center">
                        TOTAL POINTS WON
                    </th>
                </tr>
            </thead>
            <tbody className="w-full">
                <tr className="w-auto text-center text-lg font-semibold text-yellow-500">
                    <td className="text-left text-yellow-500">
                        {players.playerOne.lastname}
                    </td >
                        <PointsMap points={playerPoints.Points} color={true}/>
                    <td>
                        {sum(playerPoints.Points)}
                    </td>
                </tr>
                <tr className="w-auto text-center text-lg font-semibold text-gray-500">
                    <td className="text-left text-gray-500">
                        {players.playerTow.lastname}
                    </td>
                        <PointsMap points={playerPoints.Points} color={false}/>
                    <td  className="">
                        {sum(playerPoints.Points)}
                    </td>
                </tr>
            </tbody>
            </div>
            
        </section>
    );
}
