	(function () {
    angular
        .module('ShowtimeApp')
        .controller('FindAllShowtimesController',FindAllShowtimesController);

    function FindAllShowtimesController($scope, $location, $http, $routeParams, $filter, $rootScope) {    
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
        	var user = $rootScope.user;
        	//console.log("pogo " + $rootScope.user.userName);
        	$scope.user = $rootScope.user;
        	console.log("user is "+user);
        	cinemaId = $routeParams.cinemaId.substring(1,$routeParams.cinemaId.length);
        	var url1 = 'https://api.internationalshowtimes.com/v4/movies/?countries=US&apikey=7n4LklKRw0IXbF6fm4aTSF1NqmRPeSZ5';
        	var url2 = 'https://api.internationalshowtimes.com/v4/cinemas/?'+loct+'&limit=10&apikey=7n4LklKRw0IXbF6fm4aTSF1NqmRPeSZ5';
        	var url3 = 'http://localhost:8080/#!/findAllShowtimes/cinemaId='+ cinemaId +'&apikey=7n4LklKRw0IXbF6fm4aTSF1NqmRPeSZ5';
        	var url4 = 'https://api.internationalshowtimes.com/v4/showtimes/?append=movies,cinemas&cinema_id='+ cinemaId +'&apikey=7n4LklKRw0IXbF6fm4aTSF1NqmRPeSZ5';
               	
        	$http.get(url4).
        	then(function(response) {
               allMovies = response.data.movies;
               allShowtimes = response.data.showtimes;
               allCinemas = response.data.cinemas;
               $scope.cinemaName=allCinemas;
               angular.forEach(allMovies, function(movie) {
            	    angular.forEach(allShowtimes, function(showtime) {
            	      if(movie.id ==showtime.movie_id) {
            	          var test = {
            	            movieId : showtime.movie_id,
            	            movieName: movie.slug,
            	            start_at: showtime.start_at
            	          }
            	          finalArray.push(test);
            	      }
            	  });
            	});
               $scope.allShowtimes = finalArray;
            });
            
        };
        
        init();
        
        function movieDetails(mId){
        	movieId = mId;
        	$http.get('https://api.internationalshowtimes.com/v4/showtimes/?cinema_id=' +cinemaId+ '&movie_id=' +movieId+ '&apikey=7n4LklKRw0IXbF6fm4aTSF1NqmRPeSZ5').
            then(function(response) {
                $scope.allMovieShowtimes = response.data;
            });
        }
    }
})();