import { BigNumber } from "./BigNumber";
import { Metrics } from "./Metrics/Metrics";
import { NamesPoints } from "./NamesPoints";

export const Players = ({PositionPlayer, PlayerData}) => {

    return (
        <section className="grid grid-cols-5 grid-rows-[auto_auto] " >
            <div className={`w-full row-start-1 col-start-1 
                ${PositionPlayer ? "col-span-2 bg-blue-800": "col-span-1  bg-yellow-500" }  
                place-self-center  `}>
                <h1 className="w-full text-center ">
                    {PositionPlayer ? "WINNER" : "TOTAL" }
                </h1>
            </div>
            <div className={`w-full row-start-1 col-start-4
                ${PositionPlayer ? "col-span-2 bg-blue-800": "col-span-1 col-start-5  bg-yellow-500" }
                 col-span-2 place-self-center  `}>
                <h1 className="w-full text-center ">
                {PositionPlayer ? "UNFORCE ERROR" : "TOTAL" }
                </h1>
            </div>
            <div className="row-start-2 " >
                <BigNumber number={PlayerData[0]} />
            </div>
            <div className="row-start-2  col-start-2 ">
                {/* <Metrics direction={true} metrics={PlayerData.error} rotate={false}/> */}
            </div>
            <div className="row-start-2  col-start-3">
                <NamesPoints />
            </div>
            <div className="row-start-2 col-start-4">
                <Metrics direction={false} metrics={PlayerData} rotate={true}/>
            </div>
            <div className="row-start-2 col-start-5" >
                <BigNumber number={PlayerData[1]} />
            </div>
        </section>
    );
}