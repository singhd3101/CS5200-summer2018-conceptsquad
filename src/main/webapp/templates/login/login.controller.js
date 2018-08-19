
(function () {
   angular
       .module('ShowtimeApp')
       .controller('LoginController', LoginController);

   function LoginController($scope, $rootScope, $location, $http, $window, $rootScope) {
       this.login = login;
       var user;
      
       var baseUrl = new $window.URL($location.absUrl()).origin + "/#!";
       
       /*function init(){
    	   if($rootScope.user != undefined){
				user = $rootScope.user;
				alert("user defined");
			
			} else {
				alert("user not defined");
			}
			
       }
       init();*/

       function login(username, password) {  
            $http.get("/api/person?username="+username+"&password="+password)
               .then(function (response) {
               	if(response.data[0] == undefined){
               		alert("Invalid Credentials");
               	} else {
               		id = response.data[0].id;
                   	if (response.data[0].access === 3){
                           console.log("admin validated");
                           $rootScope.user = response.data[0];
                           $rootScope.userId = id;
                           $location.url('/adminHome/:'+id);
                       }
                   	else if(response.data[0].access === 2){
                           console.log("vendor validated");
                           $rootScope.user = response.data[0];
                           $rootScope.userId = id;
                           $location.url('/vendorHome/:'+id);
                       }
                    else {
                    	   console.log("customer validated");
                           $rootScope.user = response.data[0];
                           $rootScope.userId = id;
                           $location.url('/custHome/:'+id);
                    }
               	}
               })   
       }
   }
})();