	(function () {
    angular
        .module('ShowtimeApp')
        .controller('SuccessController',SuccessController);

    function SuccessController($scope, $location, $http, $routeParams, $filter, $rootScope) { 
    	var showtimeId;
    	var cinemaId;
    	var movieId;
    	var paymemtID
    	var seats;
    	var totalPrice;
    	var theatreName;
    	var movieName;
    	var mbookingId;
    	var startAt;
    	var username;
    		
    		
    		//https://api.internationalshowtimes.com/v4/showtimes/5b7235d255e3ba571425832d?apikey=7n4LklKRw0IXbF6fm4aTSF1NqmRPeSZ5&append=cinema,movie
    		
    		function init() {
    			var user = $rootScope.user;
            	//console.log("pogo " + $rootScope.user.userName);
            	$scope.user = $rootScope.user;
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
           		$scope.username = $routeParams.username.substring(1,$routeParams.username.length);
            	username = $scope.username;
            	$http.get('https://api.internationalshowtimes.com/v4/showtimes/'+ showtimeId +'?apikey=7n4LklKRw0IXbF6fm4aTSF1NqmRPeSZ5&append=cinema,movie').

            	then(function (res){
            		console.log(res.data);
            		$scope.showtime = res.data.showtime;
            		startAt = res.data.showtime.start_at;
            		$scope.cinema = res.data.cinema;
            		cinemaId = res.data.cinema.id;
            		theatreName = res.data.cinema.name;
            		$scope.movie = res.data.movie;
            		movieName = res.data.movie.title;
            		movieId = res.data.movie.id;
            		console.log("movieId is "+movieId+ " movie name is "+movieName+"  cinemaId is "+cinemaId +" cinema name is " +theatreName+" showtimeId is "+showtimeId+" show time start at "+startAt+ " payment id is "+paymentID);
            	const theatre = {
                        id : cinemaId,
                        name  : theatreName
                };
        			$http.post('/api/theatre/', theatre)
        			.then(function(response) {
        				console.log(response);
        				console.log("theatre posted");
        				const movie = {
                                id : movieId,
                                name  : movieName   
                        };
                			$http.post('/api/movie/theatre/'+cinemaId, movie)
                			.then(function(response) {
                				console.log(response);   
                				console.log("movie posted");
                				
                				const showtime = {
                                        id : showtimeId,
                                        startTime  : startAt   
                                };
                        			$http.post('/api/showtime/movie/'+movieId, showtime)
                        			.then(function(response) {
                        				console.log(response);  
                        				console.log("showtime posted");
                        				var currentTime = new Date();
                                    	const booking = {
                                                noOfTickets : totalPrice/10,
                                                date  : currentTime,
                                                totalCost  : totalPrice,
                                                paymentId: paymentID
                                        };
                                			$http.post('/api/moviebooking/'+movieId+'/user/'+username, booking)
                                			.then(function(response) {
                                				console.log(response);
                                				mbookingId = response.data.id;
                                				console.log("booking posted");
                                				var splitSeats = seats.split(',');
                                            	for (var i = 0; i < splitSeats.length; i++) { 
                                            		const seats = {
                                                            seatNumber : splitSeats[i]
                                                            
                                                            
                                                    };
                                            			$http.post('/api/seats/'+showtimeId+'/booking/'+mbookingId, seats)
                                            			.then(function(response) {
                                            				console.log(response);
                                            				console.log("seats posted");
                                            			});
                                            	}
                                				
                                			});
                				
                			});
        				
        			});
        			
        			
            	
        			
        			});   	
            	
        			
    		});
    		}
        init();

    	}
})();