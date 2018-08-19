(function () {
    angular
        .module('ShowtimeApp')
        .controller('PaymentController',PaymentController);

    function PaymentController($scope, $location, $http, $routeParams, $rootScope) {   
    	this.paym = paym;
    	var showtimeId;
    	var cinemaId;
    	var movieId;
    	var seats;
    	var totalPrice;
    	var username;
    	
    	
    	
        function init() {
        	console.log("rootscope flag- " + $rootScope.loggedIn);
        	console.log("rootscope user- " + $rootScope.userId);
        	console.log("payment controller");
        	$scope.seats = $routeParams.seats.substring(1,$routeParams.seats.length);
    		
    		$scope.totalPrice = $routeParams.totalPrice.substring(1,$routeParams.totalPrice.length);
    		totalPrice = $scope.totalPrice;
        	$scope.showtimeId = $routeParams.showtimeId.substring(1,$routeParams.showtimeId.length);
    		showtimeId = $scope.showtimeId;
    		$scope.cinemaId = $routeParams.cinemaId.substring(1,$routeParams.cinemaId.length);
    		cinemaId = $scope.cinemaId;
    		$scope.movieId = $routeParams.movieId.substring(1,$routeParams.movieId.length);
        	movieId = $scope.movieId;
        	$scope.username = $routeParams.username.substring(1,$routeParams.username.length);
        	username = $scope.username;
        }
        init();
        
        function paym(){
        	console.log("in padfdsgdsfdyment");
        	$http.post("/api/payment/pay")
        	.then(function(res){
        		console.log(res.data.path);
        		var path = res.data.path;
        		window.location.href = path;

        	});
        }
    }
})();



