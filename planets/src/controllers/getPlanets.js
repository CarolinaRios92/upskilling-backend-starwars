const {response} = require("../utils/index.js");
const axios = require("axios");

module.exports = async (req, res) => {
    const planets = await axios.get("http://database:8004/Planet")
    response(res, 200, planets.data)
}