(function () {
    angular
        .module('ShowtimeApp')
        .controller('RegisterController', RegisterController);

    function RegisterController($scope, $location, $http, $window) {
        this.register = register;
        var userId;

        function register(firstName, lastName, username, password, dtype) {
            $http.get('/api/person?username=' + username)
            .then(function(response) {
            	var user = response.data[0];
            	if(user === undefined || user === null){
            		const user = {
                            firstName : firstName,
                            lastName  : lastName,
                            userName  : username,
                            password  : password
                    };
            		if(dtype === 'Customer'){
            			$http.post('/api/customer/', user)
            			.then(function(response) {
            				userId = response.data.id;
            			})
            			.then(function () {
            				$location.url("/custHome/:"+userId);
            			});
            		} else {
            			$http.post('/api/vendor/', user)
            			.then(function(response) {
            				userId = response.data.id;
            			})
            			.then(function () {
            				$location.url("/vendorHome/:"+userId);
            			});
            		}
            	} else {
            		alert("Email already present");
            	}
            });
        }
    }

})();