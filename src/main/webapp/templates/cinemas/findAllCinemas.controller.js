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
    	
    	function init() {
    		
    		if (navigator.geolocation) {
        	    navigator.geolocation.getCurrentPosition(function(position){
        	      $scope.$apply(function(){
        	       pos = position;
        	       lat = position.coords.latitude;
        	       long = position.coords.longitude;
        	       loct='location='+lat+','+long;
        	       console.log(loct);
        	    	$http.get('https://api.internationalshowtimes.com/v4/cinemas/?'+loct+'&limit=10&apikey=7n4LklKRw0IXbF6fm4aTSF1NqmRPeSZ5').
               		then(function(response) {
               			
                       $scope.allCinemas = response.data;
                   });
        	      });
        	    });
        	   
        	  }
        }
        
        init();
        
        function showtimeAtCinema(cinemaId){
        	$location.url('/findAllShowtimes/:'+cinemaId);
        }
        
        function moviesAtCinema(cinemaId){
        	$location.url('/movies/:'+cinemaId);
        }
        
    }
})();
