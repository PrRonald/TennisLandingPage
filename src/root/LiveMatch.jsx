import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Connect to Socket.io server

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