angular.module('wordsGame').controller('BankController', BankController);

BankController.$inject = ['$http'];

function BankController($http){
  var self = this;
  self.test = "The Agglutinative Game" //
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

        self.all.forEach(function(word){
          word.guessed = false;
        });
        console.log(self.all)
      });

  };

  this.isCorrect = function(word) {
    // // var element = Document.get the word the users trying to matc


      for (i = 0; i < self.all.length; i++) {
        var check = self.all[i].name;
        if ( word == check ) {
          self.all[i].guessed = true;
          console.log('meow')
        }
      };

    if ( word !== check ) {
      // document.getElementsByClassName("checkWord").style.color = 'red';
      console.log('woof')
      }
  }
}
