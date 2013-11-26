reminders.controller('ViewRemindersCtrl', ['$scope', 'Data', function ($scope, Data){
  $scope.reminders = Data.getAllReminders();
}]);

