var mongoose = require('mongoose');

var StudentSchema   = new mongoose.Schema({
  FirstName: {
       type: String
   },
   LastName: {
       type: String,
   },
   School: {
       type: String, 
   },
   StartDate: {
       type: String,
   }
});

module.exports = mongoose.model('Student', StudentSchema);