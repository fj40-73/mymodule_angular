var app = angular.module('app', []);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: Drupal.settings.mymodule_angular.mymodule_angular_path + '/app/partials/app-home.html',
      controller: "AppCtrl",
    })
    .when('/pizza', {
      templateUrl: Drupal.settings.mymodule_angular.mymodule_angular_path + '/app/partials/app-1.html',
      controller: "AppCtrl1",
    })
    .when('/params/:message', {
      templateUrl: Drupal.settings.mymodule_angular.mymodule_angular_path + '/app/partials/app-1.html',
      controller: "AppCtrl2",
    }) 
    .otherwise({
      redirectTo: "/"
    })
})

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