(function () {
    angular
        .module("ShowtimeApp",['ngRoute','angular.filter'])
        .config(Config);
    function Config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl:'templates/home/home.html',
                controller:'HomeController',
                controllerAs:'model'
            })
            .when('/profile', {
                templateUrl:'templates/profile/profile.html',
                controller:'ProfileController',
                controllerAs:'model'
            })
            .when('/profile/:custId', {
                templateUrl:'templates/profile/profile.html',
                controller:'ProfileController',
                controllerAs:'model'
            })
            .when('/logout', {
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
            .when('/adminHome/:adminId' , {
                templateUrl : 'templates/adminHome/adminHome.html',
                controller : 'AdminHomeController',
                controllerAs : 'model'
            })
            .when('/custHome' , {
                templateUrl : 'templates/custHome/custHome.html',
                controller : 'CustHomeController',
                controllerAs : 'model'
            })
	        .when('/custHome/:id' , {
                templateUrl : 'templates/custHome/custHome.html',
                controller : 'CustHomeController',
                controllerAs : 'model'
            })
            .when('/custHome/:custId/bookingDetails/:bookId/type/:bType' , {
                templateUrl : 'templates/bookingDetails/bookingDetails.html',
                controller : 'BookingDetailsController',
                controllerAs : 'model'
            })
            .when('/vendorHome' , {
                templateUrl : 'templates/vendorHome/vendorHome.html',
                controller : 'VendorHomeController',
                controllerAs : 'model'
            })
	        .when('/vendorHome/:id' , {
                templateUrl : 'templates/vendorHome/vendorHome.html',
                controller : 'vendorHomeController',
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
            .when('/movies' , {
                templateUrl : 'templates/movies/findAllMovies.html',
                controller : 'FindAllMoviesController',
                controllerAs : 'model'
            })
            .when('/findAllShowtimes' , {
                templateUrl : 'templates/showtimes/findAllShowtimes.html',
                controller : 'FindAllShowtimesController',
                controllerAs : 'model'
            })
            .when('/findAllShowtimes/:cinemaId' , {
                templateUrl : 'templates/showtimes/findAllShowtimes.html',
                controller : 'FindAllShowtimesController',
                controllerAs : 'model'
            })
        	.when('/movies/:cinemaId' , {
            templateUrl : 'templates/movies/moviesAtCinema.html',
            controller :  	'MovieAtCinemaController',
            controllerAs : 'model'
        	})
        	.when('/payment' , {
                templateUrl : 'templates/payment/payment.html',
                controller : 'PaymentController',
                controllerAs : 'model'
            })
            .when('/movieShowtimes/:cinemaId/movies/:movieId' , {
                templateUrl : 'templates/showtimes/movieShowtime.html',
                controller : 'MovieShowtimesController',
                controllerAs : 'model'
            })
        	.when('/pay/success?paymentId=:paymentId&token=:token&PayerID=:PayerID' , {
            //.when('/pay/success/pay/success' , {
            templateUrl : 'templates/payment/success.html',
            controller :  	'PaymentController',
            controllerAs : 'model'
        	});
    }
})();