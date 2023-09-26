const store = require("../database/index");
const {response} = require("../utils/index");

module.exports = async(req, res) => {
    const {model, id} = req.params;
    const modelResponse = await store[model].get(id);
    response(res, 200, modelResponse)
}