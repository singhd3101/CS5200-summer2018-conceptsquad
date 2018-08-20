(function () {
    angular
        .module('ShowtimeApp')
        .controller('FindAllMoviesController',FindAllMoviesController);

    function FindAllMoviesController($scope, $location, $http, $routeParams, $rootScope) {    
    	var pos;
    	var lat;
    	var long;
    	var loct;
    	var cinemaId;

    	
        function init() {
        	var user = $rootScope.user;
        	//console.log("pogo " + $rootScope.user.userName);
        	$scope.user = $rootScope.user;
        	console.log("user is "+user);
        	console.log("in find all movies");
        	if (navigator.geolocation) {
        	    navigator.geolocation.getCurrentPosition(function(position){
        	      $scope.$apply(function(){
        	       pos = position;
        	       lat = position.coords.latitude;
        	       long = position.coords.longitude;
        	       loct='location='+lat+','+long;
        	       console.log("chal pada");
        	       console.log("location is "+loct);
               		$http.get('https://api.internationalshowtimes.com/v4/movies/?'+loct+'&limit=5&fields=ratings,trailers,id,title,poster_image_thumbnail&apikey=7n4LklKRw0IXbF6fm4aTSF1NqmRPeSZ5').
               		then(function(response) {
                       $scope.allMovies = response.data;
                   });
               		
        	      });
        	    });
        	  }
        }
        init();
        
        
    }
})();
