const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path'); // Import path module

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 8443;

// Serve the React app (assuming it's built and located in the 'client/build' directory)
app.use(express.static(path.join(__dirname, 'my-app', 'build')));

// Socket.io connection handling
io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('message', (data) => {
        console.log('message received:', data);
        io.emit('message', data); // Broadcast message to all connected clients
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

// Function to send a message from the server to all connected clients
function sendServerMessage(message) {
    io.emit('message', message);
}

// Example of sending a message from the server
setTimeout(() => {
    sendServerMessage('This is a message from the server!');
}, 5000); // Sending message after 5 seconds as an example

// Route handler for the root route ("/")
app.get('/', (req, res) => {
    // Serve the index.html file of the React app
    res.sendFile(path.join(__dirname, 'my-app', 'build', 'index.html'));
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
