(function () {
    angular
        .module('ShowtimeApp')
        .controller('PaymentController',PaymentController);

    function PaymentController($scope, $location, $http, $routeParams) {    
    	var pos;
    	var lat;
    	var long;
    	var loct;
    	var cinemaId;
        function init() {
        	
        	console.log("inside payment init");
            $http.get("/payment")
            .then(function(response) {
                console.log(response.data);
                
            });
        }
        init();
  
    }
})();
