	(function () {
    angular
        .module('ShowtimeApp')
        .controller('EventSuccessAdminController',EventSuccessAdminController);

    function EventSuccessAdminController($scope, $location, $http, $routeParams, $filter, $rootScope) { 
    	var showtimeId;
    	var cinemaId;
    	var movieId;
    	var paymemtID
    	var noOfTickets;
    	var eventId;
    	var totalPrice;
    	var theatreName;
    	var movieName;
    	var mbookingId;
    	var startAt;
    	var username;
    		
    		
    		//https://api.internationalshowtimes.com/v4/showtimes/5b7235d255e3ba571425832d?apikey=7n4LklKRw0IXbF6fm4aTSF1NqmRPeSZ5&append=cinema,movie
    		///:eventId/:paymentID/:noOfTickets/:totalPrice/:username
    		function init() {
    			var user = $rootScope.user;
            	//console.log("pogo " + $rootScope.user.userName);
            	$scope.user = $rootScope.user;
    			console.log("Event success controller");
    			
           		$scope.totalPrice = $routeParams.totalPrice.substring(1,$routeParams.totalPrice.length);
           		totalPrice = $scope.totalPrice;
           		$scope.paymentID = $routeParams.paymentID.substring(1,$routeParams.paymentID.length);
           		paymentID = $scope.paymentID;
           		$scope.username = $routeParams.username.substring(1,$routeParams.username.length);
            	username = $scope.username;
            	$scope.eventId = $routeParams.eventId.substring(1,$routeParams.eventId.length);
            	eventId = $scope.eventId;
            	$scope.noOfTickets = $routeParams.noOfTickets.substring(1,$routeParams.noOfTickets.length);
            	noOfTickets = $scope.noOfTickets;
            	
            	$scope.adminId = $routeParams.adminId.substring(1,$routeParams.adminId.length);
            	adminId = $scope.adminId;
            	
            	
            	var currentTime = new Date();
                                    	const booking = {
                                                noOfTickets : noOfTickets,
                                                date  : currentTime,
                                                totalCost  : totalPrice,
                                                paymentId: paymentID
                                        };
                                			$http.post('/api/eventbooking/'+eventId+'/user/'+username, booking)
                                			.then(function(response) {
                                				
                                				console.log(response);
                                				 $http.get("/api/event/"+eventId)
                                	               .then(function(response) {
                                	                 $scope.event = response.data;
                                	                 console.log("event response "+response);
                                	          
                                })
                                .then(function (res){
                                	alert("Event Booking created successfully");
                                	$location.url('/adminHome/:'+adminId);
                                });
                			});
        				
        			  	
             
     
    		}
        init();

    	}
})();