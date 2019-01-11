// let's go!
require("dotenv").config({
    path: "variables.env"
});

const createServer = require("./createServer");
console.log("​createServer", createServer);
const db = require("./db");

const server = createServer();

// TODO: use express middleware to handle cookies (JWT)
// TODO: use express middleware to populate current user

server.start({
        cors: {
            credentials: true,
            origin: process.env.FRONTEND_URL
        } 
    },
    config => console.log("Pay no attention to the graphql-yoga express server running on port", config.port)
);