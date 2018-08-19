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
    	var theatreName;
    	var movieName;
    	var mbookingId;
    	var startAt;
    		
    		
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
            		startAt = res.data.showtime.start_at;
            		$scope.cinema = res.data.cinema;
            		cinemaId = res.data.cinema.id;
            		theatreName = res.data.cinema.name;
            		$scope.movie = res.data.movie;
            		movieName = res.data.movie.title;
            		movieId = res.data.movie.id;
            		console.log("movieId is "+movieId+ " movie name is "+movieName+"  cinemaId is "+cinemaId +" cinema name is " +theatreName+" showtimeId is "+showtimeId+" show time start at "+startAt)
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
                                    	
                			});
        				
        			});
        			
        			
            	
        			
        			});   	
            	
        			
    		});
    		}
        init();

    	}
})();