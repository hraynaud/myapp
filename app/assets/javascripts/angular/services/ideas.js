
SparkApp.factory('Ideas', function($http, MockDataService, IdeasByLocation,IdeasByStatus) {
    var ideas = MockDataService.get("ideas"); 


  return {
    get: function () {
      return ideas;
    },
    add: function (idea) {
      ideas.push(idea);
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
