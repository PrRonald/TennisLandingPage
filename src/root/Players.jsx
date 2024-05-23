import { useEffect, useState } from "react";

export const Players = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://messonstats.com:8443/product")
            .then((data) => (data.json()))
            .then((data) => setData(data))
            .catch(() => console.log("error"))
    }, [])

    return (
        <section className="w-full h-auto text-center bg-blue-950
            flex flex-col items-center justify-center  ">
            <div className="w-full grid grid-cols-1 xl:grid-cols-[auto_auto_auto] 
                 xl:gap-2 gap-6  justify-center place-items-center" >
                {data.map((item) => (
                    <div
                        className="xl:w-[400px] w-[300px] xl:h-[150px] h-auto flex flex-col items-center justify-center
                        border-2 border-gray-500 hover:bg-blue-800"
                        key={item.id}>
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
                ))}
            </div>
        </section>
    );
}