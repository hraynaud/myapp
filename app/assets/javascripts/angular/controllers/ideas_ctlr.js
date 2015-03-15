
SparkApp.controller('ideasCtrl', function ($scope, Ideas) {
  var ideas =[];

  $scope.ideas =  Ideas.get();

  if (ideas.length === 0){
    for (var i = 0, ii = ideas.length; i < ii; i++) {
     ideas.push(response[i]);
    }
  } 


  $scope.save = function (idea) {
    ideas.save(idea);
  };

  $scope.add = function (idea) {
    ideas.add(idea);
  };

  $scope.suggest = function () {
    var idea = window.prompt("what is your idea");
  };

  $scope.remove = function (idea) {
    ideas.remove(idea);
  };

  $scope.countForStatus = Ideas.countsByStatus();
  $scope.countForLocation = Ideas.countsByLocation();

  $scope.filter = { "status": {}, "location": {} };
  $scope.toggle = function(type){
     alert(type);
  };


  $scope.filterByProperties = function (idea) {
    // Use this snippet for matching with AND
    var matchesAND = true;
    for (var prop in $scope.filter) {
      if (noSubFilter($scope.filter[prop])) continue;
      if (!$scope.filter[prop][idea[prop]]) {
        matchesAND = false;
        break;
      }
    }
    return matchesAND;
    /**/
    /*
    // Use this snippet for matching with OR
    var matchesOR = true;
    for (var prop in $scope.filter) {
    if (noSubFilter($scope.filter[prop])) continue;
    if (!$scope.filter[prop][wine[prop]]) {
    matchesOR = false;
    } else {
    matchesOR = true;
    break;
    }
    }
    return matchesOR;
    /**/
  };

    function noSubFilter(subFilterObj) {
      for (var key in subFilterObj) {
        if (subFilterObj[key]) return false;
      }
      return true;
    }
});
