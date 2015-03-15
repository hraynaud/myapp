
SparkApp.factory('Ideas', function($http, DataService, IdeasByLocation,IdeasByStatus) {
    // var ideas = MockDataService.get("ideas"); 
  var ideas = [];
    
  
   

  return {
    get: function (route) {
      return DataService.list("ideas.json"); 
    },

    add: function (idea) {
      return DataService.post("ideas.json",idea);
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
