(function () {
    angular
        .module('ShowtimeApp')
        .controller('ShowtimeMainController', ShowtimeMainController);
    function ShowtimeMainController($scope, $location, $http, $rootScope) {
        this.search=search;
        
        function init() {
            $location.url("/displayAll/")
        };
        
        init();
    }
})();
