const router = require("express").Router();
const usersRoutes = require("./awakens");

router.use("/user", usersRoutes);

module.exports = router;