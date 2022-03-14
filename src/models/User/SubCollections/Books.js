var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Books = new Schema({
  name: {
    type: String
  },
  size: {
    type: Number
  }
});