
SparkApp.factory('DataService', function($http, $q) {
  return {
    get: function (route) {
     var result = {};
      $http.get(route)
      .success(function (response) {
         console.log(response);
        // var keys = Object.keys(JSON.stringify(response.data));
        console.log(keys); 
        for (var key in keys) {
          result[key]= response[key];
        }
        alert(result);
      })
        .error(function(){
            
        });
        console.log(result);
        return result;
    },
    list: function (route) {
      var result = [];
      $http.get(route)
      .success(function (response) {
        for (var i = 0, ii = response.length; i < ii; i++) {
          result.push(response[i]);
        }
      })
      .error(function(){

      });
      return result;
    },
    post: function(route, resource){
      return $http.post(route, resource)
      .then(function(response) {
       return response;
      }, function(response) {
        // something went wrong
        return $q.reject(response.data);
      });     
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


