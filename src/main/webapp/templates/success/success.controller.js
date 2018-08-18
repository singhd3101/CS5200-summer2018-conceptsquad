	(function () {
    angular
        .module('ShowtimeApp')
        .controller('SuccessController',SuccessController);

    function SuccessController($scope, $location, $http, $routeParams, $filter) { 
    	var showtimeId;
    	var cinemaId;
    	var movieId;

    	var seats;
    	var totalPrice;
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
        
        function checkout(s, t){
        	this.seats = s;
        	this.totalPrice = t;
        	console.log("check out function");
        	console.log("seats are "+seats);
        	console.log("total price is "+totalPrice);
        	//$location.url('/findAllShowtimes/:'+cinemaId);
        }
    }
})();