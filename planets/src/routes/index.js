const {Router} = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", controllers.getPlanets);
router.get("/:id", controllers.getPlanetById);
router.post("/", controllers.createPlanets);

module.exports = router;