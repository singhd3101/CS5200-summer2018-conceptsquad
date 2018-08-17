(function () {
    angular
        .module('ShowtimeApp')
        .controller('AdminHomeController', AdminHomeController);

    function AdminHomeController($scope, $location, $http, $window, $routeParams, $route) {
    	var adminId;
    	
    	this.registerMovie = registerMovie;
    	this.register = register;
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
        this.vendorDetail = vendorDetail;
        this.movieDetail = movieDetail;
        this.eventDetail = eventDetail;
        this.theatreDetail = theatreDetail;
        this.paymentDetail = paymentDetail;
        this.bookingDetail = bookingDetail;
        this.deleteCust = deleteCust;
        this.deleteVendor = deleteVendor;
        this.deleteMovie = deleteMovie;
        this.deleteEvent = deleteEvent;
        this.deleteTheatre = deleteTheatre;
        this.deleteBooking = deleteBooking;
        this.deletePayment = deletePayment;
        this.createCust = createCust;
        this.createVendor = createVendor;
        this.createMovie = createMovie;
        this.createEvent = createEvent;
        this.createTheatre = createTheatre;
        this.createBooking = createBooking;
        this.createPayment = createPayment;
        
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
        	$http.get("/api/ppayment/")
            .then(function(response) {
            	$scope.allPayments = response.data;
            	console.log(response.data);
            });
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
        
        function getCustomer() {
        	$http.get("/api/customer/")
            .then(function(response) {
            	$scope.allCustomers = response.data;
            });
        };
        
        function paymentDetail(id){
        	alert("payment details for id: " + id);
        }
        
        function bookingDetail(id){
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
        
        function vendorDetail(id){
        	alert("vendor details for id: " + id);
        }
                
        function profile() {            
        	$location.url('/profile/:'+adminId);
        }
        
        function home() {
        	$location.url('/adminHome/:'+adminId);
        }
        
        function deletePayment(id){
        	console.log("inside delete pay: "+ id);
        	$http.delete("/api/ppayment/"+id)
            .then(function(response) {
            	$http.get("/api/ppayment/")
                .then(function(response) {
                	$scope.allPayments = response.data;
                	console.log(response.data);
                });
            });
        }
        
        function deleteBooking(id){
        	$http.delete("/api/booking/"+id)
            .then(function(response) {
            	$http.get("/api/booking/")
                .then(function(response) {
                	$scope.allBookings = response.data;
                	console.log(response.data);
                });
            });
        }
        
        function deleteTheatre(id) {
        	$http.delete("/api/theatre/"+id)
            .then(function(response) {
            	$http.get("/api/theatre/")
                .then(function(response) {
                	$scope.allTheatres = response.data;
                	console.log(response.data);
                });
            });
        }
        
        function deleteEvent(id){
        	$http.delete("/api/event/"+id)
            .then(function(response) {
            	$http.get("/api/event/")
                .then(function(response) {
                	$scope.allEvents = response.data;
                	console.log(response.data);
                });
            });
        }
        
        function deleteMovie(id){
        	$http.delete("/api/movie/"+id)
            .then(function(response) {
            	$http.get("/api/movie/")
                .then(function(response) {
                	$scope.allMovies = response.data;
                	console.log(response.data);
                });
            });
        }
        
        function deleteVendor(id) {
        	$http.delete("/api/vendor/"+id)
            .then(function(response) {
            	$http.get("/api/vendor/")
                .then(function(response) {
                	$scope.allVendors = response.data;
                	console.log(response.data);
                });
            });
        }
       
        function deleteCust(id) {
        	$http.delete("/api/customer/"+id)
            .then(function(response) {
            	$http.get("/api/customer/")
                .then(function(response) {
                	$scope.allCustomers = response.data;
                });
            });
        };
        
        function createPayment(){
        	$location.url("/createPayment/:"+adminId);
        }
        
        function createBooking(){
        	$location.url("/createBooking/:"+adminId);
        }
        
        function createTheatre() {
        	$location.url("/createTheatre/:"+adminId);
        }
        
        function createEvent(){
        	$location.url("/createEvent/:"+adminId);
        }
        
        function createMovie(){
        	$location.url("/createMovie/:"+adminId);
        }
        
        function createVendor() {
        	$location.url("/createVendor/:"+adminId);
        }
       
        function createCust() {
        	$location.url("/createCustomer/:"+adminId);
        };
        
        function register(firstName, lastName, username, password, dtype) {
            $http.get('/api/person?username=' + username)
            .then(function(response) {
            	var user = response.data[0];
            	if(user === undefined || user === null){
            		console.log("user not present");
            		const user = {
                            firstName : firstName,
                            lastName  : lastName,
                            userName  : username,
                            password  : password
                    };
            		if(dtype === 'Customer'){
            			$http.post('/api/customer/', user)
            			.then(function(response) {
            				console.log(response.data);
            				alert("Customer added successfully !!");
            				//userId = response.data.id;
            			})
            			.then(function () {
            			//	$location.url("/adminHome/:"+adminId);
            				$route.reload();
            			});
            		} else {
            			$http.post('/api/vendor/', user)
            			.then(function(response) {
            				console.log(response.data);
            				alert("Vendor added successfully !!");
            				//userId = response.data.id;
            			})
            			.then(function () {
            				//$location.url("/adminHome/:"+adminId);
            				$route.reload();
            			});
            		}
            	} else {
            		alert("Email already present");
            	}
            });
        }
        
        function registerMovie(movieName, movieDuration, movieRating){
        	alert(movieName);
        	alert(movieDuration);
        	alert(movieRating);
        }
    }
})();