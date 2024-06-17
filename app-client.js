const ioClient = require('socket.io-client');
const readline = require('readline');

// Connect to the server
const socket = ioClient('http://localhost:8443'); // Assuming the server is running locally on port 3000

// Create readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Listen for the 'connect' event
socket.on('connect', () => {
    console.log('Connected to server');
    // Start reading user input
    rl.prompt();
});

// Listen for incoming messages from the server
socket.on('message', (data) => {
    console.log('Message from server:', data);
});

// Listen for the 'disconnect' event
socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

// Listen for user input
rl.on('line', (input) => {
    // Send the input message to the server
    socket.emit('message', input);
    // Prompt for next input
    rl.prompt();
});

// Handle SIGINT (Ctrl+C) to gracefully disconnect from the server
process.on('SIGINT', () => {
    console.log('Disconnecting from server...');
    socket.disconnect();
    rl.close();
    process.exit();
});
