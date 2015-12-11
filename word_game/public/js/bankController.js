angular.module('wordsGame').controller('BankController', BankController);

BankController.$inject = ['$http'];

function BankController($http){
  var self = this;
  self.test = "this is a test" //
  self.all = [];
  self.taco="";
  // self.wordRender=['this']//
  getWords();
  function getWords(){
    $http
      .get('http://localhost:8000/return')
      .then(function(response){
        console.log(response.data.name);
        self.all = response.data.name;
      });

  }
}
