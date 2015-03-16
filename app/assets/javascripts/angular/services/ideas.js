
SparkApp.factory('Ideas', function($http, DataService, IdeasByLocation,IdeasByStatus) {
  //var dataService = MockDataService;
  var dataService  = DataService;


  return {
    get: function (route) {
      return dataService.list("ideas.json"); 
    },

    add: function (idea) {
      return dataService.post("ideas.json",idea);
    },

    save: function (idea) {

    },

    countsByLocation: function(){
      return IdeasByLocation.get();
    },

    countsByStatus: function(){
      return IdeasByStatus.get();
    }
  };

});
