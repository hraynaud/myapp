
SparkApp.controller('ideasCtrl', function ($scope, Ideas) {
  $scope.ideas = Ideas.get();

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
});
