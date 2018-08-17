	(function () {
    angular
        .module('ShowtimeApp')
        .controller('MovieShowtimesController',MovieShowtimesController);

    function MovieShowtimesController($scope, $location, $http, $routeParams, $filter) { 
    
    	this.date = new Date();
        console.log(this.date);
    	var m1 = (parseInt(this.date.getMonth()) + 1) + "";
 	if(m1.length === 1){
 		m1 = "0" + m1;
 	}
 	var d1 = (parseInt(this.date.getDate())) + "";
 	if(d1.length === 1){
 		d1 = "0" + d1;
 	}
 	var todayDate = this.date.getFullYear() + "-" + m1 + "-" + d1;
 	console.log(todayDate);
        this.date.setDate( this.date.getDate() + 3 );
        console.log(this.date);
       	var m = (parseInt(this.date.getMonth()) + 1) + "";
     	if(m.length === 1){
     		m = "0" + m;
     	}
     	var d = (parseInt(this.date.getDate())) + "";
     	if(d.length === 1){
     		d = "0" + d;
     	}
     	var dateTo = this.date.getFullYear() + "-" + m + "-" + d;
     	console.log(dateTo);
     	this.selectSeats = selectSeats;
    	function init() {
        	cinemaId = $routeParams.cinemaId.substring(1,$routeParams.cinemaId.length);
        	movieId = $routeParams.movieId.substring(1,$routeParams.movieId.length);
        	console.log("in movie showtimes controller");
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
        
        function selectSeats(showtimeId){
        	console.log("in select seats function");
        	$location.url('/seatSelection/:'+showtimeId+'/:'+cinemaId+'/:'+movieId);
        	//"#!findAllShowtimes/cinemaId={{cinema.id}}
        }
    }
})();