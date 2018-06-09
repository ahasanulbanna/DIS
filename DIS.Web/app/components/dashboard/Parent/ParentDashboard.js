angular
    .module('MyApp')
    .controller('parentDashboardCtrl', ['$scope', '$state', 'studentService', 'config', function ($scope, $state, studentService, config) {
        $scope.SImage = window.location.origin + config.baseUrl + 'app/assets/Images/Userp.png';
        $scope.ProfileImage = window.location.origin + config.baseUrl + 'app/assets/Images/Userp.png';
        $scope.AdmitImage = window.location.origin + config.baseUrl + 'app/assets/Images/Admit-Card.png';
        $scope.AcademicDocumentImage = window.location.origin + config.baseUrl + 'app/assets/Images/Document.png';
        $scope.NewsEventImage = window.location.origin + config.baseUrl + 'app/assets/Images/News1.png';
        $scope.MyDocumentImage = window.location.origin + config.baseUrl + 'app/assets/Images/MyDC.png';
        $scope.ParentImage = window.location.origin + config.baseUrl + 'app/assets/Images/couple.png';
        $scope.Payment = window.location.origin + config.baseUrl + 'app/assets/Images/payment.jpg';
        $scope.ProblemImage = window.location.origin + config.baseUrl + 'app/assets/Images/Problem.jpg';
        $scope.PickerImage = window.location.origin + config.baseUrl + 'app/assets/Images/picker.png';
        $scope.RoutineImage = window.location.origin + config.baseUrl + 'app/assets/Images/Time.png';
        $scope.ProfileImage = window.location.origin + config.baseUrl + 'app/assets/Images/Userp.png';
        $scope.SendMailImage = window.location.origin + config.baseUrl + 'app/assets/Images/Email.jpg';



        $scope.save = localStorage.getItem('StudentId');
        var Id = (localStorage.getItem('StudentId'), JSON.parse($scope.save));
        //Fetch Data by Student id
        studentService.getStudent(Id)
            .then(function (response) {
                $scope.student = response;

            }, function () {
                $scope.mmsg = "Not Work";
            });
    }]);
