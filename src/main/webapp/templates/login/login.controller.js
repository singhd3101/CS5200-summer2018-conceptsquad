(function () {
    angular
        .module('ShowtimeApp')
        .controller('LoginController', LoginController);

    function LoginController($scope, $location, $http, $window) {
        this.login = login;
       
        var baseUrl = new $window.URL($location.absUrl()).origin + "/#!";

        function login(username, password) {            
             $http.get("/api/person?username="+username+"&password="+password)
                .then(function (response) {
                	if (response.data[0].userName === "Administrator"){
                        console.log("validated");
                        $location.url('/adminHome/');
                    }
                    else {
                        console.log("not validated");
                        $location.url('/custHome/');
                    }
                })   
        }
    }
})();