
SparkApp.controller('ideasCtrl', function ($scope, Ideas) {

  $scope.ideas =  Ideas.get();
  $scope.idea = {};

  $scope.suggest = function () {
    $scope.toggleModal();
  };


  };

  $scope.upVote = function (idea) {
    $.scope.ideas.upVote(idea);
  };

  $scope.downVote = function (idea) {
    $.scope.ideas.downVote(idea);
  };

  $scope.addComment = function (idea) {
    $scope.ideas.addComment(comment);
  };

  $scope.countForStatus = Ideas.countsByStatus();
  $scope.countForLocation = Ideas.countsByLocation();

  $scope.filter = { "status": {}, "location": {} };
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


    function noSubFilter(subFilterObj) {
      for (var key in subFilterObj) {
        if (subFilterObj[key]) return false;
      }
      return true;
    }

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

