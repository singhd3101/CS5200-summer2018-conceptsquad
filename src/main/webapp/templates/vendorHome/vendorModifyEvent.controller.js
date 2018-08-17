(function () {
	angular
	.module('ShowtimeApp')
	.controller('VendorModifyEventController', VendorModifyEventController);

	function VendorModifyEventController($scope, $location, $http, $window, $routeParams) {
		this.updateEvent = updateEvent;
		this.profile = profile;
		this.home = home;
        
		var vendorId;
		var eventId;
		var user;
		var event;

		function init(){
			console.log("in edit event form");
			vendorId = $routeParams.vendorId.substring(1,$routeParams.vendorId.length);
			eventId = $routeParams.eventId.substring(1,$routeParams.eventId.length);
			console.log(vendorId);
			console.log(eventId);

			$http.get("/api/person/" + vendorId)
			.then(function(response) {
				$scope.user = response.data;
				user = response.data;
				console.log(response.data);
			});
			
			$http.get("/api/event/" + eventId)
			.then(function(response) {
				$scope.event = response.data;
				event = response.data;
				console.log(response.data);
			});
		}

		init();
		
		function updateEvent(name, type, capacity, description, price, venue, eventDate) {            
			eventNew = {
					name : name,
					type : type,
					description : description,
					venue : venue,
					capacity : capacity,
					price : price,
					eventDate : eventDate
        	};
			console.log("eventNew name " +eventNew.name)
        	if(eventNew.name != null && eventNew.name != undefined){
        		$http.put("/api/event/" + eventId, eventNew)
                .then(function (response) {
                	alert("Event updated successfully !!");
                });
        	}
		}

		function profile() {            
			$location.url('/profile/:'+vendorId);
		}

		function home() {
			$location.url('/vendorHome/:'+vendorId);
		}
	}
})();