(function () {
    angular
        .module('ShowtimeApp')
        .controller('CustHomeController',CustHomeController);

    function CustHomeController($scope, $location, $http, $routeParams) {    
    	this.profile = profile;
    	this.movieDetails = movieDetails;
    	this.eventDetails = eventDetails;
    	var custId;
    	var user;
    
        function init () {
		custId = $routeParams.id.substring(1,$routeParams.id.length);
		$http.get("/api/person/" + custId)
        .then(function(response) {
        	$scope.user = response.data;
        	user = response.data;
        	console.log(response.data);
        });
		$scope.cid = custId;
        	$http.get("/api/moviebooking/" + custId)
            .then(function(response) {
            	$scope.allmovieBookings = response.data;
            });
        	$http.get("/api/eventbooking/" + custId)
            .then(function(response) {
            	$scope.alleventBookings = response.data;
            });
        };
        init();
        
        function profile(id) {
        	 $location.url('/profile/:'+custId);
        };
        
        function movieDetails(bookingId) {
        	$location.url('/custHome/:'+user.id + '/bookingDetails/:' + bookingId + '/type/:movie');
        	
        };
        
        function eventDetails(bookingId) {
        	$location.url('/custHome/:'+user.id + '/bookingDetails/:' + bookingId  + '/type/:event');
        };
    }
})();