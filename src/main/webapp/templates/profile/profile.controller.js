(function () {
    angular
        .module('ShowtimeApp')
        .controller('ProfileController', ProfileController);

    function ProfileController($scope, $location, $http, $window, $routeParams, $route) {
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
    	
        function update(firstName, lastName, username, password, phone, dob){
        	
        	console.log(firstName);
        	console.log(lastName);
        	console.log(username);
        	console.log(password);
        	console.log(phone);
        	console.log(dob);
        	console.log(dob);
        	
        	/*var m = (parseInt(dob.getMonth()) + 1) + "";
        	if(m.length === 1){
        		m = "0" + m;
        	}
        	var d = (parseInt(dob.getDate()) + 1) + "";
        	if(d.length === 1){
        		d = "0" + d;
        	}
        	var formattedDob = dob.getFullYear() + "-" + m + "-" + d;*/
        	
        	const contacts = {
        		phone : phone
        	}
        	
        	if(phone != null && phone != undefined){
        		$http.put("/api/person/"+userId + "/personContacts/" , contacts)
                .then(function (response) {
                	console.log(response.data);
                	$scope.user = user;
                	$route.reload();
                })
        	} else {
        		const userNew = {
                		firstName : firstName,
                		lastName : lastName,
                		userName : username,
                		dob : dob,
                		password : password,
                	};
                	
                	$http.put("/api/person/"+userId, userNew)
                    .then(function (response) {
                    	alert("Profile updated successfully !!");
                    	user = response.data;
                        $scope.user = response.data;
                        $route.reload();
                    })
        	}
        	
        	
        }
        
        function home(){
        	if(user.access === 1){
        		$location.url('/custHome/:'+user.id);
        	}
        	if(user.access === 2){
        		$location.url('/vendorHome/:'+user.id);
        	}
        	if(user.access === 3){
        		$location.url('/adminHome/:'+user.id);
        	}
        }
    }
})();