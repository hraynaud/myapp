
SparkApp.controller('ideasCtrl', function ($scope, Ideas) {

  $scope.idea = {};
  $scope.modalShown = false;
  $scope.filter = {  "offices": {} };


  $scope.ideas =  Ideas.get();
  var temp = Ideas.countsByStatus();
  $scope.countForStatus = temp; 
  $scope.offices = Ideas.countsByLocation();

  $scope.suggest = function () {
    $scope.toggleModal();
  };


  $scope.submit = function(){
    Ideas.add($scope.idea)
    .then(function(response){
      $scope.modalShown = false;
    },
    function(response){
      alert("barely made it here");
    });

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
  

  $scope.toggleFilter = function(type){
     alert(type);
  };

  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };



  $scope.filterByStatus = function (idea) {
    var matchesAND = true;
    var prop = status;
    function noSubFilter(subFilterObj) {
      for (var key in subFilterObj) {

        if (subFilterObj[key]) return false;
      }
      return true;
    }

    // for ( prop in $scope.filter) {
    //   if (noSubFilter($scope.filter[prop])) {
    //     continue;
    //   }
    //   if (!$scope.filter[prop][idea[prop]]) {

    //     matchesAND = false;
    //     break;
    //   }
    // }
    // return matchesAND;



    /**/
    /*
    // Use this snippet for matching with OR
    //
    //
    */

    function find(val, lookup){


    }

    var matchesOR = true;

    var filteringBy = $scope.filter[prop];
    var selectedId =parseInt(Object.keys(filteringBy)[0], 10);
    var objectToscan = idea[prop];

    // if (noSubFilter($scope.filter[prop])) {
    //   continue;
    // }

    filterHasKey = filteringBy[objectToscan];
    inArry =  objectToscan.indexOf(selectedId) != -1;
    ix = objectToscan.indexOf(selectedId);

    if (!inArry && !filterHasKey) {
      matchesOR = false;
    } else {
      matchesOR = true;
    }

    return matchesOR;
  };






  $scope.filterByOffices = function (idea) {
    // Use this snippet for matching with AND
        // console.log($scope.filter);
    var matchesAND = true;
    var prop;
    function noSubFilter(subFilterObj) {
      for (var key in subFilterObj) {

        if (subFilterObj[key]) return false;
      }
      return true;
    }

    // for ( prop in $scope.filter) {
    //   if (noSubFilter($scope.filter[prop])) {
    //     continue;
    //   }
    //   if (!$scope.filter[prop][idea[prop]]) {

    //     matchesAND = false;
    //     break;
    //   }
    // }
    // return matchesAND;



    /**/
    /*
    // Use this snippet for matching with OR
    //
    //
   */

   function find(val, lookup){


   }

    var matchesOR = true;
    for ( prop in $scope.filter) {

     var filteringBy = $scope.filter[prop];
     var selectedId =parseInt(Object.keys(filteringBy)[0], 10);
     var objectToscan = idea[prop];

      if (noSubFilter($scope.filter[prop])) {
        continue;
      }
      
      filterHasKey = filteringBy[objectToscan];
      inArry =  objectToscan.indexOf(selectedId) != -1;
      ix = objectToscan.indexOf(selectedId);

      if (!inArry && !filterHasKey) {
        matchesOR = false;
      } else {
        matchesOR = true;
        break;
      }
    }
    return matchesOR;
  };

  });
