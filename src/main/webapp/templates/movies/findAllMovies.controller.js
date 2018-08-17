(function () {
    angular
        .module('ShowtimeApp')
        .controller('FindAllMoviesController',FindAllMoviesController);

    function FindAllMoviesController($scope, $location, $http, $routeParams) {    
    	var pos;
    	var lat;
    	var long;
    	var loct;
    	var cinemaId;
        function init() {
        	if (navigator.geolocation) {
        	    navigator.geolocation.getCurrentPosition(function(position){
        	      $scope.$apply(function(){
        	       pos = position;
        	       lat = position.coords.latitude;
        	       long = position.coords.longitude;
        	       loct='location='+lat+','+long;
        	       console.log("chal pada");
        	       console.log("location is "+loct);
               		$http.get('https://api.internationalshowtimes.com/v4/movies/?'+loct+'&limit=10&fields=ratings,trailers,id,title,poster_image_thumbnail&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5').
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
