(function () {
    angular
        .module('ShowtimeApp')
        .controller('FindAllCinemasController',FindAllCinemasController);

    function FindAllCinemasController($scope, $location, $http) {    
    	var pos;
    	var lat;
    	var long;
    	var loct;
    	var cinemaUrl;
    	this.showtimeAtCinema = showtimeAtCinema;
    	this.moviesAtCinema = moviesAtCinema;
    		//https://api.internationalshowtimes.com/v4/cinemas/?'+loct+'&limit=10&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5
        function init() {
        	

        	
        	if (navigator.geolocation) {
        	    navigator.geolocation.getCurrentPosition(function(position){
        	      $scope.$apply(function(){
        	       pos = position;
        	       lat = position.coords.latitude;
        	       long = position.coords.longitude;
        	       console.log(position.coords.latitude);
        	       console.log(position.coords.longitude);
        	       loct='location='+lat+','+long;
        	       console.log("chal pada");
        	       console.log("location is "+loct);
               		$http.get('https://api.internationalshowtimes.com/v4/cinemas/?'+loct+'&limit=10&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5').
               		then(function(response) {
                       console.log(response.data);
                       $scope.allCinemas = response.data;
                   });
        	      });
        	    });
        	   
        	  }
            //$http.get('https://api.internationalshowtimes.com/v4/movies/?countries=US&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5').
        	//https://api.internationalshowtimes.com/v4/movies/?location=42.3605,-71.0596&limit=10&fields=synopsis,trailers,id,title,poster_image_thumbnail&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5$http.get('https://api.internationalshowtimes.com/v4/movies/?location='+ lat +','+ long +'&limit=10&fields=synopsis,trailers,id,title,poster_image_thumbnail&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5').        	
        	
        }
        
        init();
        
        function showtimeAtCinema(cinemaId){
        	console.log("in showtimecinema function");
        	console.log(cinemaId);
        	$location.url('/findAllShowtimes/:'+cinemaId);
        	//"#!findAllShowtimes/cinemaId={{cinema.id}}
        }
        
        function moviesAtCinema(cinemaId){
        	console.log("in moviesAtCinema function");
        	console.log(cinemaId);
        	$location.url('/movies/:'+cinemaId);
        	//"#!findAllShowtimes/cinemaId={{cinema.id}}
        }
        
    }
})();
