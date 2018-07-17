(function () {
    angular
        .module('ShowtimeApp')
        .controller('FindAllShowtimeController',FindAllShowtimeController);

    function FindAllShowtimeController($scope, $location, $http) {
        function init() {
            $http.get('https://api.internationalshowtimes.com/v4/movies/?countries=US&apikey=VSMQVz6XK4lAeSyZJ0RM6ezSH8UWpbmp').
            then(function(response) {
                console.log(response.data);
                $scope.allShowtimes = response.data;
            });
        }
        init();
    }
})();