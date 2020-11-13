const express = require('express')
const router = express.Router()
const axios = require('axios')

const ClimbingRouteModel = require('../models/ClimbingRoute.model')
const { isLoggedIn } = require('../helpers/auth-helper');

router.get('/myProjects', isLoggedIn, (req, res) => {
  let climberId = req.session.loggedInClimber._id

  ClimbingRouteModel.find({savedBy: climberId})
    .then((projs) => {
      if (!projs) {res.status(200).json({message: 'No projects yet!'})}
      res.status(200).json(projs)
    })
    .catch((err) => {
      res.status(500).json({
        error: 'could not populate all projects',
        message: err
      })
    })
})

router.get('/mapSearch/:searchedLocation', isLoggedIn, (req, res) => {
  let searchedLocation = req.params.searchedLocation
  //let searchedRouteType = req.params.searchedRouteType

  axios.get(`http://open.mapquestapi.com/geocoding/v1/address?key=${process.env.MQ_API_KEY}&location=${searchedLocation}`)
    .then((latLonResponse) => {
      let latLngInfo = latLonResponse.data.results[0].locations[0].latLng
      let cityLat = latLngInfo.lat
      let cityLon = latLngInfo.lng

      axios.get(`https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=${cityLat}&lon=${cityLon}&maxDistance=100&maxResults=50&key=${process.env.MP_API_KEY}`)
        .then((routesResponse) => {
          //console.log(response.data)
          res.status(200).json({routesResponse: routesResponse.data, cityLatLon: latLngInfo});
          //console.log(latLngInfo)
        })
    })

})

router.get(`/add-climbing-route/:routeId`, isLoggedIn, (req, res) => {
  let routeId = req.params.routeId
  let climberId = req.session.loggedInClimber._id

  axios.get(`https://www.mountainproject.com/data/get-routes?routeIds=${routeId}&key=${process.env.MP_API_KEY}`)
    .then((response) => {
      const { id, name, type, rating, pitches, location, url, imgMedium } = response.data.routes[0]
      console.log(response.data.routes[0])
      const addedRoute = {
        savedBy: climberId,
        routeId: id,
        routeName: name,
        routeType: type,
        routeRating: rating,
        routePitches: pitches,
        routeLocation: location,
        routeURL: url,
        routeImg: imgMedium,
        personalNotes: "",
        dateAccomplished: null,
        listType: 'future'
      } 
      ClimbingRouteModel.create(addedRoute)
        .then((newAddedRoute) => {
            console.log('climbing route added')
            console.log('newAddedRoute', newAddedRoute)
            res.status(200).json(newAddedRoute)
        })

    })

})

router.get(`/details/:routeDbId`, isLoggedIn, (req, res) => {
  let routeDbId = req.params.routeDbId

  ClimbingRouteModel.findById(routeDbId)
    .then((personalRoute) => {
      console.log('personalroute', personalRoute)
      res.status(200).json(personalRoute)
    })

})

router.patch(`/edit/:routeDbId`, isLoggedIn, (req, res) => {
  let routeDbId = req.params.routeDbId

  const { personalNotes, dateAccomplished, listType } = req.body;

  ClimbingRouteModel.findByIdAndUpdate(routeDbId, {$set: {personalNotes: personalNotes, dateAccomplished: dateAccomplished, listType: listType}}, {new: true})
    .then(() => {
        ClimbingRouteModel.findById(routeDbId)
          .then((response) => {
            res.status(200).json(response)
          })

    })
    .catch((err) => {
          console.log(err)
          res.status(500).json({
              error: 'Something went wrong',
              message: err
          })
    }) 
})

router.delete(`/delete/:routeDbId`, isLoggedIn, (req, res) => {
  ClimbingRouteModel.findByIdAndDelete(req.params.routeDbId)
    .then((response) => {
      res.status(200).json(response)
    })
    .catch((err) => {
      res.status(500).json({
          error: 'Something went wrong',
          message: err
      })
    })  
})

module.exports = router;