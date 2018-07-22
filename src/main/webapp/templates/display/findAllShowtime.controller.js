(function () {
    angular
        .module('ShowtimeApp')
        .controller('FindAllShowtimeController',FindAllShowtimeController);

    function FindAllShowtimeController($scope, $location, $http) {
    
    	this.searchMovie = searchMovie;
    
        function init() {
            $http.get('https://api.internationalshowtimes.com/v4/movies/?countries=US&apikey=VSMQVz6XK4lAeSyZJ0RM6ezSH8UWpbmp').
            then(function(response) {
                console.log(response.data);
                $scope.allShowtimes = response.data;
            });
        }
        init();
        
        function searchMovie(movieName) {
            console.log("inside");
            console.log(movieName);
            
            //var url = "https://api.coinmarketcap.com/v1/ticker/";
            
            //$http.get('https://api.coinmarketcap.com/v1/ticker/' + cryptoId + "/").then(function (response) {
            //    console.log(response.data);
            //    $scope.allCryptos = response.data;
            //});
        }
    }
})();