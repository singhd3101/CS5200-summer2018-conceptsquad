(function () {
    angular
        .module('ShowtimeApp')
        .controller('LoginController', LoginController);

    function LoginController($scope, $location, $http, $window) {
        this.login = login;
        this.check = check;
        var baseUrl = new $window.URL($location.absUrl()).origin + "/#!";

        function login(username, password) {
            console.log("hello world");
            console.log(username, password);
            console.log(baseUrl);
        }
    }

})();