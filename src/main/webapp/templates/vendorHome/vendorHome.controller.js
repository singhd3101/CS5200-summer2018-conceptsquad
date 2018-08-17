(function () {
	angular
	.module('ShowtimeApp')
	.controller('VendorHomeController', VendorHomeController);

	function VendorHomeController($scope, $location, $http, $window, $routeParams) {
		this.addEvent = addEvent;
		this.profile = profile;
		this.deleteEvent = deleteEvent;
        this.home = home;
        this.getEvents = getEvents;
        this.modifyEvent = modifyEvent;
        
		var vendorId;
		var user;

		function init(){
			vendorId = $routeParams.vendorId.substring(1,$routeParams.vendorId.length);

			$http.get("/api/person/" + vendorId)
			.then(function(response) {
				$scope.user = response.data;
				user = response.data;
			});
		}

		init();
		
		function getEvents(){
			$http.get("/api/vendor/" + vendorId)
			.then(function(response) {
				$scope.allEvents = response.data.eventsAdded;
			});
		}
		
		function modifyEvent(id){
			$location.url('/vendorHome/:'+ vendorId + '/modifyEvent/:' + id);
		}

		function addEvent(name, type, capacity, description, price, venue, eventDate) {            
			eventNew = {
					name : name,
					type : type,
					description : description,
					venue : venue,
					capacity : capacity,
					price : price,
					eventDate : eventDate
        	};
        	if(eventNew.name != null && eventNew.name != undefined){
        		$http.post("/api/vendor/" + vendorId + "/event", eventNew)
                .then(function (response) {
                	alert("Event added successfully !!");
                });
        	}
		}
		
		function deleteEvent(eventId) { 
			if (confirm("Are you sure you want to delete this Event. The associated Bookings will also be deleted. Click OK to continue. Click Cancel to return.")) {
				$http.delete("/api/event/" + eventId)
				.then(function(response) {
					$http.get("/api/vendor/" + vendorId)
					.then(function(response) {
						$scope.allEvents = response.data.eventsAdded;
					});
				});
		    } else {
		    	 console.log("No");
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