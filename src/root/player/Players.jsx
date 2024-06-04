import { useEffect, useState } from "react";
import { LinkButton } from "./LinkButton";

export const Players = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://messonstats.com:8443/product")
            .then((data) => (data.json()))
            .then((data) => setData(data))
            .catch(() => console.log("error"))
    }, [])

    return (
        <section className="w-full xl:h-100vh text-center bg-blue-950
            flex flex-col items-center justify-center  p-10 bg-opacity-90">
            <div className="w-full grid grid-cols-1 xl:grid-cols-[auto_auto_auto] 
                 xl:gap-2 gap-6  justify-center place-items-center" >
                {data.map((item) => (
                    <div
                        className="xl:w-[400px] w-[300px] xl:h-[175px] h-auto  items-center justify-center
                        border-2 border-gray-500 grid grid-rows-[70%_30%] grid-cols-1 "
                        key={item.id}>
                        <div className="w">
                            <h2 className="w-full text-center xl:text-4xl text-2xl font-extrabold
                             text-yellow-500" >
                                {item.company}
                            </h2>
                            <h2 className="w-full text-center xl:text-2xl text-xl font-bold
                             text-white " >
                                VS
                            </h2>
                            <h2 className="w-full text-center xl:text-4xl text-2xl font-extrabold
                             text-gray-500" >
                                {item.company2}
                            </h2>
                        </div>
                        <div className="w-auto grid grid-cols-2 grid-row-1 gap-4 p-4">
                            <LinkButton to={`match/${item.description}`}
                                        name={"Metrics"}
                                        GreyYellow={true}/>
                            <LinkButton to={`live-match`} 
                                        name={"Live Match"}
                                        GreyYellow={false}/>
                                
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}