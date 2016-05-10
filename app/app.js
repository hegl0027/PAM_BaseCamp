(function (angular) {
    'use strict';

    var stateConfig = function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/app/home/one');

        $stateProvider
            .state('app', {
                abstract: true,
                url: '/app',
                template: '<div ui-view></div>'
            })

            .state('app.patterns', {
                url: '/patterns',
                templateUrl: 'views/patterns/patterns.html',
                controller: 'patternsController',
                data: {
                    title: 'Patterns'
                }
            })

            .state('app.support', {
                url: '/support',
                templateUrl: 'views/support/support.html',
                controller: 'supportController',
                data: {
                    title: 'Support'
                }
            })

            .state('app.voiceandtone', {
                url: '/voiceandtone',
                templateUrl: 'views/voiceandtone/voiceandtone.html',
                controller: 'voiceAndToneController',
                data: {
                    title: 'Voice and Tone'
                }
            })

            .state('app.styleguide', {
                url: '/styleguide',
                templateUrl: 'views/styleguide/styleguide.html',
                controller: 'styleGuideController',
                data: {
                    title: 'Style Guide'
                }
            })

            .state('app.architecture', {
                url: '/architecture',
                templateUrl: 'views/architecture/architecture.html',
                controller: 'architectureController',
                data: {
                    title: 'Architecture'
                }
            })

            .state('app.home', {
                abstract: true,
                url: '/home',
                templateUrl: 'views/home/home.abstract.html',
                controller: 'abstractHomeController',
                data: {
                    title: 'Home'
                }
            })
            .state('app.home.one', {
                url: '/one',
                templateUrl: 'views/home/home.one.html',
                controller: 'homeOneController'
            })
            .state('app.home.two', {
                url: '/two',
                templateUrl: 'views/home/home.two.html',
                controller: 'homeTwoController'
            })
            .state('app.home.three', {
                url: '/three',
                templateUrl: 'views/home/home.three.html',
                controller: 'homeThreeController'
            })
            .state('app.home.four', {
                url: '/four',
                templateUrl: 'views/home/home.four.html',
                controller: 'homeFourController'
            })
            .state('app.home.five', {
                url: '/five',
                templateUrl: 'views/home/home.five.html',
                controller: 'homeFiveController'
            })

            /* REPORTING ROUTING*/
            .state('app.reporting', {
                abstract: true,
                url: '/reporting',
                template: '<div ui-view class="partial__wrapper"></div>',
                controller: 'abstractReportingController',
                data: {
                    title: 'Reporting'
                }
            })
            .state('app.reporting.one', {
                url: '/one',
                templateUrl: 'views/reporting/reporting.one.html',
                controller: 'reportingOneController'
            })
            .state('app.reporting.two', {
                url: '/two',
                templateUrl: 'views/reporting/reporting.two.html',
                controller: 'reportingTwoController'
            })
            .state('app.reporting.three', {
                url: '/three',
                templateUrl: 'views/reporting/reporting.three.html',
                controller: 'reportingThreeController'
            })

            /* ADMIN ROUTING*/
            .state('app.admin', {
                abstract: true,
                url: '/admin',
                template: '<div ui-view class="partial__wrapper"></div>',
                controller: 'abstractAdminController',
                data: {
                    title: 'Admin'
                }
            })
            .state('app.admin.one', {
                url: '/one',
                templateUrl: 'views/sysadmin/sysadmin.one.html',
                controller: 'adminOneController'
            })
            .state('app.admin.two', {
                url: '/two',
                templateUrl: 'views/sysadmin/sysadmin.two.html',
                controller: 'adminTwoController'
            })
            .state('app.admin.three', {
                url: '/three',
                templateUrl: 'views/sysadmin/sysadmin.three.html',
                controller: 'adminThreeController'
            });
    };

    var loadingBarConfig = function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeBar = false;
        cfpLoadingBarProvider.latencyThreshold = 20;
    };

    /**
     * Application entry module
     */
    angular.module('app', [
            'ui.router',
            'ngAnimate',
            'angular-loading-bar',
            'ngResource'
        ])
        .config(stateConfig)
        .config(loadingBarConfig);

})(angular);
