(function () {
    angular
        .module('ShowtimeApp')
        .controller('CustHomeController',CustHomeController);

    function CustHomeController($rootScope, $scope, $location, $http, $routeParams) {    
    	this.profile = profile;
    	this.movieDetails = movieDetails;
    	this.eventDetails = eventDetails;
    	this.home = home;
    	var custId;
    	var user;
    
        function init () {
        	console.log("rootscope flag- " + $rootScope.loggedIn);
        	console.log("rootscope user- " + $rootScope.userId);
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
        
        function home() {
        	$location.url('/');
        	
        };
    }
})();