var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  address: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  created_at: {
    type: Date
  },
});