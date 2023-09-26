const {Router} = require("express");
const controllers = require("../controllers/index");
const router = Router();

router.get("/", controllers.getFilms);
router.get("/:id", controllers.getFilmById);
router.post("/", controllers.createFilms);

module.exports = router;