angular
    .module('MyApp')
    .controller('HeadmasterCtrl', ['$scope', '$state', 'config', function ($scope, $state, config) {
        $scope.HImage = window.location.origin + config.baseUrl + 'app/assets/Images/Userp.png';
        $scope.ReportCardImage = window.location.origin + config.baseUrl + 'app/assets/Images/report1.jpg';
        $scope.TotalStudentImage = window.location.origin + config.baseUrl + 'app/assets/Images/Student.jpg';
        $scope.StudentSelectionImage = window.location.origin + config.baseUrl + 'app/assets/Images/section.jpg';
        $scope.AttendImage = window.location.origin + config.baseUrl + 'app/assets/Images/attend.jpg';
        $scope.RoutineImage = window.location.origin + config.baseUrl +'app/assets/Images/routine.jpg';
        $scope.CollectionImage = window.location.origin + config.baseUrl + 'app/assets/Images/collection.jpg';
        $scope.HeadWiseImage = window.location.origin + config.baseUrl + 'app/assets/Images/payment2.jpg';
        $scope.ReportImage = window.location.origin + config.baseUrl + 'app/assets/Images/payrep.png';
        $scope.NoticeBord = window.location.origin + config.baseUrl + 'app/assets/Images/notice-icon.png';
        $scope.ClassContentImage = window.location.origin + config.baseUrl + 'app/assets/Images/cont.png';

    }]);
