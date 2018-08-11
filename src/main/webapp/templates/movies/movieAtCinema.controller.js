(function () {
    angular
        .module('ShowtimeApp')
        .controller('MovieAtCinemaController',MovieAtCinemaController);

    function MovieAtCinemaController($scope, $location, $http, $routeParams) {    
    	var pos;
    	var lat;
    	var long;
    	var loct;
    	var cinemaId;
        function init() {
        	
        	cinemaId = $routeParams.cinemaId.substring(1,$routeParams.cinemaId.length);
        	console.log("cinema id is "+cinemaId);
                	console.log("cinema id is "+cinemaId);
                	$http.get('https://api.internationalshowtimes.com/v4/movies/?cinema_id='+cinemaId+'&limit=10&fields=synopsis,trailers,id,title,poster_image_thumbnail&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5').
               		then(function(response) {
                       console.log(response.data);
                       $scope.allMoviesAtCinema = response.data;
                   });
        	   
        	  }
        }
        init();

})();