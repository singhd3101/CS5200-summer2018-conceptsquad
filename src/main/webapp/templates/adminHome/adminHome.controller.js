(function () {
    angular
        .module('ShowtimeApp')
        .controller('CustHomeController', CustHomeController);

    function CustHomeController($scope, $location, $http, $window) {
        this.profile = profile;
       
        var baseUrl = new $window.URL($location.absUrl()).origin + "/#!";

        function profile() {            
             console.log("navigate to update profile section");   
        }
    }
})();