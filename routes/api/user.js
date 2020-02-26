const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');


// Load User model
const User = require('../../models/user');


// Register
router.post('/register', (req, res) => {
  const { firstname, lastname, email, password, passwordCheck } = req.body;

  if (!firstname || !lastname || !email || !password|| !passwordCheck ) {
    return res.status(400).json('This field is empty');
  }

  if (password != passwordCheck) {
    return res.status(400).json('This does not match!');
  }

  if (password.length < 8) {
    return res.status(400).json('This password needs to be longer.');
  }

      //check is email is already in DB
    User.find(
        { 
            email:email 
        },
        (err, pastUser) => {
            if (err) {
                // // // If there is an Error with Registration
                return res.status(400).json('Error with Registration!')
            } else if (pastUser.length > 0) {
                // // // If the Account exists, send error message
                return res.status(400).json('Error! Account Already Exists!')
            }

            // // Create User Account to send to the Database
            const newUser = new User();

            newUser.firstname = firstname;
            newUser.lastname = lastname;
            newUser.email = email;
            newUser.password = newUser.generateHash(password);
            newUser.save((err, user) => {
                if (err) {
					return res.status(400).json('Server Error');
				}
				return res.status(200).json('Success! Account Created!'); 
            })
        }
     )
})

// Login
router.post('/login', (req, res, next) => {
  const {body} = req;
  const {password} = body;
  let {username} = body;

  // Validation for username and password

  if(!username) {
      return res.status(400).json('Error! Username must be entered!')
  }
  if(!password) {
      return res.status(400).json('Error! Password must be entered!')
  }

  username = username.trim();

// find user in DB

User.find(
    {
        username: username
    },
    (err, users, user) => {
        if(err) {
            return res.status(400).json('Server Error!')
        }
        //if user not found by username
        if(users.length != 1) {
            return res.status(400).json('Error! User not found with this Username!')
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
              // User Matched
              const payload = { 
                  id: user.id, 
                  firstname: user.firstname, 
                  lastname: user.lastname, 
                  username: user.username 
                }; // Create JWT Payload
              
              // Correct User credentials, ensure JWT
              // Sign Token
              jwt.sign(
                payload,
                keys.secretOrKey,
                { expiresIn: 3600 },
                (err, token) => {
                  res.json({
                    success: true,
                    token: 'Bearer ' + token
                  });
                }
              );
            } else {
              errors.password = 'Password incorrect';
              return res.status(400).json(errors);
            }
          });
        });
    });


// return Current User
router.get('/current', passport.authenticate('jwt', {session: false }),
          (req, res) => {
              res.json({
                id: user.id, 
                firstname: user.firstname, 
                lastname: user.lastname, 
                username: user.username 
              });
          }
        );

module.exports = router;
