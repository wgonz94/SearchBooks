//Connect to db with mongodb with heroku deployment
if (process.env.NODE.ENV === "production") {
  module.exports = require('./keys_prod')
} else {
  module.exports = require('./keys_dev')
}