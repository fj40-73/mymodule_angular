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
  //console.log($scope.data);
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






/*
node.module('nodelist', ['node', 'nodes']).
  config(function($routeProvider) {
    $routeProvider.
      when('/', {controller:ListCtrl, templateUrl: Drupal.settings.angularjsApp.basePath + '/angular/nodes/list'}).
      otherwise({redirectTo:'/'});
  });
  
  
  
  function ListCtrl($scope, Nodes, Node) {
  // Init local cache.
  $scope.cache = {};

  var currentClass = this.constructor.name;
  // Set defaule values.
  if (!Drupal.settings.angularjs.hasOwnProperty(currentClass)) {
    return;
  }

  var values = Drupal.settings.angularjs[currentClass];
  angular.forEach(values, function(value, key) {
    $scope[key] = value;
  });

  $scope.promote = function(node, newValue) {
    var update = new Node();
    update.promote = newValue;
    update.nid = node.nid;
    update.update();
    node.promote = newValue;
  }

  $scope.filterNodeType = function() {
    var nodeType = $scope.nodeType.selected;
    $scope.cache[nodeType] = $scope.cache[nodeType] || {};
    if ($scope.cache[nodeType].list) {
      // Get values from cache.
      $scope.nodes = $scope.cache[nodeType];
    }
    else {
      // Call server.
      $scope.nodes = Nodes.get({limit: 5, type: $scope.nodeType.selected});
      $scope.cache[nodeType] = $scope.nodes;
    }

  }

  // Invoke the filter.
  $scope.filterNodeType();
}
*/