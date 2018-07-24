(function () {
    angular
        .module('ShowtimeApp')
        .controller('FindAllShowtimeController',FindAllShowtimeController);

    function FindAllShowtimeController($scope, $location, $http) {    
        function init() {
            $http.get('https://api.internationalshowtimes.com/v4/movies/?countries=US&apikey=').
            then(function(response) {
                console.log(response.data);
                $scope.allShowtimes = response.data;
            });
        }
        init();
    }
})();