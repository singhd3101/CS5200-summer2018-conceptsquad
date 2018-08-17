(function () {
    angular
        .module('ShowtimeApp')
        .controller('LoginController', LoginController);

    function LoginController($scope, $rootScope, $location, $http, $window) {
        this.login = login;
       
        var baseUrl = new $window.URL($location.absUrl()).origin + "/#!";

        function login(username, password) {            
             $http.get("/api/person?username="+username+"&password="+password)
                .then(function (response) {
                	id = response.data[0].id;
                	if (response.data[0].access === 3){
                        console.log("admin validated");
                        $location.url('/adminHome/:'+id);
                    }
                	else if(response.data[0].access === 2){
                        console.log("vendor validated");
                        $location.url('/vendorHome/:'+id);
                    }
                    else {
                        console.log("customer validated");
                        $rootScope.user = response.data[0];
                        $rootScope.userId = id;
                        $location.url('/custHome/:'+id);
                    }
                })   
        }
    }
})();