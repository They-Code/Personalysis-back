const router = require("express").Router();
const awakensRoutes = require("./awakens");

router.param(':some_id', function (req, res, next, id) {
  next();
});

// User routes
router.use("/", awakensRoutes);


module.exports = router;