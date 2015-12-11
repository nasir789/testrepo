angular.module('wordsGame', ['ui.router']).config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('display', {
      url: "/return",
      templateUrl: "index.html"
    });

  $stateProvider
    .state('user', {
      url: "/user",
      templateUrl: "user.html"
    })

    $urlRouterProvider.otherwise("/");

}
