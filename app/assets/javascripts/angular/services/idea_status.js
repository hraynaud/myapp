
SparkApp.factory('IdeasByStatus', function(DataService) {
  var dataService  = DataService;
  return {
    get: function () {
      return dataService.list("/api/statuses.json");
    },

  };

});


SparkApp.factory('IdeasByLocation', function(DataService) {

  var dataService  = DataService;

  return {
    get: function () {
      return dataService.list("/api/offices.json");
    },

  };

});
