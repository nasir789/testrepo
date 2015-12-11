'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let logger = require('morgan');
let wordsController = require('./controller/wordscontroller.js')
// let wordModel = require('./models/words.js'); //this was the original test
let wordModel = require('./models/wordpool.js');
let app = express();
let router = express.Router();
let mongoose = require('mongoose');



app.use(express.static('public'));


app.use(logger('dev'));
app.use(router);
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));
//setting up views
// app.set('views', path.join(__dirname, 'views'));
// app.use('/', express.static(__dirname + '/public/index.html'));

mongoose.connect('mongodb://localhost/wordbank3', function(err) {
  if(err){
    console.log('connection error' +  err);
  } else {
    console.log('connection successful');
  }
});




//Below will be seeding database...
////////////////////////////////////
//original test path////////////////

// router.get('/seed', function(req, res){
//   var user = new wordModel({
//     name: 'another test'
//   });
//   user.save(function(err){
//     if(err) throw err;
//     console.log('user saved');
//     res.json({success: true});
//   });
//
//
// });

/////////////////////////////////////////
/////Seed Path//////////////////////////

router.get('/populate', function(req, res){
  var user = new wordModel({
    name: 'rotavator'
  });
  user.save(function(err){
    if(err) throw err;
    console.log('user saved');
    res.json({success: true});
  });


});

//db config
//route define
// let index = require('index.html');
// app.use('/', index);

// let db = mongoose.connection;
//
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', (callback) => {
//   console.log('mongoose connected');
// });




//root routes//




// router.get('/', (req, res) => {
//   res.send('index')
// });
//


//routes
//below is accessing all the objects or 'words' in seeded database
router.get('/return', wordsController.getAll);



//////





//server config

app.listen(8000);

  // , () => {
  // let host = server.address().address;
  // let port = server.address().port;
//
//   console.log('started');
// });
