const http= require('http');
const app = require('./app');


const PORT = process.env.PORT || 5000; // to make it dynamic

const server = http.createServer(app); //creating server

server.listen(PORT,console.log(`server is runing on port ${PORT}`));

