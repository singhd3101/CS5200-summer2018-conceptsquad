(function () {
    angular
        .module('ShowtimeApp')
        .controller('EventPaymentAdminController',EventPaymentAdminController);

    function EventPaymentAdminController($scope, $location, $http, $routeParams, $rootScope) {   
    	var showtimeId;
    	var cinemaId;
    	var movieId;
    	var seats;
    	var totalPrice;
    	var username;
    	var noOfTickets;
    	
    	
    	
        function init() {
        	var price;
        	var noOfTickets;
        	console.log("rootscope flag- " + $rootScope.loggedIn);
        	console.log("rootscope user- " + $rootScope.userId);
        	console.log("event payment controller");
        	
        	$scope.eventId = $routeParams.eventId.substring(1,$routeParams.eventId.length);
        	eventId = $scope.eventId;
        	
        	$scope.noOfTickets = $routeParams.noOfTickets.substring(1,$routeParams.noOfTickets.length);
        	noOfTickets = $scope.noOfTickets;
        	
        	$scope.username = $routeParams.username.substring(1,$routeParams.username.length);
        	username = $scope.username;
    		
        	$scope.adminId = $routeParams.adminId.substring(1,$routeParams.adminId.length);
        	adminId = $scope.adminId;
        	
        	console.log(eventId);
        	console.log(noOfTickets);
        	console.log(username);
        	console.log(adminId);
    		
        	 $http.get("/api/event/"+eventId)
             .then(function(response) {
                 $scope.event = response.data;
                 price = response.data.price
                 totalPrice = price * noOfTickets;
                 console.log("price is "+price +" total ptice is "+totalPrice+" no of tickets is "+noOfTickets);
         		 $scope.totalPrice = totalPrice;
             });
        	
    		
        }
        init();
        
        
    }
})();



