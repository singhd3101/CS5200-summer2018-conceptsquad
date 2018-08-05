(function () {
    angular
        .module('ShowtimeApp')
        .controller('CustHomeController',CustHomeController);

    function CustHomeController($scope, $location, $http, $routeParams) {    
    	this.profile = profile;
    	this.movieDetails = movieDetails;
    	this.eventDetails = eventDetails;
    	var custId;
    
        function init () {
		custId = $routeParams.id.substring(1,$routeParams.id.length);
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
        
        function profile() {
        	 console.log("navigate to update profile section");
        };
        
        function movieDetails(bookingId) {
        	alert("in movie details" + bookingId);
        	$http.get("/api/moviebooking/"+bookingId+"/movie")
        	.then(function(response){
                console.log(response.data);
        	});
        };
        
        function eventDetails(bookingId) {
        	alert("in event details" + bookingId);
        	$http.get("/api/eventbooking/"+bookingId+"/event")
        	.then(function(response){
                console.log(response.data);
        	});
        };
    }
})();