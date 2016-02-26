var myApp = angular.module('mathApp', []);
myApp.factory('mathService', function() {
  var factory = {};
  factory.multiply = function(a, b) {
    return a * b;
  }
  factory.divide = function(a, b) {
    return a / b;
  }
  factory.sum = function(a, b) {
    return eval(a) + eval(b);
  }
  factory.subtract = function(a, b) {
    return a - b;
  }
  return factory;
});
myApp.service('squareService', function(mathService){
  this.multiply = function(x,y) {
    return mathService.multiply(x, y);
  }
  this.add = function(x,y) {
    return mathService.sum(x, y);
  }
  this.subtract = function(x,y) {
    return mathService.subtract(x, y);
  }
  this.divide = function(x,y) {
    return mathService.divide(x, y);
  }
});
myApp.controller('mathServiceController',function($scope, squareService) {
  $scope.multiply = function(){
    $scope.result = squareService.multiply($scope.value1, $scope.value2);
  }
  $scope.divide = function(){
    $scope.result = squareService.divide($scope.value1, $scope.value2);
  }
  $scope.add = function(){
    $scope.result = squareService.add($scope.value1, $scope.value2);
  }
  $scope.subtract = function(){
    $scope.result = squareService.subtract($scope.value1, $scope.value2);
  }
});