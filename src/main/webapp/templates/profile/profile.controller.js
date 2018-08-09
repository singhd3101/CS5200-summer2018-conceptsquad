(function () {
    angular
        .module('ShowtimeApp')
        .controller('ProfileController', ProfileController);

    function ProfileController($scope, $location, $http, $window, $routeParams) {
    	this.update = update;
    	var user;
    	var custId;
    	
    	function init(){
    		
    	}
    	
    	init();
    	
        function update(firstName, lastName, username, password, phone, dob, coco){
        	console.log(firstName);
        	alert(coco);
        }
    }
})();