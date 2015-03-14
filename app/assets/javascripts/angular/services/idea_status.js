
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


SparkApp.factory('IdeasByLocation', function(MockDataService) {


  return {
    get: function () {
       return MockDataService.get("locations");
    },
    refresh: function () {
      //getUpdated status here
    },

  };

});
