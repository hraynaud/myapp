
SparkApp.factory('DataService', function($http) {
  return {
    get: function () {
      return statuses;
    },
    list: function () {
      //getUpdated status here
    },
    put: function(){

    }
  };
});

SparkApp.factory('MockDataService', function($http) {
  return {
    get: function (type) {
      if(type=="statuses"){
        return mockData.statusTotals;
      }else if(type=="ideas"){
        return mockData.ideas;
      }else{
        return mockData.locationTotals;
      }
    },
    list: function () {
      //getUpdated status here
    },
    put: function(){

    }

  };

});
