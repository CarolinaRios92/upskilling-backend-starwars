const {response} = require("../utils/index.js");
const axios = require("axios");

module.exports = async (req, res) => {
    const {id} = req.params;
    const planet = await axios.get("http://database:8004/Planet/"+id)
    response(res, 200, planet.data);
}