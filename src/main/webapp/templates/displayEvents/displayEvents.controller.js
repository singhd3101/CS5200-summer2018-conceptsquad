(function () {
    angular
        .module('ShowtimeApp')
        .controller('DisplayEventsController',DisplayEventsController);

    function DisplayEventsController($scope, $location, $http, $routeParams) {    
    	this.eventDetails = eventDetails;
    
        function init() {
            $http.get("/api/event")
            .then(function(response) {
                $scope.allEvents = response.data;
            });
        }
        init();
        
        function eventDetails(eventId) {
        	 $location.url('/eventDetails/:'+eventId);
        };
    }
})();