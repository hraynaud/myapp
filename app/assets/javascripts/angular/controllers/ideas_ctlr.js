
SparkApp.controller('ideasCtrl', function ($scope, Ideas, IdeaStatus, IdeasByLocation) {
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

  $scope.statuses = IdeaStatus.get();
  $scope.ideasByLocation = IdeasByLocation.get();
});
