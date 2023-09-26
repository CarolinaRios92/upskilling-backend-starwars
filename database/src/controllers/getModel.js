const store = require("../database/index");
const response = require("../utils/response");

module.exports = async (req, res) => {
    const {model} = req.params;
    const modelResponse = await store[model].list();
    response(res, 200, modelResponse);
}