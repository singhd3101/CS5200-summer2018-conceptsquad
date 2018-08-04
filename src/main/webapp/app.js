(function () {
    angular
        .module("ShowtimeApp",['ngRoute'])
        .config(Config);
    function Config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl:'templates/movies/findAllMovies.html',
                controller:'FindAllMoviesController',
                controllerAs:'model'
            })
            .when('/displayAll', {
                templateUrl: 'templates/movies/findAllMovies.html',
                controller: 'FindAllMoviesController',
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
            })
            .when('/cinemas' , {
                templateUrl : 'templates/cinemas/findAllCinemas.html',
                controller : 'FindAllCinemasController',
                controllerAs : 'model'
            })
            .when('/findAllShowtimes/:cinemaId' , {
                templateUrl : 'templates/showtimes/findAllShowtimes.html',
                controller : 'FindAllShowtimesController',
                controllerAs : 'model'
            });
    }
})();