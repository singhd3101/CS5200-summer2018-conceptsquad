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
        	       console.log(loct);
        	       console.log("chal pada");
        	       cinemaUrl='https://api.internationalshowtimes.com/v4/cinemas/?'+loct+'&limit=10&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5';
        	      console.log(cinemaUrl);
        	      });
        	    });
        	  }
            //$http.get('https://api.internationalshowtimes.com/v4/movies/?countries=US&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5').
        	//$http.get('https://api.internationalshowtimes.com/v4/cinemas/?'+loct+'&limit=10&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5').
        	$http.get('https://api.internationalshowtimes.com/v4/cinemas/?'+ loct +'&distance=10&limit=10&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5').
        	then(function(response) {
                console.log(response.data);
                $scope.allCinemas = response.data;
            });
        }
        
        init();
        
        function showtimeAtCinema(cinemaId){
        	console.log("in showtimecinema function");
        	console.log(cinemaId);
        	$location.url('/findAllShowtimes/:'+cinemaId);
        	//"#!findAllShowtimes/cinemaId={{cinema.id}}
        }
    }
})();
