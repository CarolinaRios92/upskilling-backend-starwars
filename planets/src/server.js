const express = require("express");
const morgan = require("morgan");
const {ClientError} = require("./utils/errors/index");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use("/planets",require("./routes/index"));

server.use("*", (req, res) => {
    throw new ClientError("Not found", 404);
})

server.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({
        error: true,
        message: err.message
    })
})

module.exports = server;