(function () {
    angular
        .module("ShowtimeApp",['ngRoute','angular.filter'])
        .config(Config);
    function Config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl:'templates/homePage/home.html',
                controller:'HomePageController',
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
            .when('/adminHome/:adminId/modifyUser/:userId' , {
                templateUrl : 'templates/adminHome/adminModifyUser.html',
                controller : 'AdminModifyUserController',
                controllerAs : 'model'
            })
            .when('/adminHome/:adminId/adminAddEventBooking/:eventId' , {
                templateUrl : 'templates/adminHome/adminAddEventBooking.html',
                controller : 'AdminAddEventBookingController',
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
	        .when('/vendorHome/:vendorId' , {
                templateUrl : 'templates/vendorHome/vendorHome.html',
                controller : 'VendorHomeController',
                controllerAs : 'model'
            })
            .when('/vendorHome/:vendorId/modifyEvent/:eventId' , {
                templateUrl : 'templates/vendorHome/vendorModifyEvent.html',
                controller : 'VendorModifyEventController',
                controllerAs : 'model'
            })
            .when('/displayEvents' , {
                templateUrl : 'templates/displayEvents/displayEvents.html',
                controller : 'DisplayEventsController',
                controllerAs : 'model'
            })
            .when('/selectTickets' , {
                templateUrl : 'templates/displayEvents/selectTickets.html',
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
            .when('/showtimes/:movieId' , {
                templateUrl : 'templates/onlyShowtimes/onlyShowtime.html',
                controller : 'OnlyShowtimesController',
                controllerAs : 'model'
            })
            .when('/eventPayment/:eventId/:noOfTickets/:username' , {
                templateUrl : 'templates/eventPayment/payment.html',
                controller : 'EventPaymentController',
                controllerAs : 'model'
            })
            .when('/eventPaymentAdmin/:eventId/:noOfTickets/:username/:adminId' , {
                templateUrl : 'templates/eventPaymentAdmin/payment.html',
                controller : 'EventPaymentAdminController',
                controllerAs : 'model'
            })
            .when('/movieShowtimes/:cinemaId/movies/:movieId' , {
                templateUrl : 'templates/showtimes/movieShowtime.html',
                controller : 'MovieShowtimesController',
                controllerAs : 'model'
            })
            .when('/seatSelection/:showtimeId/:cinemaId/:movieId' , {
                templateUrl : 'templates/seatSelection/seatSelection.html',
                controller : 'SeatSelectionController',
                controllerAs : 'model'
            })
           
            .when('/payment/:seats/:totalPrice/:cinemaId/:movieId/:showtimeId/:username' , {
                templateUrl : 'templates/payment/payment.html',
                controller : 'PaymentController',
                controllerAs : 'model'
            })
            .when('/success/:showtimeId/:paymentID/:seats/:totalPrice/:username' , {
                templateUrl : 'templates/success/success.html',
                controller : 'SuccessController',
                controllerAs : 'model'
            })
            .when('/eventSuccess/:eventId/:paymentID/:noOfTickets/:totalPrice/:username' , {
                templateUrl : 'templates/success/eventSuccess.html',
                controller : 'EventSuccessController',
                controllerAs : 'model'
        	})
        	.when('/eventSuccessAdmin/:eventId/:paymentID/:noOfTickets/:totalPrice/:username/:adminId' , {
                templateUrl : 'templates/success/eventSuccessAdmin.html',
                controller : 'EventSuccessAdminController',
                controllerAs : 'model'
        	});
    }
})();