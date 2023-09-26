const store = require("../database/index");
const {response} = require("../utils/index");

module.exports = async(req, res) => {
    const {model} = req.params;
    const data = req.body;
    const modelResponse = await store[model].insert(data);
    response(res, 200, modelResponse);
}