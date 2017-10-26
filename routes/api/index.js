const router = require("express").Router();
const awakensRoutes = require("./awakens");

router.use("/awakens", awakensRoutes);

module.exports = router;
