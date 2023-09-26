const {catchedAsync} = require("../utils");

module.exports = {
    createCharacter: catchedAsync(require("../controllers/createCharacters")),
    getCharacters: catchedAsync(require("../controllers/getCharacters")),
    getCharacterById: catchedAsync(require("../controllers/getCharacterById")),
}