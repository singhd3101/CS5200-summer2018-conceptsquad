(function () {
    angular
        .module('ShowtimeApp')
        .controller('FindAllShowtimesController',FindAllShowtimesController);

    function FindAllShowtimesController($scope, $location, $http) {    
    	var pos;
    	var lat;
    	var long;
    	var loct;
    	var cinemaUrl;
        function init() {
        	        	
            //$http.get('https://api.internationalshowtimes.com/v4/movies/?countries=US&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5').
        	//$http.get('https://api.internationalshowtimes.com/v4/cinemas/?'+loct+'&limit=10&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5').
        	$http.get('http://localhost:8080/#!/findAllShowtimes/cinemaId='+ cinemaId +'&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5').
        	then(function(response) {
                console.log(response.data);
                $scope.allShowtimes = response.data;
            });
        }
        init();
    }
})();
