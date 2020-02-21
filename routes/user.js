const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

// Load User model
const User = require('../models/user');


// Register
router.post('/register', (req, res) => {
  const { firstname, lastname, email, password, passwordCheck } = req.body;

  if (!firstname || !lastname || !email || !password|| !passwordCheck ) {
    return res.send({ 
        message: 'Error! This cannot be left blank!'
    });
  }

  if (password != passwordCheck) {
    return res.send({
         message: 'Passwords do not match' 
    });
  }

  if (password.length < 8) {
    return res.send({
         message: 'This Password must be at least 8 characters' 
    });
  }

      //check is email is already in DB
    User.find(
        { 
            email:email 
        },
        (err, pastUser) => {
            if (err) {
                // // // If there is an Error with Registration
                return res.send({
                    message: 'Error: Server Error',
                    success: false
                });
            } else if (pastUser.length > 0) {
                // // // If the Account exists, send error message
                return res.send({
                    message: 'Error: Account Already Exists!',
                    success: false
                });
            }

            // // Create User Account to send to the Database
            const newUser = new User();

            newUser.firstname = firstname;
            newUser.lastname = lastname;
            newUser.email = email;
            newUser.password = newUser.generateHash(password);
            newUser.save((err, user) => {
                if (err) {
					return res.send({
						success: false,
						message: 'Error: Server Error.'
					});
				}
				return res.send({
					success: true,
					message: 'Account Created.'
				}); 
            })
        }
     )
})

// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});

module.exports = router;
