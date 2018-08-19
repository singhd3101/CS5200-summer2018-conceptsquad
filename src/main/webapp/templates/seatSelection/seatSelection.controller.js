	(function () {
    angular
        .module('ShowtimeApp')
        .controller('SeatSelectionController',SeatSelectionController);

    function SeatSelectionController($scope, $location, $http, $routeParams, $filter, $rootScope) { 
    	var showtimeId;
    	var cinemaId;
    	var movieId;

    	var seats;
    	var totalPrice;
    	var seats;
    	this.checkout = checkout;
    	function init() {
    		
    		var user = $rootScope.user;
        	//console.log("pogo " + $rootScope.user.userName);
        	$scope.user = $rootScope.user;
        	console.log("user is "+user);
    		console.log("seat selection controller");
    		$scope.showtimeId = $routeParams.showtimeId.substring(1,$routeParams.showtimeId.length);
    		showtimeId = $scope.showtimeId;
    		$scope.cinemaId = $routeParams.cinemaId.substring(1,$routeParams.cinemaId.length);
    		cinemaId = $scope.cinemaId;
    		$scope.movieId = $routeParams.movieId.substring(1,$routeParams.movieId.length);
        	movieId = $scope.movieId;
        	
        	 $http.get("/api/seats/showtimes/"+showtimeId)
             .then(function(response) {
               $scope.seatsTaken = response.data;
               console.log(response);
               console.log("seats are " +response.data);
                                          });
            
        };
        init();
        
        
    }
})();