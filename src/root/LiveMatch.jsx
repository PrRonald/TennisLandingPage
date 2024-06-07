import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Connect to Socket.io server

var scoreDashData = "0";
var scoreDashData2 = "0";
var scoreDataGame = 0;
var gameRecord = 0;
var gameRecord2 = 0;
var changeServiceBall = false

export const LiveMatch = () => {

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        // Listen for incoming messages from the server
        socket.on('message', (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        return () => {
            // Clean up the event listener when the component unmounts
            socket.disconnect();
        };
    }, []);

    const handleMessageSend = () => {
        // Send a message to the server
        socket.emit('message', input);
        setInput('');
    };

    let products = [{
        "_id" : "664352312fd3f48a1aec96ff",
        "images" : [ ],
        "languages" : [
                {
                        "english" : ""
                },
                {
                        "spanish" : ""
                },
                {
                        "german" : ""
                },
                {
                        "french" : ""
                },
                {
                        "italian" : ""
                },
                {
                        "portuguese" : ""
                }
        ],
        "actions" : [
                {
                        "id" : "1715702419294",
                        "date" : "2024-05-20 21:37:59",
                        "actionId" : "1716255479374",
                        "action" : "SERVICE_FAULT",
                        "status" : true,
                        "player" : "Carlos Florentino",
                        "game" : 1,
                        "score" : "0-0",
                        "gamescore" : "0-0"
                },
                {
                        "id" : "1715702419294",
                        "date" : "2024-05-20 21:38:00",
                        "actionId" : "1716255480117",
                        "action" : "ACE",
                        "status" : true,
                        "player" : "Carlos Florentino",
                        "game" : 2,
                        "score" : "0-0",
                        "gamescore" : "0-0"
                }
        ],
        "id" : "1715702419294",
        "date" : "2024-05-14 12:00:19",
        "description" : "Prospect_Open24_CarlosFlorentino_VS_AldoLee",
        "company" : "Carlos Florentino",
        "company2" : "Aldo Lee",
        "set" : "",
        "game" : 2,
        "visit" : 3,
        "court" : "",
        "tiebreak" : "5",
        "style" : "",
        "category" : "Prospect_Open24",
        "favorite" : false,
        "hidden" : false,
        "image" : "Prospect_Open24.JPG",
        "serving" : "Player_1",
        "__v" : 0
}]

let filteredData = products.filter(

    (data, index) => data.id == "1715702419294"
)[0];


const result = products.flatMap(data => data.actions).filter( data => data.id == "1715702419294" )

console.log(result)


    procesarDatos(result, "Carlos Florentino", "Aldo Lee")

    let scoreNote = ["0","15","30","40","Adv"]

    let scoreField = scoreNote[scoreDashData] + "-" + scoreNote[scoreDashData2]

    console.log(scoreField)

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
            <div>
            <h1>Socket.io Chat</h1>
            <div>
                {messages.map((message, index) => (
                    <p key={index}>{message}</p>
                ))}
            </div>
        </div>
        </section>
    );


    
}

const procesarDatos = (datos, company, company2) => {
    // Variables para llevar un seguimiento del marcador y los juegos
    let marcador = { "Eric Daneri": 0, "Martin Genao": 0 };
    let gameTable = { "Eric Daneri": 0, "Martin Genao": 0 };
    marcador[company]=0
    marcador[company2]=0
    gameTable[company]=0
    gameTable[company2]=0
    let gameCompany=0
    let gameCompany2=0
    let juegoActual = 0;
    let deuce = false;
    const maxIterations = 4;
    let iterationCount = 0;
    // Iterar sobre las acciones en el JSON
    for (const accion of datos) {
      const jugador = accion.player;
      const juego = accion.game;
  
      // Verificar si el juego ha cambiado
      if (juego !== juegoActual) {
        juegoActual = juego;
        deuce = false;
      }

    //   console.log(accion.action)
  
//     iterationCount++;

//   // Check if the maximum number of iterations has been reached
//   if (iterationCount >= maxIterations) {
//     break; // Exit the loop if the limit is reached
//   }

      // Actualizar el marcador según la acción

        switch (accion.action) {
            case "WINNER":
            marcador[jugador]++;
            break;
            case "ACE":
            marcador[jugador]++;
            break;
            case "DOUBLE_FAULT":
                if(accion.player==company2){
                    marcador[jugador === company ? company2 : company]++;
                    break;        
                }else{                    
                    marcador[jugador === company2 ? company : company2]++;
                    break;        
                }
            case "FORCED_ERROR":
                if(accion.player==company2){
                    marcador[jugador === company ? company2 : company]++;
                    break;        
                }else{                    
                    marcador[jugador === company2 ? company : company2]++;
                    break;        
                }
            case "UNFORCED_ERROR":
                if(accion.player==company2){
                    marcador[jugador === company ? company2 : company]++;
                    break;        
                }else{                    
                    marcador[jugador === company2 ? company : company2]++;
                    break;        
                }
            case "RETURN_ERROR":
                if(accion.player==company2){
                    marcador[jugador === company ? company2 : company]++;
                    break;        
                }else{                    
                    marcador[jugador === company2 ? company : company2]++;
                    break;        
                }
        }
  
      // Verificar si estamos en deuce
      if (marcador[company] >= 3 && marcador[company2] >= 3) {
        deuce = true;
      }

      if(marcador[company] > 3 && marcador[company2] > 3){
        marcador[company] = 3
        marcador[company2] = 3
      }
  
      // Mostrar el marcador y la acción
      console.log(`${jugador} - ${marcador[company]}-${marcador[company2]} - ${accion.action} (Game ${juegoActual})`);

      scoreDashData = marcador[company]
      scoreDashData2 = marcador[company2]

      // Verificar si alguien ganó el juego
      // console.log( marcador[company]  + " " + marcador[company2] ) 
      if ((marcador[company] >= 4 || marcador[company2] >= 4) && Math.abs(marcador[company] - marcador[company2]) >= 2) {
        console.log(`Juego para ${marcador[company] > marcador[company2] ? company : company2}`);

        changeServiceBall=!changeServiceBall
        if(marcador[company]>marcador[company2]){

            gameTable[company]++
        }else{
            
            gameTable[company2]++
        }
        // Reiniciar el marcador
        marcador[company] = 0;
        marcador[company2] = 0;
        scoreDashData=0;
        scoreDashData2=0;
        scoreDataGame++;

        // console.log(marcador[company]);
        // console.log(marcador[company2]);
        gameRecord = gameTable[company]
        gameRecord2 = gameTable[company2]
        console.log( company + " " + gameTable[company])
        console.log( company2 + " " + gameTable[company2])
        // console.log( company + " " + gameCompany)
        // console.log( company2 + " " + gameCompany2)
      }
  
      // Verificar si estamos en deuce y se ha roto el empate
      if (deuce && Math.abs(marcador[company] - marcador[company2]) === 1) {
        console.log("Ventaja para " + (marcador[company] > marcador[company2] ? company : company2));
      }
    }
  }
