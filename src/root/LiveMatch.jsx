import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import { useSelector } from "react-redux";

const socket = io("http://localhost:8443"); // Connect to Socket.io server

var scoreDashData = "0";
var scoreDashData2 = "0";
var scoreDataGame = 0;
var gameRecord = 0;
var gameRecord2 = 0;
var changeServiceBall = false;
var player = "";
var player2 = "";

export const LiveMatch = (props) => {
  const { id } = useParams();

  const datas = useSelector(state => state.player.data);

  const [player, setPlayer] = useState("")
  const [player2, setPlayer2] = useState("")
  const [products, setProducts] = useState([
    {
      images: [],
      languages: [
        { english: "" },
        { spanish: "" },
        { german: "" },
        { french: "" },
        { italian: "" },
        { portuguese: "" },
      ],
      actions: [
        {
          id: "1715702419294",
          date: "2024-05-20 21:37:59",
          actionId: "1716255479374",
          action: "SERVICE_FAULT",
          status: true,
          player: "Carlos Florentino",
          game: 1,
          score: "0-0",
          gamescore: "0-0",
        },
        {
          id: "1715702419294",
          date: "2024-05-20 21:38:00",
          actionId: "1716255480117",
          action: "ACE",
          status: true,
          player: "Carlos Florentino",
          game: 2,
          score: "0-0",
          gamescore: "0-0",
        },
        {
          id: "1715702419294",
          date: "2024-05-20 21:38:00",
          actionId: "1716255480117",
          action: "ACE",
          status: true,
          player: "Carlos Florentino",
          game: 2,
          score: "0-0",
          gamescore: "0-0",
        },
      ],
      _id: "664352312fd3f48a1aec96ff",
      id: "1715702419294",
      date: "2024-05-14 12:00:19",
      description: "Prospect_Open24_CarlosFlorentino_VS_AldoLee",
      company: "Carlos Florentino",
      company2: "Aldo Lee",
      set: "",
      game: 2,
      visit: 3,
      court: "",
      tiebreak: "5",
      style: "",
      category: "Prospect_Open24",
      favorite: false,
      hidden: false,
      image: "Prospect_Open24.JPG",
      serving: "Player_1",
      __v: 0,
    },
  ]);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {

    let filteredData = datas.filter(
      (data, index) =>
        data.id.toLowerCase().indexOf(id.toLowerCase()) !== -1
    );

    console.log(filteredData)
    if(filteredData.length > 0){
      setPlayer(filteredData[0].company)
      setPlayer2(filteredData[0].company2)
      console.log(filteredData[0].company)
    }
  

    socket.on("message", (data) => {
      console.log(data);
      setMessages((prevMessages) => [...prevMessages, data]);

      setProducts((prevProducts) => {
        const updatedProducts = [...prevProducts];
        const productIndex = updatedProducts.findIndex(
          (product) => product.id === id
        );
        if (productIndex !== -1) {
          updatedProducts[productIndex].actions.push(JSON.parse(data));
        }
        return updatedProducts;
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleMessageSend = () => {
    socket.emit("message", input);
    setInput("");
  };

  console.log(products);
  const result = Array.isArray(products)
    ? products.flatMap((data) => (data.actions ? data.actions : []))
    : [];

  const filteredResult = result.filter((data) => data.id === "1715702419294");

  console.log(filteredResult);

  // Call procesarDatos with filteredResult
  procesarDatos(filteredResult, player, player2);

  let scoreNote = ["0", "15", "30", "40", "Adv"];
  let scoreField = scoreNote[scoreDashData] + "-" + scoreNote[scoreDashData2];
  console.log(scoreField);

  return (
    <section className="w-full h-[100vh] lg:w-full lg:h-[100vh] bg-blue-950">
      <div className="content-center lg:content-center">
        <div className="flex flex-row lg:flex lg:flex-row">
          <div className="w-1/2">
            <div className="w-[150px] h-[110px] lg:w-[500px] lg:h-[50vh] border border-white m-5">
              <div className="text-center">
                <div className="p-5 lg:p-10">
                  <h1 className="font-bold text-yellow-500 text-4xl">{scoreNote[scoreDashData]}</h1>
                </div>
                <h1 className="font-bold text-white">{player}</h1>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="w-[150px] h-[110px] lg:w-[500px] lg:h-[50vh] border border-white m-5">
              <div className="text-center">
                <div className="p-5 lg:p-10">
                  <h1 className="font-bold text-yellow-500 text-4xl">{scoreNote[scoreDashData2]}</h1>
                </div>
                <h1 className="font-bold text-white">{player2}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row lg:flex lg:flex-row">
          <div className="w-full lg:w-[100%]">
            <div className="text-center lg:text-center">
              <h1 className="text-white text-2xl font-bold">{gameRecord +" - "+ gameRecord2}</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row lg:flex lg:flex-row">
          <div className="lg:w-[100%]">
            <div className="text-center lg:text-center">
              <h1 className="text-white">Socket.io Chat</h1>
              <div>
                {messages.map((message, index) => (
                  <p key={index}>{message}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const procesarDatos = (datos, company, company2) => {
  let marcador = { [company]: 0, [company2]: 0 };
  let gameTable = { [company]: 0, [company2]: 0 };
  let gameCompany = 0;
  let gameCompany2 = 0;
  let juegoActual = 0;
  let deuce = false;

  for (const accion of datos) {
    const jugador = accion.player;
    const juego = accion.game;

    if (juego !== juegoActual) {
      juegoActual = juego;
      deuce = false;
    }

    switch (accion.action) {
      case "WINNER":
      case "ACE":
        marcador[jugador]++;
        break;
      case "DOUBLE_FAULT":
      case "FORCED_ERROR":
      case "UNFORCED_ERROR":
      case "RETURN_ERROR":
        marcador[jugador === company ? company2 : company]++;
        break;
    }

    if (marcador[company] >= 3 && marcador[company2] >= 3) {
      deuce = true;
    }

    if (marcador[company] > 3 && marcador[company2] > 3) {
      marcador[company] = 3;
      marcador[company2] = 3;
    }

    console.log(
      `${jugador} - ${marcador[company]}-${marcador[company2]} - ${accion.action} (Game ${juegoActual})`
    );

    scoreDashData = marcador[company];
    scoreDashData2 = marcador[company2];

    if (
      (marcador[company] >= 4 || marcador[company2] >= 4) &&
      Math.abs(marcador[company] - marcador[company2]) >= 2
    ) {
      console.log(
        `Juego para ${
          marcador[company] > marcador[company2] ? company : company2
        }`
      );

      changeServiceBall = !changeServiceBall;
      if (marcador[company] > marcador[company2]) {
        gameTable[company]++;
      } else {
        gameTable[company2]++;
      }

      marcador[company] = 0;
      marcador[company2] = 0;
      scoreDashData = 0;
      scoreDashData2 = 0;
      scoreDataGame++;

      gameRecord = gameTable[company];
      gameRecord2 = gameTable[company2];
      console.log(company + " " + gameTable[company]);
      console.log(company2 + " " + gameTable[company2]);
    }

    if (deuce && Math.abs(marcador[company] - marcador[company2]) === 1) {
      console.log(
        "Ventaja para " +
          (marcador[company] > marcador[company2] ? company : company2)
      );
    }
  }
};
