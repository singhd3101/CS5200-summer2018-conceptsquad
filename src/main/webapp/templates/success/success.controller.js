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
           		seats = $scope.seats;
        		seats = seats.substring(0, seats.length - 1); 
        		$scope.seats = seats;
        		console.log("seats is "+seats);
           		$scope.totalPrice = $routeParams.totalPrice.substring(1,$routeParams.totalPrice.length);
           		totalPrice = $scope.totalPrice;
           		$scope.paymentID = $routeParams.paymentID.substring(1,$routeParams.paymentID.length);
           		paymentID = $scope.paymentID;
            	$http.get('https://api.internationalshowtimes.com/v4/showtimes/'+ showtimeId +'?apikey=7n4LklKRw0IXbF6fm4aTSF1NqmRPeSZ5&append=cinema,movie').

            	then(function (res){
            		console.log(res.data);
            		$scope.showtime = res.data.showtime;
            		$scope.cinema = res.data.cinema;
            		$scope.movie = res.data.movie;
            		
            	});
            	
            	var currentTime = new Date();
            	const booking = {
                        noOfTickets : totalPrice/10,
                        date  : currentTime,
                        totalCost  : totalPrice,
                        paymentId : paymentID
                };
        			$http.post('/api/moviebooking/', booking)
        			.then(function(response) {
        				console.log(response);
        				booking = response.data.id;
        			});}
        init();

    	}
})();