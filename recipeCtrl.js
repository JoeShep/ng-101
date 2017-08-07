'use strict';

myApp.controller('RecipeController', function($scope, $http) {
  $scope.message = "Hello, Food!";

  $scope.searchForChicken = () => {
    $http.get(`http://localhost:5000/api/search/'shredded chicken'`)
    .then( (data) => {
      console.log("data", data );
    })
    .catch( (err) => {
      console.log("error", err);
    });
  };

  $scope.searchForRecipe = () => {
    $http.get(`http://localhost:5000/api/get/35171`)
    .then( (data) => {
      console.log("data", data );
    })
    .catch( (err) => {
      console.log("error", err);
    });
  }
});
