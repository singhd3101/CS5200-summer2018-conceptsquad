	(function () {
    angular
        .module('ShowtimeApp')
        .controller('SeatSelectionController',SeatSelectionController);

    function SeatSelectionController($scope, $location, $http, $routeParams, $filter) { 
    	var showtimeId;
    	var cinemaId;
    	var movieId;
    	
    	this.checkout = checkout;
    	
    	function init() {
    		
    		console.log("seat selection controller");
    		$scope.showtimeId = $routeParams.showtimeId.substring(1,$routeParams.showtimeId.length);
    		showtimeId = $scope.showtimeId;
    		$scope.cinemaId = $routeParams.cinemaId.substring(1,$routeParams.cinemaId.length);
    		cinemaId = $scope.cinemaId;
    		$scope.movieId = $routeParams.movieId.substring(1,$routeParams.movieId.length);
        	movieId = $scope.movieId;
        	
             
            
        };
        init();
        
        function checkout(seats, totalPrice){
        	console.log("check out function");
        	console.log("seats are "+seats);
        	console.log("total price is"+totalPrice);
        	//$location.url('/findAllShowtimes/:'+cinemaId);
        }
    }
})();