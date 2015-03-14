
SparkApp.factory('IdeasByStatus', function($http) {
  var statuses = {
    "planned": 7,
    "considering": 10,
    "inProgress": 3,
    "completed": 55,
    "all": function(){return 100;},
  };

  return {
    get: function () {
      return statuses;
    },
    refresh: function () {
      //getUpdated status here
    },

  };

});


SparkApp.factory('IdeasByLocation', function($http) {
  var locations = [
    {
    "officeId": 1,
    "officeName": "New York",
    "count": 10,
  },
  {
    "officeId": 2,
    "officeName": "Sidney",
    "count": 12,
  }
  ];

  return {
    get: function () {
      return locations;
    },
    refresh: function () {
      //getUpdated status here
    },

  };

});
