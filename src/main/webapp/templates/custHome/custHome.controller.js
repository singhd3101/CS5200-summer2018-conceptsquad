(function () {
    angular
        .module('ShowtimeApp')
        .controller('CustHomeController',CustHomeController);

    function CustHomeController($scope, $location, $http, $routeParams) {    
    	this.profile = profile;
    	this.bookingDetails = bookingDetails;
	var custId;
    
        function init () {
		custId = $routeParams.id.substring(1,$routeParams.id.length);
        	console.log("in init custhome");
        	//$http.get("/api/customer/" + custId + "/movieBooking")
            //.then(function(response) {
            //	console.log("movie booking");
            //    console.log(response.data);
            //    $scope.movieBookings = response.data;
            //});
            //$http.get("/api/customer/" + custId + "/eventBooking")
            //.then(function(response) {
            //	console.log("event booking");
            //    console.log(response.data);
            //    $scope.eventBookings = response.data;
            //});
        };
        init();
        
        function profile() {
        	 console.log("navigate to update profile section");
        };
        
        function bookingDetails(bookingId) {
        	console.log(bookingId);
        	// $location.url('/bookingDetails/:'+bookingId);
        };
    }
})();