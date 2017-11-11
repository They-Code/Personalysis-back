const router = require("express").Router();
const yelpRoutes = require("./awakens");


// TODO: Determine if user has enabled awakens here
router.param(':some_id', function (req, res, next, id) {
  console.log('awakens activation verification')
  next();
});

// User routes
router.use("/", awakensRoutes);


module.exports = router;