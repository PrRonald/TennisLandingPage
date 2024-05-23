import { useEffect } from "react";

const API_HEADERS = {
    'Content-type' : 'Aplication/json',
    Authentication: 'any-string-you-like'
}

export const LiveMatch = () => {

    const editProduct = {
        description: "Prospect_Open24_AndresGarcia_VS_EdwinRios",
        action: "REPORT"

    }


    useEffect(() => {
    
        fetch("https://messonstats.com:8443/statsbymatch",
        {
            method: 'POST',
            headers: API_HEADERS,
            body: JSON.stringify(editProduct)
        }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))

    }, [])

    return (
        <section className="w-full h-[100vh] bg-blue-950 " >
            <div className="w-full grid grid-cols-2 
                 grid-rows-[50px_75px_250px]">
                <div className="w-full border-b-2 border-black col-span-2  ">
                    <h1 className="w-full text-center text-white 
                        text-3xl font-semibold pt-2 ">
                        Live Match
                    </h1>
                </div>
                <div className="w-full
                    col-span-2 grid grid-rows-1 grid-cols-2 place-items-center ">
                    <div >
                        <h1 className="text-2xl font-bold text-yellow-500 ">
                            John Borg
                        </h1>
                    </div>
                    <div className="w">
                        <h1 className="text-2xl font-bold text-gray-500">
                            John Borg
                        </h1>
                    </div>
                </div>
                <div className="w-full border-2 border-black flex items-center">
                    <h1 className="w-full text-center text-6xl font-bold text-yellow-500 ">
                        45
                    </h1>
                </div>
                <div className="w-full flex items-center border-2 border-black border-l-0">
                    <h1 className="w-full text-center text-6xl font-bold text-gray-500 ">
                        45
                    </h1>
                </div>
            </div>
        </section>
    );
}