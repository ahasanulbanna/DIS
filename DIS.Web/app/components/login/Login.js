angular
    .module('MyApp')
    .controller('loginCtrl', ['$scope', '$state', 'config', function ($scope, $state, config) {
        $scope.ImagePath = window.location.origin + config.baseUrl + 'app/assets/Images/login.png';
        var Id;
        $scope.login = function (user) {
            Id=user.Id
            localStorage.setItem('StudentId', JSON.stringify(Id));
            var aa = user.Type;
            if (aa == 'Parent') {
                $state.go('root.dashboard.parent');
            }
            else if (aa == 'Headmaster'){
                $state.go('root.Dashboard.headmaster');
            }
           
        }
    }]);