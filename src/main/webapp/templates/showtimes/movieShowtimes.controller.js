	(function () {
    angular
        .module('ShowtimeApp')
        .controller('MovieShowtimesController',MovieShowtimesController);

    function MovieShowtimesController($scope, $location, $http, $routeParams, $filter) { 
    
    	function init() {
        	var cinemaId = $routeParams.cinemaId.substring(1,$routeParams.cinemaId.length);
        	var movieId = $routeParams.movieId.substring(1,$routeParams.movieId.length);
        	console.log("in movie showtimes controller");
        	console.log(cinemaId);
        	
        	
        /*	$http.get('https://api.internationalshowtimes.com/v4/showtimes/?cinema_id='+ cinemaId +'&movie_id='+ movieId +'&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5').
        	then(function(response) {
               console.log(response.data);
            	
            	    
            	});
         */    
            
        };
        init();
    }
})();