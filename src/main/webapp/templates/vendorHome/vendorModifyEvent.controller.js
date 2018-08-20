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
			vendorId = $routeParams.vendorId.substring(1,$routeParams.vendorId.length);
			eventId = $routeParams.eventId.substring(1,$routeParams.eventId.length);

			$http.get("/api/person/" + vendorId)
			.then(function(response) {
				$scope.user = response.data;
				user = response.data;
			});
			
			$http.get("/api/event/" + eventId)
			.then(function(response) {
				$scope.event = response.data;
				event = response.data;
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
        	if((eventNew.name != null && eventNew.name != undefined) ||
        			(eventNew.type != null && eventNew.type != undefined) ||
        			(eventNew.capacity != null && eventNew.capacity != undefined) ||
        			(eventNew.description != null && eventNew.description != undefined) ||
        			(eventNew.price != null && eventNew.price != undefined) ||
        			(eventNew.venue != null && eventNew.name != undefined) ||
        			(eventNew.eventDate != null && eventNew.eventDate != undefined)){
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