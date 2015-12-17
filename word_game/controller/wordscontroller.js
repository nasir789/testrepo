
////////////////////////////////////////////////////
////ANGULAR CONTROLLER/////
////////////////////
var Wordrender = require('../models/wordpool.js');

function getAll(request, response) {
  Wordrender.find(function(error, name) {
    if(error) response.json({message: 'Could not find word'});
    console.log(name + " name object");
    response.json({name:name});
  });
}

module.exports = {
  getAll: getAll
}












///////////////////////////////////////////////////

// module.exports.controller = function(app) {
//
//   app.get("/display", function(req, res) {
//     Word.find().populate('words').exec(function(err, words){
//       if (err) return next(err);
//       res.send(words)
//     });
//   });
//
//
// }
