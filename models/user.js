const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

//  Schema Methods
//  //  Generates a Hash based on the password passed in
UserSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};
//  //  Checks to see if given password is valid
// UserSchema.methods.validPassword = function(password) {
// 	return bcrypt.compareSync(password, this.password);
// };

//  Exports
//  //  Declares User using the UserSchema
const User = mongoose.model('User', UserSchema);
//  //  Exports the User Model
module.exports = User;