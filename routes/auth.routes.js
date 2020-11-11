const express = require('express')
const router = express.Router()

const bcrypt = require('bcryptjs');

const ClimberModel = require('../models/Climber.model')

const { isLoggedIn } = require('../helpers/auth-helper'); // middleware to check if user is loggedIn

router.post('/signup', (req, res) => {

  const {username, email, password} = req.body;

  if (!username || !email || !password) {
    res.status(500)
      .json({
        errorMessage: 'Please enter username, email and password'
      });
    return;  
  }

  const emailRegex = new RegExp(/^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/);
  if (!emailRegex.test(email)) {
      res.status(500)
        .json({
          errorMessage: 'Email format not correct'
      });
      return;  
  }

  const passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
  if (!passwordRegex.test(password)) {
    res.status(500)
        .json({
          errorMessage: 'Minimum password requirements: 8 characters, a special character, a number, an uppercase letter, and a lowercase letter'
        });
      return;  
  }

  bcrypt.genSalt(12)
    .then((salt) => {
      bcrypt.hash(password, salt)
        .then((passwordHash) => {
          ClimberModel.create({email, username, password: passwordHash})
            .then((climber) => {
              climber.password = '***';
              req.session.loggedInClimber = climber
              res.status(200).json(climber);
            })
            .catch((err) => {
              console.log('ughhh', err)
              if (err.code === 11000) {
                res.status(500)
                .json({
                  errorMessage: 'username or email already exists'
                })
                return;
              } else {
                res.status(500)
                .json({
                  errorMessage: 'looks like today is a high gravity day for you'
                })
                return;
              }
            })
        })
        .catch((err) => {console.log('1', err)})
    })
    .catch((err) => {console.log('2', err)})
})

router.post('/signin', (req, res) => {
  const {email, password} = req.body

  if ( !email || !password) {
    res.status(500).json({
        errorMessage: 'Please enter email and password',
    })
    return;  
  }

  const emailRegex = new RegExp(/^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/);

  if (!emailRegex.test(email)) {
      res.status(500).json({
          errorMessage: 'Email format not correct',
      })
      return;  
  }

  ClimberModel.findOne({email})
    .then((climberData) => {
      bcrypt.compare(password, climberData.password)
        .then((passMatches) => {
          if (passMatches) {
            climberData.password = '***';
            req.session.loggedInClimber = climberData;
            res.status(200).json(climberData)
          } else {
            res.status(500).json({
              errorMessage: 'Password does not match'
            })
            return;
          }
        })
        .catch(() => {
          res.status(500).json({
            errorMessage: 'Password compare error'
          })
          return;
        })
    })
    .catch((err) => {
      res.status(500).json({
        errorMessage: ('Signin error', err)
      })
      return;
    });
});

router.post('/logout', (req, res) => {
  req.session.destroy();
  res
  .status(204)
  .send();
})

router.get('/climber', isLoggedIn, (req, res, next) => {
    res.status(200).json(req.session.loggedInClimber);
});
//this is created so that when the page is refreshed and loggedInUser state gets wiped out, it doesn't
//isLoggedIn is a middleware (a simple function we've created and is being imported at the top) to check if user is logged in

//request is made to /user, goes directly to isLoggedIn function
//if true (see the function), then it goes to the next() [the next block of code is the callback after the middleware]
//if not, it'll throw an error message
//it checks if req.session.loggedInUser exists

module.exports = router;