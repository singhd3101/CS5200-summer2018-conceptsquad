	(function () {
    angular
        .module('ShowtimeApp')
        .controller('SuccessController',SuccessController);

    function SuccessController($scope, $location, $http, $routeParams, $filter) { 
    	var showtimeId;
    	var cinemaId;
    	var movieId;
    	var paymemtID

    	var seats;
    	var totalPrice;
   
    	
    		
    		
    		//https://api.internationalshowtimes.com/v4/showtimes/5b7235d255e3ba571425832d?apikey=7n4LklKRw0IXbF6fm4aTSF1NqmRPeSZ5&append=cinema,movie
    		
    		function init() {
    			console.log("success controller");
    			showtimeId = $scope.showtimeId;
    			$scope.showtimeId = $routeParams.showtimeId.substring(1,$routeParams.showtimeId.length);
    			showtimeId = $scope.showtimeId;
           		
               	$scope.seats = $routeParams.seats.substring(1,$routeParams.seats.length);
           		seats = $scope.seats;
           		$scope.totalPrice = $routeParams.totalPrice.substring(1,$routeParams.totalPrice.length);
           		totalPrice = $scope.totalPrice;
           		$scope.paymentID = $routeParams.paymentID.substring(1,$routeParams.paymentID.length);
           		paymentID = $scope.paymentID;
            	$http.get('https://api.internationalshowtimes.com/v4/showtimes/'+ showtimeId +'?apikey=7n4LklKRw0IXbF6fm4aTSF1NqmRPeSZ5&append=cinema,movie').
            	then(function(res) {
            		/*console.log(response);
            		$scope.showtimes=response.data.showtime;
            		console.log("showtime is "+response.data.showtime);
            		$scope.movies = response.data.movie;
            		$scope.cinemas = response.data.cinema;
            		*/
            		
            		console.log(res.data);
            		console.log(res.data.showtime);
            		console.log(res.data.cinema);
            		console.log(res.data.movie);
            		
                }); 
            	
            	console.log("-----------------------------------");
            	$http.get('https://api.internationalshowtimes.com/v4/showtimes/5b7384fc8836652b8221fbd0?apikey=7n4LklKRw0IXbF6fm4aTSF1NqmRPeSZ5&append=cinema,movie')
            	.then(function (res){
            		console.log(res.data);
            		console.log(res.data.showtime);
            		console.log(res.data.cinema);
            		console.log(res.data.movie);
            		
            	});
            };
        init();

    	}
})();