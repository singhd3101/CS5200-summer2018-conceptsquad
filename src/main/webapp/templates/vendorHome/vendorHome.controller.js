(function () {
    angular
        .module('ShowtimeApp')
        .controller('VendorHomeController', VendorHomeController);

    function VendorHomeController($scope, $location, $http, $window, $routeParams) {
        this.addEvent = addEvent;
        this.vendorId = vendorId;
        
        function addEvent() {            
             alert("inside add event");   
        }
        
        function profile() {            
        	$location.url('/profile/:'+vendorId);
        }
        
        function home() {
        	$location.url('/adminHome/:'+vendorId);
        }
    }
})();