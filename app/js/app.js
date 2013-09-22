var app = angular.module('app', []);

app.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
  .when('/', {
      template: '<a href="page1">Page 1</a>',
      controller: "AppCtrl",
    })
    .when('/page1', { template: 'page1.html', controller: 'AppCtrl' })
    .when('/page2', { template: 'page2.html', controller: 'AppCtrl1' })
    .otherwise({
      redirectTo: "/"
    })
});

app.controller("AppCtrl", function ($scope) {
  $scope.model = {
    message: "This is my app!!!!"
  }
});

app.controller("AppCtrl1", function ($scope) {
  $scope.model = {
    message: "This is my pizza page!!!!"
  }
});

app.controller("AppCtrl2", function ($scope, $routeParams) {
  $scope.model = {
    message: $routeParams.message
  }
});
/*
app.directive('eatClick', function() {
    return function(scope, element, attrs) {
     console.log(element);
        
        element.click(function(event) {
          
            event.preventDefault();
        });
        
    }
})
*/