(function () {
    angular
        .module('ShowtimeApp')
        .controller('HomeController',HomeController);

    function HomeController($scope, $location, $http) {    
    	var pos;
    	var lat;
    	var long;
        function init() {
        	
        	if (navigator.geolocation) {
        	    navigator.geolocation.getCurrentPosition(function(position){
        	      $scope.$apply(function(){
        	       pos = position;
        	       lat = position.coords.latitude;
        	       long = position.coords.longitude;
        	       console.log(position.coords.latitude);
        	       console.log(position.coords.longitude);
        	       console.log("chal pada");
        	      });
        	    });
        	  }
            //$http.get('https://api.internationalshowtimes.com/v4/movies/?countries=US&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5').
        	//https://api.internationalshowtimes.com/v4/movies/?location=42.3605,-71.0596&limit=10&fields=synopsis,trailers,id,title,poster_image_thumbnail&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5$http.get('https://api.internationalshowtimes.com/v4/movies/?location='+ lat +','+ long +'&limit=10&fields=synopsis,trailers,id,title,poster_image_thumbnail&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5').
        	$http.get('https://api.internationalshowtimes.com/v4/movies/?location=42.3605,-71.0596&limit=10&fields=ratings,synopsis,cast,trailers,id,title,poster_image_thumbnail&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5').
        	then(function(response) {
                console.log(response.data);
                $scope.allMovies = response.data;
            });
        }
        init();
    }
})();
