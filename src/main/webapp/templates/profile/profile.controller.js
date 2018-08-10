(function () {
    angular
        .module('ShowtimeApp')
        .controller('ProfileController', ProfileController);

    function ProfileController($scope, $location, $http, $window, $routeParams) {
    	this.update = update;
    	this.home = home;
    	var user;
    	var userId;
    	
    	function init(){
    		userId = $routeParams.custId.substring(1,$routeParams.custId.length);
    		$http.get("/api/person/"+userId)
            .then(function (response) {
            	user = response.data;
                $scope.user = response.data;
            });
    	}
    	
    	init();
    	
        function update(firstName, lastName, username, password, phone, dob, input){
        	console.log(dob);
        	var m = (parseInt(dob.getMonth()) + 1) + "";
        	if(m.length === 1){
        		m = "0" + m;
        	}
        	var d = (parseInt(dob.getDate()) + 1) + "";
        	if(d.length === 1){
        		d = "0" + d;
        	}
        	var formattedDob = dob.getFullYear() + "-" + m + "-" + d;
        	console.log(formattedDob);
        	const userNew = {
        		firstName : firstName,
        		lastName : lastName,
        		userName : username,
        		dob : formattedDob,
        		password : password
        	};
        	$http.put("/api/person/"+userId, userNew)
            .then(function (response) {
            	alert("Profile updated successfully !!");
            	user = response.data;
                $scope.user = response.data;
            })
        }
        
        function home(){
        	$location.url('/custHome/:'+id);
        }
    }
})();