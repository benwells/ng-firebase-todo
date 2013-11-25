reminders.controller('ViewRemindersCtrl', ['$scope', 'Data', 'angularFire', function ($scope, Data, angularFire){
  $scope.reminders = [];
  Data.loadReminders($scope, 'reminders');
}]);

