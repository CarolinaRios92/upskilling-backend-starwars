const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use("/characters", require("./routes/index"));

// si no encuentra ningun endpoint donde caer va a terminar acá
server.use("*", (req, res) => {
    res.status(404).send("Not found");
})

// es el manejador de errores
server.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({
        error:true, message: err.message
    });
})

module.exports = server;