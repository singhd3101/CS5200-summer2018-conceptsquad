(function () {
    angular
        .module('ShowtimeApp')
        .controller('BookingDetailsController',BookingDetailsController);

    function BookingDetailsController($scope, $location, $http, $routeParams) {    
    	this.profile = profile;
    	var bookId;
    	var booking;
    	var bType;
    	var custId;
    	var user;
    	this.home = home;
    	this.updateBooking = updateBooking;
    	this.cancelBooking = cancelBooking;
    
        function init () {
        	custId = $routeParams.custId.substring(1,$routeParams.custId.length);
        	bookId = $routeParams.bookId.substring(1,$routeParams.bookId.length);
        	bType = $routeParams.bType.substring(1,$routeParams.bType.length);
        	$scope.bType = bType;
        	$http.get("/api/person/" + custId)
	        .then(function(response) {
	        	$scope.user = response.data;
	        	user = response.data;
	        });
			
			$http.get("/api/booking/" + bookId)
	        .then(function(response) {
	        	$scope.booking = response.data;
	        	booking = response.data;
	        });
			
			if(bType === 'movie'){
				$http.get("/api/moviebooking/"+bookId+"/movie")
	        	.then(function(response){
	        		var movie = response.data;
	        		$scope.movie = response.data;
	        	});
			} else {
				$http.get("/api/eventbooking/"+bookId+"/event")
	        	.then(function(response){
	        		var event = response.data;
	        		$scope.event = response.data;
	        	});
			}
        };
        init();
        
        function cancelBooking(id){
        	$http.put("/api/cancelbooking/" + bookId)
	        .then(function(response) {
	        	alert("Booking cancelled.");
	        	$location.url('/custHome/:'+user.id);
	        });
        }
        
        function updateBooking(noOfTickets, date){
        	if(noOfTickets == null || noOfTickets == undefined){
        		noOfTickets = booking.noOfTickets;
        		var flag = true;
        	}
        	var newPrice = booking.totalCost/booking.noOfTickets * noOfTickets;
        	if(date == null || date == undefined){
        		date = booking.date;
        		if(flag){
        			$location.url('/custHome/:'+user.id);
        		}
        	}
        	book = {
        		noOfTickets: noOfTickets,
        		date : date,
        		totalCost : newPrice,
        	}
        	if(book.noOfTickets != null && book.noOfTickets != undefined){
        		if(bType === 'movie'){
        			$http.put("/api/mbooking/" + bookId, book)
        	        .then(function(response) {
        	        	alert("Booking updated.");
        	        	$location.url('/custHome/:'+user.id);
        	        });
        		} else {
        			$http.put("/api/ebooking/" + bookId, book)
        	        .then(function(response) {
        	        	alert("Booking updated.");
        	        	$location.url('/custHome/:'+user.id);
        	        });
        		}
        	}
        }
        
        function profile(id) {
        	$location.url('/profile/:'+custId);
        };
        
        function home(){
        	$location.url('/custHome/:'+user.id);
        };
    }
})();