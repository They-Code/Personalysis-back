const router = require("express").Router();
const axios = require("axios");


router.route('/:phenotype')
    .all(function (req, res, next) {
        // runs for all HTTP verbs first
        // think of it as route specific middleware!
        console.log("phenotype: " + req.params.phenotype + " route");
        next();
    })
    .get(function (req, res, next) {
        console.log(req);
        axios.get('https://genomelink.io/v1/reports/eye-color?population=european', {
            headers: {
                Authorization: "Bearer GENOMELINKTEST"
            }
        }
        )
            .then(function (response) {
                res.json(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    });



module.exports = router;


// router.route('/')
//     .all(function (req, res, next) {

//         next();
//     })
//     .get(function (req, res, next) {
//         console.log(req);
//         axios.get('https://api.yelp.com/v3/businesses/search', {
//             params: {
//                 term: req.query.term,
//                 location: req.query.location
//             },
//             headers: {
//                 Authorization: "Bearer GENOMELINKTEST"
//             }
//         }
//         )
//             .then(function (response) {
//                 res.json(response.data);
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     });