var cricketApp = angular.module('cricket', []);

cricketApp.controller('cricketCounter', ['$scope', function($scope){
  $scope.matches;
  $scope.avarage;
  $scope.getRuns = function(matches, average) {
    $scope.runs = matches * average;
  }
}]);