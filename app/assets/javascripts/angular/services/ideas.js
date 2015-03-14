
SparkApp.factory('Ideas', function($http, IdeasByLocation,IdeasByStatus) {
  var ideas =[
    {
    "owner": {
      "name": "Alex",
      "avatar": "alex.png",
      "location": "Sidney",
      "role": "Programmer",
    },
    "caption": "Free Lunch for everyone",
    "details": "blase blase blase",
    "upVotes": 5,
    "downVotes": 5,
    "commemts": [],
    "status": "considering", 
    "locations": ["New York", "Sidney"], 
  },
  {
    "owner": {
      "name": "herby",
      "avatar": "herby.png",
      "location": "New York",
      "role": null,
    },
    "caption": "Pay Raises for everyone",
    "details": "blase blase blase",
    "upVotes": 7,
    "downVotes": 3, 
    "commemts": [],
    "status": "planned", 
    "locations": ["New York", "Sidney"], 
  },
  ];


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
