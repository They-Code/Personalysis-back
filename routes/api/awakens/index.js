const router = require("express").Router();
const yelpRoutes = require("./awakens");

router.param(':yelp_id', function (req, res, next, id) {
  next();
});

// User routes
router.use("/", yelpRoutes);


module.exports = router;