const axios = require("axios");
const {response} = require("../utils/index.js")

module.exports = async (req, res) => {
    const films = await axios.get("http://database:8004/Film")
    response(res, 200, films.data);
}