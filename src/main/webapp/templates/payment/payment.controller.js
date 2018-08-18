(function () {
    angular
        .module('ShowtimeApp')
        .controller('PaymentController',PaymentController);

    function PaymentController($scope, $location, $http, $routeParams, $rootScope) {   
    	this.paym = paym;
    	
        function init() {
        	console.log("rootscope flag- " + $rootScope.loggedIn);
        	console.log("rootscope user- " + $rootScope.userId);
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



