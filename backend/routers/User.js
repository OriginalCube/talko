const epxress = require("express");
const router = epxress.Router();
const { create, login } = require("../controllers/UserController");

router.post("/create", create);

router.post("/login", login);

module.exports = router;
