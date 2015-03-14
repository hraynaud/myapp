
SparkApp.controller('ideasCtrl', function ($scope, Ideas) {
  $scope.ideas = Ideas.get();


  $scope.save = function (idea) {
    ideas.save(idea);
  };

  $scope.add = function (idea) {
    ideas.add(idea);
  };

  $scope.remove = function (idea) {
    ideas.remove(idea);
  };
});
