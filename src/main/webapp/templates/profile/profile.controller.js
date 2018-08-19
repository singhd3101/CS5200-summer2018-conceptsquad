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
    	
        function update(firstName, lastName, userName, password, phone, dob, street1, street2, city, state, zip){
        	
        	const contacts = {
        		phone : phone
        	}
        	
        	const userNew = {
            	firstName : firstName,
            	lastName : lastName,
            	userName : userName,
            	dob : dob,
            	password : password,
            };
        	
        	const add = {
        		street1 : street1,
        		street2 : street2,
        		city : city,
        		zip : zip,
        		state : state
        	}
        	
        	if((street1 != null && street1 != undefined) ||
        		(street2 != null && street2 != undefined) ||	
        		(city != null && city != undefined) ||
        		(state != null && state != undefined) ||
        		(zip != null && zip != undefined)){
        		
        		$http.put("/api/person/"+userId + "/personAddresses/" , add)
                .then(function (response) {
                	console.log(response.data);
                })
        	}  
        	if(phone != null && phone != undefined){
        		
        		$http.put("/api/person/"+userId + "/personContacts/" , contacts)
                .then(function (response) {
                	console.log(response.data);
                })
        	} 
        	
        	if((firstName != null && firstName != undefined) ||
            	(lastName != null && lastName != undefined) ||
            	(userName != null && userName != undefined) ||
            	(dob != null && dob != undefined) ||
            	(password != null && password != undefined)) {
            		
            	$http.put("/api/person/"+userId, userNew)
                  .then(function (response) {
                   	   console.log(response.data);
                })
            }
        	
        	alert("Profile user updated successfully !!");
        	home();
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