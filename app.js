'use strict';

const myApp = angular.module('funWithStuff', ["ngRoute"]);

myApp.config( ($routeProvider) => {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/song-list.html',
    controller: 'SongController'
  })
  .when('/todo', {
    templateUrl: 'partials/todo-list.html',
    controller: 'TodoController'
  })
  .otherwise('/');
});























myApp.controller("CountController", function($scope) {
  $scope.count = () => 12;
});

myApp.controller("NameController", function($scope) {
  $scope.name = "Broomhilda";
});

myApp.controller("SecondNameController", function($scope) {
  $scope.name = "Larry";
  $scope.wow = "Parent controller gave me this";
})

myApp.controller("TodoController", function($scope) {
  $scope.todos = [
    { name: "Master HTML/CSS/JS", completed: true},
    { name: "Learn AngularJS", completed: false},
    { name: "Get started With ExpressJS", completed: false},
    { name: "Be Awesome!", completed: true}
  ]
});

// simple provider
myApp.value('score', {points: 10});

// Another provider. Also makes data available to our app
myApp.factory("SongFactory", function($q, $http) {

  let getSongs = () => {
    return $q( (resolve, reject) => {
      $http.get('./songs.json')
      .then( (songs) => {
        resolve(songs);
      })
      .catch( (err) => {
        reject(err);
      });
    });
  };

  return { getSongs };
});

myApp.controller("SongController", function($scope, SongFactory) {
  console.log("factory?", SongFactory);
  // $scope.songName = "Sharp Dressed Man"
  SongFactory.getSongs()
  .then( (songsData) => {
    console.log("songsData", songsData );
    $scope.songList = songsData.data.songs;
  });
});







myApp.controller('ScoreController', function($scope, score) {
  //do something that requires the score value
  $scope.scoreCount = score.points;
});

