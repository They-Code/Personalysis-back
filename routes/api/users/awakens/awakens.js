const router = require("express").Router();
const axios = require("axios");
var db = require("../../../../models")


// TODO: right a root level function that makes consecutive axios calls 

// ideally this is called once and then we save it in our database
router.route('/')
.all(function (req, res, next) {
    req.body.userID = req.baseUrl.substring(req.baseUrl.indexOf("user/") + 8, 
    req.baseUrl.indexOf("/phenotype"));

    //should also find a way to get the appropriate population, maybe make this a database call

    //also at some point we need to add the access token that we get to be used for auth
    
    
    // TODO: check if Awakens information in database, if so we are not making this expensive API call
    next();
})
.get(function (req, res, next) {
    console.log(req);
    // concurrent axios request, TODO: at somepoint clean this up so its more flexible
    axios.all([
        axios.get('https://genomelink.io/v1/reports/eye-color?population=european', {
            headers: {
                Authorization: "Bearer GENOMELINKTEST"
            }
        }),
        axios.get('https://genomelink.io/v1/reports/eye-color?population=european', {
            headers: {
                Authorization: "Bearer GENOMELINKTEST"
            }
        }),
        axios.get('https://genomelink.io/v1/reports/eye-color?population=european', {
            headers: {
                Authorization: "Bearer GENOMELINKTEST"
            }
        }),
        axios.get('https://genomelink.io/v1/reports/eye-color?population=european', {
            headers: {
                Authorization: "Bearer GENOMELINKTEST"
            }
        }),
        axios.get('https://genomelink.io/v1/reports/eye-color?population=european', {
            headers: {
                Authorization: "Bearer GENOMELINKTEST"
            }
        }),
        axios.get('https://genomelink.io/v1/reports/eye-color?population=european', {
            headers: {
                Authorization: "Bearer GENOMELINKTEST"
            }
        }),
        axios.get('https://genomelink.io/v1/reports/eye-color?population=european', {
            headers: {
                Authorization: "Bearer GENOMELINKTEST"
            }
        }),
        axios.get('https://genomelink.io/v1/reports/eye-color?population=european', {
            headers: {
                Authorization: "Bearer GENOMELINKTEST"
            }
        }),
        axios.get('https://genomelink.io/v1/reports/eye-color?population=european', {
            headers: {
                Authorization: "Bearer GENOMELINKTEST"
            }
        }),
        axios.get('https://genomelink.io/v1/reports/eye-color?population=european', {
            headers: {
                Authorization: "Bearer GENOMELINKTEST"
            }
        })
    ])
        .then(axios.spread(function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
            // res.json(response.data);
            // TODO: combine each of the phenotypes from the concurrent axios 
            // request into a single json
        }))
        .catch(function (error) {
            console.log(error);
        });
});


router.route('/:phenotype')
    .all(function (req, res, next) {
        // runs for all HTTP verbs first
        // think of it as route specific middleware!
        console.log("phenotype: " + req.params.phenotype + " route");

        req.body.userID = req.baseUrl.substring(req.baseUrl.indexOf("user/") + 8, 
            req.baseUrl.indexOf("/phenotype"));
        
        //should also find a way to get the appropriate population, maybe make this a database call

        //also at some point we need to add the access token that we get to be used for auth

        console.log(req.body.userID)
        
        next();
        
    })
    .get(function (req, res, next) {
        console.log(req);
        axios.get('https://genomelink.io/v1/reports/' + req.params.phenotype 
        + '?population=european', {
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


