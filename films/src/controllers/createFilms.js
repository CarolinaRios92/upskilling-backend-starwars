const response = require("../utils/response");
const axios = require("axios");

module.exports = async(req, res) => {
    const data = req.body;
    const newFilm = await axios.post("http://database:8004/Film", data)
    response(res, 201, newFilm.data);
}