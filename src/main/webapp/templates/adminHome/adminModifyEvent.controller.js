(function () {
    angular
        .module('ShowtimeApp')
        .controller('AdminModifyEventController', AdminModifyEventController);

    function AdminModifyEventController($scope, $location, $http, $window, $routeParams, $route) {
    	
    	var adminId;
    	var eventId;
    	var admin;
    	var event;
    	
    	this.profile = profile;
    	this.home = home;
    	this.update = update;
    	
        function init(){
        	
        	console.log("in mod event");
        	
        	adminId = $routeParams.adminId.substring(1,$routeParams.adminId.length);
        	eventId = $routeParams.eventId.substring(1,$routeParams.eventId.length);
        	
        	console.log(adminId);
        	console.log(eventId);
        	
    		$http.get("/api/person/" + adminId)
            .then(function(response) {
            	$scope.admin = response.data;
            	admin = response.data;
            	console.log(admin);
            });
    		
    		$http.get("/api/event/" + eventId)
            .then(function(response) {
            	$scope.event = response.data;
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
        
        function update(name, type, capacity, description, price, venue, eventDate) {            
			eventNew = {
					name : name,
					type : type,
					description : description,
					venue : venue,
					capacity : capacity,
					price : price,
					eventDate : eventDate
        	};
        	if((eventNew.name != null && eventNew.name != undefined) ||
        			(eventNew.type != null && eventNew.type != undefined) ||
        			(eventNew.capacity != null && eventNew.capacity != undefined) ||
        			(eventNew.description != null && eventNew.description != undefined) ||
        			(eventNew.price != null && eventNew.price != undefined) ||
        			(eventNew.venue != null && eventNew.name != undefined) ||
        			(eventNew.eventDate != null && eventNew.eventDate != undefined)){
        		$http.put("/api/event/" + eventId, eventNew)
                .then(function (response) {
                	alert("Event updated successfully !!");
                });
        	}
        	
        	alert("Event updated successfully !!");
        	home();
		}
            	
            	
        
        
        /*function getPayment(){
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
        	
        	
        }*/
    }
})();