(function () {
    angular
        .module('ShowtimeApp')
        .controller('HomeController',HomeController);

    function HomeController($scope, $location, $http, $routeParams, $rootScope) {    
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
        	   		$http.get('https://api.internationalshowtimes.com/v4/movies/?'+loct+'&limit=10&fields=ratings,synopsis,cast,trailers,id,title,poster_image&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5').
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
