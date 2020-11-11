const express = require('express');
const router  = express.Router();

const ClimberModel = require('../models/Climber.model')


router.patch('/editUsername/:climberId', (req, res, next) => {
  let climberId = req.params.climberId

  const { username } = req.body;

  ClimberModel.findByIdAndUpdate(climberId, {$set: {username: username}})
    .then((response) => {
      res.status(200).json(response)
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
