angular
    .module('MyApp')
    .controller('navCtrl', ['$scope', '$state', 'config',
        function ($scope, $state, config) {
            $scope.ImagePath = window.location.origin + config.baseUrl + 'app/assets/Images/dis.png';
    }]);