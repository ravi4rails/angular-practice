var myApp = angular.module('spicyApp', []);

myApp.controller('SpicyController', ['$scope', function($scope) {
  $scope.spice = 'very';
  $scope.customSpice = '';
  $scope.spicy = function(spice) {
    $scope.spice = spice;
  }
}]);
