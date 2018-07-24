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
            .when('/adminHome' , {
                templateUrl : 'templates/adminHome/adminHome.html',
                controller : 'AdminHomeController',
                controllerAs : 'model'
            })
            .when('/custHome' , {
                templateUrl : 'templates/custHome/custHome.html',
                controller : 'CustHomeController',
                controllerAs : 'model'
            })
            .when('/displayEvents' , {
                templateUrl : 'templates/displayEvents/displayEvents.html',
                controller : 'DisplayEventsController',
                controllerAs : 'model'
            })
            .when('/eventDetails' , {
                templateUrl : 'templates/eventDetails/eventDetails.html',
                controller : 'EventDetailsController',
                controllerAs : 'model'
            })
            .when('/eventDetails/:id' , {
                templateUrl : 'templates/eventDetails/eventDetails.html',
                controller : 'EventDetailsController',
                controllerAs : 'model'
            })
            .when('/register' , {
                templateUrl : 'templates/register/register.html',
                controller : 'RegisterController',
                controllerAs : 'model'
            });
    }
})();