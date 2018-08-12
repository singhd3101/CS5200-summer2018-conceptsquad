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
                	id = response.data[0].id;
                	if (response.data[0].access === 3){
                        console.log("validated");
                        $location.url('/adminHome/:'+id);
                    }
                    else {
                        console.log("not validated");
                        $location.url('/custHome/:'+id);
                    }
                })   
        }
    }
})();