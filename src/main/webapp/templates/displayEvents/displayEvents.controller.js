(function () {
    angular
        .module('ShowtimeApp')
        .controller('DisplayEventsController',DisplayEventsController);

    function DisplayEventsController($scope, $location, $http, $routeParams, $rootScope) {    
    	this.enterSeats = enterSeats;

    	var eventId;
        function init() {
        	var user = $rootScope.user;
        	//console.log("pogo " + $rootScope.user.userName);
        	$scope.user = $rootScope.user;
        	console.log("user is "+user);
        
        	if($rootScope.eventId != undefined) {
        		$scope.eventId = $rootScope.eventId;
        	}
            $http.get("/api/event")
            .then(function(response) {
                $scope.allEvents = response.data;
            });
        }
        init();
        
        function enterSeats(id){
        	console.log("inside event book "+id);
        	var eventId;
        	$rootScope.eventId = id;
        	eventId = $rootScope.eventId;
        	console.log("id of event is "+eventId);
        	$location.url('/selectTickets');
        }
        
        
    }
})();