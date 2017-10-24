const router = require("express").Router();
const yelpRoutes = require("./awakens");

router.param(':some_id', function (req, res, next, id) {
  next();
});

// User routes
router.use("/", awakensRoutes);


module.exports = router;