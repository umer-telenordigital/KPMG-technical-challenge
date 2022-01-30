var mongoose = require('mongoose');  
var recordSchema = new mongoose.Schema({  
  name : String,
  address : String,
  phone_number : Number,
  email_address : String
});
mongoose.model('record', recordSchema);

module.exports = mongoose.model('record');