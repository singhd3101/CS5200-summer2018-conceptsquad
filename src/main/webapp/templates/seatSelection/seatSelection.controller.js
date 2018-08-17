	(function () {
    angular
        .module('ShowtimeApp')
        .controller('SeatSelectionController',SeatSelectionController);

    function SeatSelectionController($scope, $location, $http, $routeParams, $filter) { 
    
    	function init() {
    		
    		$scope.showtimeId = $routeParams.showtimeId.substring(1,$routeParams.showtimeId.length);
    		$scope.cinemaId = $routeParams.cinemaId.substring(1,$routeParams.cinemaId.length);
    		$scope.movieId = $routeParams.movieId.substring(1,$routeParams.movieId.length);
        	console.log("in seat selection controller");
        	console.log('https://api.internationalshowtimes.com/v4/showtimes/?append=movies,cinemas&cinema_id='+ cinemaId +'&movie_id='+ movieId +'&time_to='+ dateTo +'&movie_fields=ratings,trailers,id,title,poster_image&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5');
        	$http.get('https://api.internationalshowtimes.com/v4/showtimes/?append=movies,cinemas&cinema_id='+ cinemaId +'&movie_id='+ movieId +'&time_to='+ dateTo +'&movie_fields=ratings,trailers,id,title,poster_image&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5').
        	then(function(response) {
               console.log(response.data);   
               $scope.showtimes=response.data.showtimes;
               $scope.movies = response.data.movies;
               $scope.cinemas = response.data.cinemas;

            	});
             
            
        };
        init();
    }
})();