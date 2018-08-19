(function () {
    angular
        .module('ShowtimeApp')
        .controller('EventDetailsController',EventDetailsController);

    function EventDetailsController($scope, $location, $http, $routeParams) {    
 		this.enterSeats = enterSeats;
        function init() {
        	
            $http.get("/api/event/"+eventId)
                .then(function (response) {
                    $scope.eventDetails=response.data;
                })
        }
        init();
        
        
    }
})();