(function () {
    angular
        .module('ShowtimeApp')
        .controller('PaymentController',PaymentController);

    function PaymentController($scope, $location, $http, $routeParams) {   
    	this.paym = paym;
    	
        function init() {
        }
        init();
        
        function paym(){
        	console.log("in padfdsgdsfdyment");
        	$http.post("/api/payment/pay")
        	.then(function(res){
        		console.log(res.data.path);
        		var path = res.data.path;
        		window.location.href = path;
        	});
        }
    }
})();



