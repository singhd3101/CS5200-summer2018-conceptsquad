(function () {
    angular
        .module('ShowtimeApp')
        .controller('AdminAddEventBookingController', AdminAddEventBookingController);

    function AdminAddEventBookingController($scope, $location, $http, $window, $routeParams, $route) {
    	
    	var adminId;
    	var eventId;
    	var admin;
    	var event;
    	
    	this.profile = profile;
    	this.home = home;
    	this.addBooking = addBooking;
    	
        function init(){
        	
        	console.log("in add eve booking");
        	
        	adminId = $routeParams.adminId.substring(1,$routeParams.adminId.length);
        	eventId = $routeParams.eventId.substring(1,$routeParams.eventId.length);
        	
        	console.log(adminId);
        	console.log(eventId);
        	
    		$http.get("/api/person/" + adminId)
            .then(function(response) {
            	$scope.admin = response.data;
            	admin = response.data;
            });
    		
    		$http.get("/api/event/" + eventId)
            .then(function(response) {
            	$scope.user = response.data;
            	event = response.data;
            });
        }
        
        init();
        
        function profile() {            
        	$location.url('/profile/:'+adminId);
        }
        
        function home() {
        	$location.url('/adminHome/:'+adminId);
        }
        
        function addBooking(noOfTickets, username) {
        	console.log(noOfTickets + " " + username);
        	$location.url('/eventPaymentAdmin/:'+eventId + '/:' + noOfTickets + '/:' + username + '/:' + adminId);
        }
        
        
    }
})();