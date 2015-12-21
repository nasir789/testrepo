angular.module('wordsGame').controller('BankController', BankController);

BankController.$inject = ['$http'];

function BankController($http){
  var self = this;
  self.test = "The Agglutinative Game" //
  self.all = [];
  self.taco="";
  // self.wordRender=['this']//
  self.currentWord="";
  self.currentIndex=0;
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
        self.currentWord = self.all[0].name;
      });

  };

  this.isCorrect = function(word) {

    //looping over go to the next, if match, switch guessed to 'true'
    //then once it's true, fire the function on the front end

      // for (i = 0; i < self.all.length; i++) {
      //   var check = self.all[i].name;
      //   if ( word == check ) {
      //     self.all[i].guessed = true;
      //     this.userInput = '';
      //     // document.getElementById("demo").value = '';
      //     console.log('meow')
      //   }
      // };
  }

  this.isCurrentCorrect= function(word) {
    console.log(word);
    if ( word == self.currentWord ) {
      self.all[self.currentIndex].guessed = true;
      document.getElementById("demo1").value= '';
      // this.userInputNew = '';
      self.currentIndex++;
      self.currentWord = self.all[self.currentIndex].name;
      // document.getElementById("demo1").value = '';
      console.log('meow')
    }
    if ( word !== self.currentWord ) {
      document.getElementById("demo1").style.color = 'red';
      // document.getElementsByClassName("checkWord").style.color = 'red';
      console.log('woof')
    }
  }
}
