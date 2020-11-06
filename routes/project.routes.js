const express = require('express')
const router = express.Router()

const ClimbingRouteModel = require('../models/ClimbingRoute.model')
const { isLoggedIn } = require('../helpers/auth-helper');

router.get('/myProjects', (req, res) => {
  let climberId = req.session.loggedInClimber._id

  ClimbingRouteModel.find({savedBy: climberId})
    .then((projs) => {
      res.status(200).json(projs)
    })
    .catch((err) => {
      res.status(500).json({
        error: 'could not populate all projects',
        message: err
      })
    })
})

// router.get('/mapSearch/:location/:routeType', (req, res) => {
//   let location = req.params.location
//   let routeType = req.params.routeType

//   let options = {
//     method: 'GET',
//     url: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
//     params: {location: ${location}},
//     headers: {
//       'x-rapidapi-key': 'SIGN-UP-FOR-KEY',
//       'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
//     }
//   };

//   axios.request(options)
//     .then((response) => {
//     console.log(response.data);
//   })

//   axios.get(`https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=40.03&lon=-105.25&maxDistance=200&key=${process.env.API_KEY}`)
// })