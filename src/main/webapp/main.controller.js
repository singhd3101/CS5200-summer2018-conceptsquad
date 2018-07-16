(function () {
    angular
        .module('ShowtimeApp')
        .controller('ShowtimeMainController', ShowtimeMainController);
    function ShowtimeMainController($scope, $location, $http) {
        this.search=search;
        function init() {
            $location.url("/displayAll/")
        }
    }
})();