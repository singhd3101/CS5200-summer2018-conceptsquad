(function () {
    angular
        .module('ShowtimeApp')
        .controller('AdminHomeController', AdminHomeController);

    function AdminHomeController($scope, $location, $http, $window, $routeParams, $route) {
    	var adminId;
    	
    	this.addTheatre = addTheatre;
    	this.addEvent = addEvent;
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
        
        function init(){
        	
        	adminId = $routeParams.adminId.substring(1,$routeParams.adminId.length);
        	
    		$http.get("/api/person/" + adminId)
            .then(function(response) {
            	$scope.user = response.data;
            	user = response.data;
            });
        }
        
        init();
        
        function getPayment(){
        	$http.get("/api/ppayment/")
            .then(function(response) {
            	$scope.allPayments = response.data;
            });
        }
        
        function getBooking(){
        	$http.get("/api/booking/")
            .then(function(response) {
            	$scope.allBookings = response.data;
            });
        }
        
        function getTheatre() {
        	$http.get("/api/theatre/")
            .then(function(response) {
            	$scope.allTheatres = response.data;
            });
        }
        
        function getEvent(){
        	$http.get("/api/event/")
            .then(function(response) {
            	$scope.allEvents = response.data;
            });
        }
        
        function getMovie(){
        	$http.get("/api/movie/")
            .then(function(response) {
            	$scope.allMovies = response.data;
            });
        }
        
        function getVendor() {
        	$http.get("/api/vendor/")
            .then(function(response) {
            	$scope.allVendors = response.data;
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
        	$http.delete("/api/ppayment/"+id)
            .then(function(response) {
            	$http.get("/api/ppayment/")
                .then(function(response) {
                	$scope.allPayments = response.data;
                });
            });
        }
        
        function deleteBooking(id){
        	$http.delete("/api/booking/"+id)
            .then(function(response) {
            	$http.get("/api/booking/")
                .then(function(response) {
                	$scope.allBookings = response.data;
                });
            });
        }
        
        function deleteTheatre(id) {
        	$http.delete("/api/theatre/"+id)
            .then(function(response) {
            	$http.get("/api/theatre/")
                .then(function(response) {
                	$scope.allTheatres = response.data;
                });
            });
        }
        
        function deleteEvent(id){
        	$http.delete("/api/event/"+id)
            .then(function(response) {
            	$http.get("/api/event/")
                .then(function(response) {
                	$scope.allEvents = response.data;
                });
            });
        }
        
        function deleteMovie(id){
        	$http.delete("/api/movie/"+id)
            .then(function(response) {
            	$http.get("/api/movie/")
                .then(function(response) {
                	$scope.allMovies = response.data;
                });
            });
        }
        
        function deleteVendor(id) {
        	$http.delete("/api/vendor/"+id)
            .then(function(response) {
            	$http.get("/api/vendor/")
                .then(function(response) {
                	$scope.allVendors = response.data;
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
        
        function register(firstName, lastName, username, password, dtype) {
            $http.get('/api/person?username=' + username)
            .then(function(response) {
            	var user = response.data[0];
            	if(user === undefined || user === null){
            		const user = {
                            firstName : firstName,
                            lastName  : lastName,
                            userName  : username,
                            password  : password
                    };
            		if(dtype === 'Customer'){
            			$http.post('/api/customer/', user)
            			.then(function(response) {
            				alert("Customer added successfully !!");
            			})
            			.then(function () {
            				$route.reload();
            			});
            		} else {
            			$http.post('/api/vendor/', user)
            			.then(function(response) {
            				alert("Vendor added successfully !!");
            			})
            			.then(function () {
            				$route.reload();
            			});
            		}
            	} else {
            		alert("Email already present");
            	}
            });
        }
        
        function registerMovie(movieName, movieDuration, movieRating){
        	movieNew = {
        		name : movieName,
        		rating : movieRating,
        		duration : movieDuration
        	}
        	if(movieNew.name != null && movieNew.name != undefined){
        		$http.post('/api/movie/', movieNew)
    			.then(function(response) {
    				alert("Movie added successfully !!");
    			})
    			.then(function () {
    				$route.reload();
    			});
        	}
        }
        
        function addEvent(name, type, capacity, description, price, venue, dateOfEvent, vendorId){
        	$http.get('/api/vendor/'+vendorId)
			.then(function(response) {
				var ven = response.data;
				if(ven.id === undefined || ven.id === null){
					alert("Vendor not present. Please enter a valid vendor ID.");
				} else {
					alert("user present: " + ven.firstName);
					eventNew = {
							name : name,
							type : type,
							description : description,
							venue : venue,
							capacity : capacity,
							price : price,
							eventDate : dateOfEvent
		        	};
			    	if(eventNew.name != null && eventNew.name != undefined){
		        		$http.post("/api/vendor/" + vendorId + "/event", eventNew)
		                .then(function (response) {
		                	alert("Event added successfully !!");
		                })
		                .then(function () {
		    				$route.reload();
		    			});
		        	}
				}
			})
        }
        
        function addTheatre(name, showtimeId){
        	$http.get('/api/theatre/name/'+ name)
			.then(function(response) {
				var ven = response.data;
				if(ven.id === undefined || ven.id === null){
					theatreNew = {
						name : name,
						showtimeId : showtimeId,	        	
					};
					if(theatreNew.name != null && theatreNew.name != undefined){
		        		$http.post("/api/theatre/", theatreNew)
		                .then(function (response) {
		                	alert("Theatre added successfully !!");
		                })
		                .then(function () {
		    				$route.reload();
		    			});
		        	}
				} else {
					alert("Theatre already present");
				}
			})
        	
        	
        }
    }
})();