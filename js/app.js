var myApp = angular.module('spicyApp', []);

myApp.controller('SpicyController', ['$scope', function($scope) {
  $scope.spice = 'very';
  $scope.customSpice = '';
  $scope.spicy = function(spice) {
    $scope.spice = spice;
  }
}]);

myApp.controller('studentController', ['$scope', function($scope) {
  $scope.student ={
    firstName: "",
    lastName: "",

    fullName: function() {
      var studentObject;
      studentObject = $scope.student;
      return studentObject.firstName + ' ' + studentObject.lastName;
    }
  };
}]);