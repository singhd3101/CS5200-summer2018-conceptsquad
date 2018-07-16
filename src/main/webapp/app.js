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
            });
    }
})();