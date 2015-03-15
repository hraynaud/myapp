
SparkApp.factory('IdeasByStatus', function(MockDataService) {
  return {
    get: function () {
      //Fix later
       MockDataService.get("statuses");
    },
    refresh: function () {
      //getUpdated status here
    },

  };

});


SparkApp.factory('IdeasByLocation', function(DataService) {

  var dataService  = DataService;

  return {
    get: function () {
       return dataService.list("/api/offices.json");
    },
    refresh: function () {
      //getUpdated status here
    },

  };

});
