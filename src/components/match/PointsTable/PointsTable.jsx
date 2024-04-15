import { sum } from "../Sum";
import { PointsMap } from "./PointsMap";

export const PointsTable = ({players}) => {

    const playerPoints = {
        LastName: "DIMITROV",
        Points: ["1", "2", "3", "4"]
    }

    return (
        <section className="w-full ">
            <thead>
                <tr className="*:w-[200px] *:text-center">
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
                    <th>
                        TOTAL POINTS WON
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="w-[200px] text-center ">
                    <td className="text-left">
                        {players.playerOne.lastname}
                    </td>
                    <PointsMap points={playerPoints.Points} />
                    <td>
                        {sum(playerPoints.Points)}
                    </td>
                </tr>
                <tr className="w-[200px] text-center ">
                    <td className="text-left">
                        {players.playerTow.lastname}
                    </td>
                    <PointsMap points={playerPoints.Points} />
                    <td  >
                        {sum(playerPoints.Points)}
                    </td>
                </tr>
            </tbody>
        </section>
    );
}
