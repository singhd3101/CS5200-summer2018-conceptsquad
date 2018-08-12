(function () {
    angular
        .module('ShowtimeApp')
        .controller('AdminHomeController', AdminHomeController);

    function AdminHomeController($scope, $location, $http, $window, $routeParams) {
    	var adminId;
    	
    	this.profile = profile;
        this.home = home;
        this.getVendor = getVendor;
        this.getCustomer = getCustomer;
        this.getMovie = getMovie;
        this.getEvent = getEvent;
        this.getTheatre = getTheatre;
        this.getBooking = getBooking;
        this.getPayment = getPayment;
        this.custDetail = custDetail;
        this.movieDetail = movieDetail;
        this.eventDetail = eventDetail;
        this.theatreDetail = theatreDetail;
        
        function init(){
        	
        	adminId = $routeParams.adminId.substring(1,$routeParams.adminId.length);
        	console.log(adminId);
        	
    		$http.get("/api/person/" + adminId)
            .then(function(response) {
            	$scope.user = response.data;
            	user = response.data;
            	console.log(response.data);
            });
        }
        
        init();
        
        function getPayment(){
        	
        }
        
        function getBooking(){
        	$http.get("/api/booking/")
            .then(function(response) {
            	$scope.allBookings = response.data;
            	console.log(response.data);
            });
        }
        
        function getTheatre() {
        	$http.get("/api/theatre/")
            .then(function(response) {
            	$scope.allTheatres = response.data;
            	console.log(response.data);
            });
        }
        
        function getEvent(){
        	$http.get("/api/event/")
            .then(function(response) {
            	$scope.allEvents = response.data;
            	console.log(response.data);
            });
        }
        
        function getMovie(){
        	$http.get("/api/movie/")
            .then(function(response) {
            	$scope.allMovies = response.data;
            	console.log(response.data);
            });
        }
        
        function getVendor() {
        	$http.get("/api/vendor/")
            .then(function(response) {
            	$scope.allVendors = response.data;
            	console.log(response.data);
            });
        }
        
        function boookingDetail(id){
        	alert("booking details for id: " + id);
        }
        
        function theatreDetail(id){
        	alert("theatre details for id: " + id);
        }
        
        function eventDetail(id){
        	alert("event details for id: " + id);
        }
        
        function movieDetail(id){
        	alert("movie details for id: " + id);
        }
        
        function custDetail(id){
        	alert("customer details for id: " + id);
        }
        
        function getCustomer() {
        	$http.get("/api/customer/")
            .then(function(response) {
            	$scope.allCustomers = response.data;
            });
        };
        
        function profile() {            
        	$location.url('/profile/:'+adminId);
        }
        
        function home() {
        	$location.url('/adminHome/:'+adminId);
        }
    }
})();