const router = require("express").Router();
const userAwakensRoutes = require("./awakens");

// TODO: determine if user has access to this route
router.param(':user_id', function (req, res, next, id) {
    // TODO: determin if user has access to this  (i.e. event-user id associated with user id)
    // aka if the current user doesnt have an access token corresponding to this user id, return 404
    console.log("overall user verification?");
    next();
  });

router.use("/:user_id/awakens", userAwakensRoutes);

// router.use("/:user_id/watson", userWatsonRoutes);

module.exports = router;