(function () {
    angular
        .module('ShowtimeApp')
        .controller('DisplayEventsController',DisplayEventsController);

    function DisplayEventsController($scope, $location, $http, $routeParams) {    
    	this.eventDetails = eventDetails;
    
        function init() {
        	console.log("inside init");
            $http.get("/api/event")
            .then(function(response) {
                console.log(response.data);
                $scope.allEvents = response.data;
            });
        }
        init();
        
        function eventDetails(eventId) {
        	 $location.url('/eventDetails/:'+eventId);
        };
    }
})();