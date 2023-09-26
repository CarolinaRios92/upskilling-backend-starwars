const {Router} = require("express");
const controllers = require("../controllers/index");
const {validateModel} = require("../middlewares/index");

const router = Router();

router.get("/:model", validateModel, controllers.getModel);

router.get("/:model/:id", validateModel, controllers.getModelById);

router.post("/:model", validateModel, controllers.postModel);

module.exports = router;