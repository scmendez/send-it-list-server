const express = require('express');
const router  = express.Router();

const ClimberModel = require('../models/Climber.model')

router.get('/climberInfo/:climberId', (req, res) => {
  let climberId = req.params.climberId

  ClimberModel.findById(climberId)
    .then((climberInfo) => {
      console.log('climberinfopls', climberInfo)
      res.status(200).json(climberInfo)
    })
    .catch((err) => {
      res.status(500).json({
      error: 'could not populate all projects',
      message: err
    })
  })

})

router.patch('/editUsername/:climberId', (req, res, next) => {
  let climberId = req.params.climberId

  const { username } = req.body;

  ClimberModel.findByIdAndUpdate(climberId, {$set: {username: username}})
    .then(() => {
      ClimberModel.findById(climberId)
        .then((responseAgain) => {
          console.log(responseAgain)
          res.status(200).json(responseAgain)
        })
      
    })
    .catch((err) => {
          console.log(err)
          res.status(500).json({
              error: 'Something went wrong',
              message: err
          })
    }) 
});

module.exports = router;
