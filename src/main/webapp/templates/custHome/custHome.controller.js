(function () {
    angular
        .module('ShowtimeApp')
        .controller('CustHomeController',CustHomeController);

    function CustHomeController($scope, $location, $http, $routeParams) {    
    	this.profile = profile;
    	this.bookingDetails = bookingDetails;
    
        function init () {
        	console.log("in init custhome");
        	$http.get("/api/customer/1/booking")
            .then(function(response) {
                console.log(response.data);
                $scope.allBookings = response.data;
            });
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