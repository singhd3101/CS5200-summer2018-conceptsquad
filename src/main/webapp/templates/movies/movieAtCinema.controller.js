(function () {
    angular
        .module('ShowtimeApp')
        .controller('MovieAtCinemaController',MovieAtCinemaController);

    function MovieAtCinemaController($scope, $location, $http, $routeParams, $rootScope) {	
    	var pos;
    	var lat;
    	var long;
    	var loct;
    	var cinemaId;
    	this.moviesShowtime = moviesShowtime;
    	this.moviesShowtime = moviesShowtime;
    	
    	function init() {
    		var user = $rootScope.user;
        	//console.log("pogo " + $rootScope.user.userName);
        	$scope.user = $rootScope.user;
        	console.log("user is "+user);
    		cinemaId = $routeParams.cinemaId.substring(1,$routeParams.cinemaId.length);
    		$http.get('https://api.internationalshowtimes.com/v4/movies/?cinema_id='+cinemaId+'&limit=10&fields=ratings,trailers,id,title,poster_image_thumbnail&apikey=7n4LklKRw0IXbF6fm4aTSF1NqmRPeSZ5').
       		then(function(response) {
       		   $scope.cinemaId = cinemaId;
               $scope.allMoviesAtCinema = response.data;
           });
    	}
    	init();
    	
    	function moviesShowtime(movieId){
        	$location.url('/movieShowtimes/:'+cinemaId+'/movies/:'+movieId);
        }
    }

})();


    
	