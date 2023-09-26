const {catchedAsync} = require("../utils/index");

module.exports = {
    postModel: catchedAsync(require("./postModel")),
    getModel: catchedAsync(require("./getModel")),
    getModelById: catchedAsync(require("./getModelById"))
}