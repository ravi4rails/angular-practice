var mathApp = angular.module('calculator', []);

mathApp.controller('calculatorController', ['$scope', function($scope) {
  $scope.val1;
  $scope.val2;

  $scope.getSum = function(val1, val2){
    $scope.result = eval(val1) + eval(val2);
  }
  $scope.getSubtraction = function(val1, val2){
    $scope.result = val1 - val2;
  }
  $scope.getMultiplication = function(val1, val2){
    $scope.result = val1 * val2;
  }
  $scope.getDivision = function(val1, val2){
    $scope.result = val1 / val2;
  }
}])