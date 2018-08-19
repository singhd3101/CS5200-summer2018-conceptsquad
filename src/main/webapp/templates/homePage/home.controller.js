(function () {
    angular
        .module('ShowtimeApp')
        .controller('HomePageController',HomePageController);

    function HomePageController($scope, $location, $http, $routeParams) {    
    	var pos;
    	var lat;
    	var long;
    	var loct;
    	var cinemaId;
    	
        function init() {
        		
        	console.log("in home");
        	if (navigator.geolocation) {
        	    navigator.geolocation.getCurrentPosition(function(position){
        	      $scope.$apply(function(){
        	       pos = position;
        	       lat = position.coords.latitude;
        	       long = position.coords.longitude;
        	       console.log(position.coords.latitude);
        	       console.log(position.coords.longitude);
        	       loct='location='+lat+','+long;

        	     console.log("chal pada");
        	      console.log("location is "+loct);
               		$http.get('https://api.internationalshowtimes.com/v4/movies/?'+loct+'&limit=5&fields=ratings,synopsis,cast,trailers,id,title,poster_image&apikey=7n4LklKRw0IXbF6fm4aTSF1NqmRPeSZ5').
               		then(function(response) {
                   console.log(response.data);
                       $scope.allMovies = response.data;
                   });
               		
        	      });
        	    });
        	   
        	  }
            //$http.get('https://api.internationalshowtimes.com/v4/movies/?countries=US&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5').
        	//https://api.internationalshowtimes.com/v4/movies/?location=42.3605,-71.0596&limit=10&fields=synopsis,trailers,id,title,poster_image_thumbnail&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5$http.get('https://api.internationalshowtimes.com/v4/movies/?location='+ lat +','+ long +'&limit=10&fields=synopsis,trailers,id,title,poster_image_thumbnail&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5').
        	
        }
        init();
        
       
    }
})();



//$http.get('https://api.internationalshowtimes.com/v4/movies/?countries=US&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5').
//https://api.internationalshowtimes.com/v4/movies/?location=42.3605,-71.0596&limit=10&fields=ratings,synopsis,cast,trailers,id,title,poster_image&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5
//https://api.internationalshowtimes.com/v4/movies/?location=42.3605,-71.0596&limit=10&fields=synopsis,trailers,id,title,poster_image_thumbnail&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5$http.get('https://api.internationalshowtimes.com/v4/movies/?location='+ lat +','+ long +'&limit=10&fields=synopsis,trailers,id,title,poster_image_thumbnail&apikey=cMQZTx5UYw7m3Ddio8jS0NcFwgmEQkE5').

