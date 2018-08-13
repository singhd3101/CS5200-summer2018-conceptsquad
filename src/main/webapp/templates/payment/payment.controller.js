(function () {
    angular
        .module('ShowtimeApp')
        .controller('PaymentController',PaymentController);

    function PaymentController($scope, $location, $http, $routeParams) {   
    	this.paym = paym;
    	
        function init() {
        	console.log("inside payment init");
            /*$http.get("/api/payment/pay")
            .then(function(response) {
                console.log(response.data);
            });*/
        }
        init();
        
        function paym(){
        	console.log("in payment");
        	$http.post({
        		url: '/api/payment/pay',
        		method: "POST",
        		transformResponse: ""//something;
        	});
            /*.then(function(response) {
                //console.log(response.data);
                $location.url(response.data);
            });*/
        }
  
    }
})();



