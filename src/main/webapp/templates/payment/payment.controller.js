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
<<<<<<< HEAD
        		console.log(res.data);
        		var path = res.data.path;
        		console.log("path is "+path);
        		window.location.href=path;
=======
        		console.log(res.data.path);
        		var path = res.data.path;
        		window.location.href = path;
>>>>>>> a5db61942c99f05b09908d51059451af50879be3
        	});
        }
    }
})();



