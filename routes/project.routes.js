const express = require('express')
const router = express.Router()
const axios = require('axios')

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

router.get('/mapSearch/:searchedLocation/:searchedRouteType', (req, res) => {
  let searchedLocation = req.params.searchedLocation
  //let searchedRouteType = req.params.searchedRouteType

  //api that transforms city entered into lat/lon
  //create and fill cityLat and cityLon variables from there
  axios.get(`http://open.mapquestapi.com/geocoding/v1/address?key=${process.env.MQ_API_KEY}&location=${searchedLocation}`)
    .then((latLonResponse) => {
      let latLngInfo = latLonResponse.data.results[0].locations[0].latLng
      let cityLat = latLngInfo.lat
      let cityLon = latLngInfo.lng

      axios.get(`https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=${cityLat}&lon=${cityLon}&maxDistance=200&maxResults=100&key=${process.env.MP_API_KEY}`)
        .then((routesResponse) => {
          //console.log(response.data)
          res.status(200).json({routesResponse: routesResponse.data, cityLatLon: latLngInfo});
          console.log(latLngInfo)
        })
    })

})

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

module.exports = router;