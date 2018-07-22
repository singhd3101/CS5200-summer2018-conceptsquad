(function () {
    angular
        .module("ShowtimeApp",['ngRoute'])
        .config(Config);
    function Config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl:'templates/display/findAllShowtime.html',
                controller:'FindAllShowtimeController',
                controllerAs:'model'
            })
            .when('/displayAll', {
                templateUrl: 'templates/display/findAllShowtime.html',
                controller: 'FindAllShowtimeController',
                controllerAs:'model'
            })
            .when('/login' , {
                templateUrl : 'templates/login/login.html',
                controller : 'LoginController',
                controllerAs : 'model'
            })
            .when('/register' , {
                templateUrl : 'templates/register/register.html',
                controller : 'RegisterController',
                controllerAs : 'model'
            });
    }
})();