

//this does nothing 


var express = require('express');
var mongoose = require('mongoose');
var request = require('request');

Word = require('../models/words.js');

module.exports.controller = function(app) {

  app.get("/", function(req, res) {
    Word.find().populate('words').exec(function(err, words){
      if (err) return next(err);
      res.send(words)
    });
  });


}
