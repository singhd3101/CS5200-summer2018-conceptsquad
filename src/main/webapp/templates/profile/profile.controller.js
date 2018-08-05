(function () {
    angular
        .module('ShowtimeApp')
        .controller('ProfileController', ProfileController);

    function ProfileController($scope, $location, $http, $window, $routeParams) {
    	this.update = update;
    	var user;
    	var custId;
    	
    	function init(){
    		custId = $routeParams.custId.substring(1,$routeParams.custId.length);
    		$http.get("/api/person/"+custId)
            .then(function (response) {
            	$scope.user=response.data;
                user=response.data;
            })
    	}
    	
    	init();
    	
        function update(firstName, lastName, username, password, phone, dob){
        	console.log(firstName);
        }
    }
})();