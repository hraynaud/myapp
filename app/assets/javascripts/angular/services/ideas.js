
SparkApp.factory('Ideas', function($http) {
  var ideas =[
    {
    "owner": {
      "name": "Alex",
      "avatar": "alex.png",
      "location": "Sidney",
      "role": "Programmer",
    },
    "caption": "Free Lunch for everyone",
    "details": "blase blase blase"
  },
  {
    "owner": {
      "name": "herby",
      "avatar": "herby.png",
      "location": "New York",
      "role": null,
    },
    "caption": "Pay Raises for everyone",
    "details": "blase blase blase"
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

    }
  };

});
