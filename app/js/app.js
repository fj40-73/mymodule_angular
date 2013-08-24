app = angular.module('myApp', []);

app.filter('unixtime', function() {
  return function(timestamp) {
    return new Date(timestamp*1000);
  };
});

app.factory('Drupal', [function(){
  return Drupal.settings;
}]);

app.controller('Ctrl1', ['$scope', 'Drupal', function($scope, Drupal) {
  $scope.data = Drupal.mymodule_angular;
  console.log($scope.data);
}]);


app.directive('zippy', ['Drupal', function(Drupal) {
  return {
    restrict:"E",
    transclude:true,
    scope:{
      title:"@"
    },
    templateUrl:Drupal.mymodule_angular.mymodule_angular_path + '/app/partials/zippy.html',
    link: function (scope) {
      scope.isContentVisible = false;
      scope.toggleContent = function () {
        scope.isContentVisible = !scope.isContentVisible;
      }
    }
  }
}]);
