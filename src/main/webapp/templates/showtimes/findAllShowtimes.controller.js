	(function () {
    angular
        .module('ShowtimeApp')
        .controller('FindAllShowtimesController',FindAllShowtimesController);

    function FindAllShowtimesController($scope, $location, $http, $routeParams, $filter) {    
    	var pos;
    	var lat;
    	var long;
    	var loct;
    	var cinemaUrl = "";
    	var cinemaId = ""; 
    	var id;
    	var movieId;
    	var finalArray = [];
    	var allMovies;
    	var allShowtimes;
    	var allCinemas;
    	this.movieDetails = movieDetails;
    	var count;
    	
        function init() {
        	cinemaId = $routeParams.cinemaId.substring(1,$routeParams.cinemaId.length);
        	var url1 = 'https://api.internationalshowtimes.com/v4/movies/?countries=US&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5';
        	var url2 = 'https://api.internationalshowtimes.com/v4/cinemas/?'+loct+'&limit=10&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5';
        	var url3 = 'http://localhost:8080/#!/findAllShowtimes/cinemaId='+ cinemaId +'&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5';
        	var url4 = 'https://api.internationalshowtimes.com/v4/showtimes/?append=movies,cinemas&cinema_id='+ cinemaId +'&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5';
        	console.log("inshowtimes controller");
        	console.log(cinemaId);
        	
        	
        	$http.get(url4).
        	then(function(response) {
               allMovies = response.data.movies;
               console.log(allMovies);
               allShowtimes = response.data.showtimes;
               console.log(allShowtimes);
               allCinemas = response.data.cinemas;
               console.log(allCinemas);
               $scope.cinemaName=allCinemas;
               console.log("name is "+allCinemas[0].name);
              // $scope.cinemaName = 
               angular.forEach(allMovies, function(movie) {
            	    angular.forEach(allShowtimes, function(showtime) {
            	      if(movie.id ==showtime.movie_id) {
            	          var test = {
            	            movieId : showtime.movie_id,
            	            movieName: movie.slug,
            	            start_at: showtime.start_at,
            	            count:showtime.movie_id.count
            	          }
            	          finalArray.push(test);
            	          
            	      }
            	  });
            	    
            	});
               $scope.allShowtimes = finalArray;
               console.log(finalArray);
              console.log($scope.cinemaName);
            });
            
        };
        init();
        function movieDetails(mId){
        	movieId = mId;
        	$http.get('https://api.internationalshowtimes.com/v4/showtimes/?cinema_id=' +cinemaId+ '&movie_id=' +movieId+ '&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5').
            then(function(response) {
            	console.log(response.data);
            	console.log("inside movie details");
                $scope.allMovieShowtimes = response.data;
            });
        }
    }
})();
