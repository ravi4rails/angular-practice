// declare a module
var myAppModule = angular.module('myApp', []);
// configure the module.
// in this example we will create a greeting filter
myAppModule.filter('meet', function() {
  return function(name) {
    return 'Hello, ' + name + '!';
  };
});

// myApp is ng-app directive. and the [] is the list of modules on which myApp depends.