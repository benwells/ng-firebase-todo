var reminders = angular.module('reminders', ['ngRoute']);

reminders.config(['$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/list.html',
        controller: 'ViewRemindersCtrl',
        caseInsensitiveMatch: true
      }).when('/new', {
        templateUrl: '../views/new.html',
        // controller: 'ViewRemindersCtrl',
        caseInsensitiveMatch: true
      }).otherwise({redirectTo:'/'});
  }]);
