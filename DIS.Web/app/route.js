MyApp.config(function ($stateProvider, $urlRouterProvider, $qProvider, $urlMatcherFactoryProvider, $locationProvider) {
    $qProvider.errorOnUnhandledRejections(false);
    $locationProvider.hashPrefix('');
    //$locationProvider.html5Mode(true);
    //$urlMatcherFactoryProvider.caseInsensitive(true);
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('root',
            {
                url: '',
                abstract: true,
                views: {
                    '': {
                        templateUrl: 'app/components/main.html'
                    },
                    'nav@root': {
                        templateUrl: 'app/components/asset/nav.html',
                        controller: 'navCtrl'
                    }
                }

            })
        .state('root.login',
            {
                url: '/login',
                views: {
                    'mainView': {
                        templateUrl: 'app/components/login/Login.html',
                        controller: 'loginCtrl'
                    }
                }

            })

        //Parent Dashboard
        .state('root.dashboard',
            {
                url: '/dashboard',
                abstract: true,
                views: {
                    'mainView': {
                        templateUrl: 'app/components/dashboard/dashboard.html'
                    }
                }
            })
        .state('root.dashboard.parent',
            {
                url: '/parent',
                views: {
                    'dashView': {
                        templateUrl: 'app/components/dashboard/Parent/Dashbord.html',
                        controller: 'parentDashboardCtrl'
                    }
                }
            })
        //Profile
        .state('root.rootProfile',
            {
                url: '/dashboard/student',
                abstract: true,
                views: {
                    'mainView': {
                        templateUrl: 'app/components/dashboard/Parent/Profile/ProfileHeader.html'
                    }
                }
            })
        .state('root.rootProfile.studentInfo',
            {
                url: '/StudentInfo',
                views: {
                    'ViewProfile': {
                        templateUrl: 'app/components/dashboard/Parent/Profile/StudentInfo.html',
                        controller: 'profileCtrl'
                    }
                }
            })
        .state('root.rootProfile.StudentInfoEdit',
            {
                url: '/dashboard/student/StudentInfoEdit/:id',
                views: {
                    'ViewProfile': {
                        templateUrl: 'app/components/dashboard/Parent/Profile/StudentInfoEdit.html',
                        controller: 'profileEditCtrl'
                    }
                }
            })
        .state('root.rootProfile.parentInfo',
            {
                url: '/parentInfo',
                views: {
                    'ViewProfile': {
                        templateUrl: 'app/components/dashboard/Parent/Profile/ParentInfo.html',
                        controller: 'profileCtrl'
                    }
                }
            })
        .state('root.rootProfile.previouStudy',
            {
                url: '/dashboard/student/previouStudy',
                views: {
                    'ViewProfile': {
                        templateUrl: 'app/components/dashboard/Parent/Profile/PreviousStudy.html',
                        controller: 'profileCtrl'

                    }
                }
            })
        .state('root.rootProfile.guardianInfo',
            {
                url: '/dashboard/student/guardianInfo',
                views: {
                    'ViewProfile': {
                        templateUrl: 'app/components/dashboard/Parent/Profile/GuardianInfo.html',
                        controller: 'profileCtrl'

                    }
                }
            })
        .state('root.rootProfile.reference',
            {
                url: '/dashboard/student/reference',
                views: {
                    'ViewProfile': {
                        templateUrl: 'app/components/dashboard/Parent/Profile/Refernece.html'

                    }
                }
            })
        .state('root.rootProfile.healthInfo',
            {
                url: '/dashboard/student/healthInfo',
                views: {
                    'ViewProfile': {
                        templateUrl: 'app/components/dashboard/Parent/Profile/HealthInfo.html'

                    }
                }
            })
        .state('root.rootProfile.feedback',
            {
                url: '/dashboard/student/feedback',
                views: {
                    'ViewProfile': {
                        templateUrl: 'app/components/dashboard/Parent/Profile/Feedback.html'

                    }
                }
            })
        //Profile End
        .state('root.myAdmit',
            {
                url: '/dashboard/parent/myAdmit',
                views: {
                    'mainView': {
                        templateUrl: 'app/components/dashboard/Parent/Admit/Admit.html',
                        controller: 'AdmitCtrl'
                    }
                }
            })
        .state('print',
            {
                url: '/dashboard/parent/myAdmit/print',
                views: {
                    '': {
                        templateUrl: 'app/components/dashboard/Parent/Admit/print.html',
                        controller: 'AdmitCtrl'
                    }
                }
            })
        .state('root.document',
            {
                url: '/dashboard/parent/document',
                views: {
                    'mainView': {
                        templateUrl: 'app/components/dashboard/Parent/MyDocument/Document.html'

                    }
                }
            })
        .state('root.academicdocument',
            {
                url: '/dashboard/parent/academicdocument',
                views: {
                    'mainView': {
                        templateUrl: 'app/components/dashboard/Parent/AcademicDocument/Academic.html',
                        controller: 'AcademicDocCtrl'
                    }
                }
            })
        .state('root.parent',
            {
                url: '/dashboard/parent/Studentparent',
                views: {
                    'mainView': {
                        templateUrl: 'app/components/dashboard/Parent/MyParent/Parent.html',
                        controller: 'studentParentCtrl'
                    }
                }
            })
        .state('root.parentedit',
            {
                url: '/dashboard/parent/parentedit',
                views: {
                    'mainView': {
                        templateUrl: 'app/components/dashboard/Parent/MyParent/ParentEdit.html',
                        controller: 'studentParentCtrl'
                    }
                }

            })
        .state('root.payment',
            {
                url: '/dashboard/parent/payment',
                views: {
                    'mainView': {
                        templateUrl: 'app/components/dashboard/Parent/MyPayment/Paymentledger.html'
                    }
                }
            })
        .state('root.problem',
            {
                url: '/dashboard/student/problem',
                views: {
                    'mainView': {
                        templateUrl: 'app/components/dashboard/Parent/MyProblem/MyProblem.html'

                    }
                }
            })
        .state('root.routine',
            {
                url: '/dashboard/student/routine',
                views: {
                    'mainView': {
                        templateUrl: 'app/components/dashboard/Parent/MyRoutine/Routine.html'
                    }
                }
            })
        .state('root.mail',
            {
                url: '/dashboard/parent/mail',
                views: {
                    'mainView': {
                        templateUrl: 'app/components/dashboard/Parent/SendMail/SendMail.html'
                    }
                }
            })
        .state('root.picker',
            {
                url: '/dashboard/parent/picker',
                views: {
                    'mainView': {
                        templateUrl: 'app/components/dashboard/Parent/Picker/Picker.html'
                    }
                }
            })
        //End

        //Headmaster Dashboard
        .state('root.Dashboard',
            {
                abstract: true,
                url: '/dashboard',
                views: {
                    'mainView': {
                        templateUrl: 'app/components/dashboard/HeadmasterDashboard/headmaster-dashboard.html'
                    }
                }

            })
        .state('root.Dashboard.headmaster', {
            url: '/headmaster',
            views: {
                'HeadmasterdashView': {
                    templateUrl: 'app/components/dashboard/HeadmasterDashboard/Headmaster/headmaster.html',
                    controller: 'HeadmasterCtrl'
}
            }

        })
        .state('root.Profile', {

            url: '/dashboard/headmaster/profile',
            views: {
                'mainView': {
                    templateUrl: 'app/components/dashboard/HeadmasterDashboard/Headmaster/Profile/Profile.html'
                }
            }

        })

        //End
});