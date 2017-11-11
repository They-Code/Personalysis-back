const router = require("express".Router)();
var db = require("../../../models")

router.route('/')
.all(function (req, res, next) {
  // runs for all HTTP verbs first
  // think of it as route specific middleware!
  console.log("user route");
  next();
})
.get(function (req, res, next) {
  db.User.findAll({}).then(function (dbUser) {
    res.json(dbUser);
  });
})
.post(function (req, res, next) {
  db.User.create(req.body).then(function (dbUser) {
    res.json(dbUser);
  });
});

router.route('/:user_id')
.all(function (req, res, next) {
  // runs for all HTTP verbs first
  // think of it as route specific middleware!
  console.log("user id: " + req.params.user_id + " route");
  next();
})
.get(function (req, res, next) {

    // gets a specific user id. 
  db.User.findOne({
    where: {
      id: req.params.user_id
    }
  }).then(function (dbUser) {
    res.json(dbUser);
  });
})
    // since we'll be placing the user id 
.put(function (req, res, next) {
  db.User.update(
    req.body,
    {
      where: {
        id: req.params.user_id
      }
    }).then(function (dbUser) {
      db.User.findOne({
        where: {
          id: req.params.user_id
        }
      }).then(function (dbUser) {
        res.json(dbUser);
      });
    });
})
.delete(function (req, res, next) {
  db.User.destroy({
    where: {
      id: req.params.user_id
    }
  }).then(function (dbUser) {
    res.json(dbUser);
  });
});

// Idea is to have user specific api access to information

// router.route('/:user_id/shindig)
// .all(function (req, res, next) {
//   // runs for all HTTP verbs first
//   // think of it as route specific middleware!
//   next();
// })
// .get(function (req, res, next) {
//   res.json("return all shindigs for the user");
// });
