(function () {
    angular
        .module('ShowtimeApp')
        .controller('BookingDetailsController',BookingDetailsController);

    function BookingDetailsController($scope, $location, $http, $routeParams) {    
    	this.profile = profile;
    	var bookId;
    	var bType;
    	var custId;
    	var user;
    	this.home = home;
    
        function init () {
        	custId = $routeParams.custId.substring(1,$routeParams.custId.length);
        	bookId = $routeParams.bookId.substring(1,$routeParams.bookId.length);
        	bType = $routeParams.bType.substring(1,$routeParams.bType.length);
        	$scope.bType = bType;
        	$http.get("/api/person/" + custId)
	        .then(function(response) {
	        	$scope.user = response.data;
	        	user = response.data;
	        	console.log(response.data);
	        });
			
			$http.get("/api/booking/" + bookId)
	        .then(function(response) {
	        	$scope.booking = response.data;
	        	console.log("booking details: " + response.data);
	        });
			
			if(bType === 'movie'){
				$http.get("/api/moviebooking/"+bookId+"/movie")
	        	.then(function(response){
	        		var movie = response.data;
	        		$scope.movie = response.data;
	                console.log("movie details: " + movie.name);
	        	});
			} else {
				$http.get("/api/eventbooking/"+bookId+"/event")
	        	.then(function(response){
	        		var event = response.data;
	        		$scope.event = response.data;
	                console.log("event details: " + event.name);
	        	});
			}
        };
        init();
        
        function profile(id) {
        	$location.url('/profile/:'+custId);
        };
        
        function home(){
        	$location.url('/custHome/:'+user.id);
        };
    }
})();