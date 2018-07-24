(function () {
    angular
        .module('ShowtimeApp')
        .controller('EventDetailsController',EventDetailsController);

    function EventDetailsController($scope, $location, $http, $routeParams) {    
 		this.book = book;
        function init() {
        	console.log("inside event details");
        	eventId = $routeParams.id.substring(1,$routeParams.id.length);
            $http.get("/api/event/"+eventId)
                .then(function (response) {
                    $scope.eventDetails=response.data;
                    console.log(response.data);
                })
        }
        init();
        
        function book(){
        	console.log("inside event book");
        }
    }
})();