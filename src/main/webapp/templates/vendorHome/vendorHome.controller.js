(function () {
    angular
        .module('ShowtimeApp')
        .controller('VendorHomeController', VendorHomeController);

    function VendorHomeController($scope, $location, $http, $window) {
        this.addEvent = addEvent;
       
        var baseUrl = new $window.URL($location.absUrl()).origin + "/#!";

        function addEvent() {            
             alert("inside add event");   
        }
    }
})();