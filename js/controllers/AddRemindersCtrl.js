reminders.controller('AddRemindersCtrl', ['$scope', '$location', 'Data', function ($scope, $location, Data){
  $scope.reminders = Data;
  $scope.newReminder = [];
  $scope.add = function(){
    $scope.newReminder.completed = false;
    $scope.reminders.push($scope.newReminder);
    $location.path('../views/list.html');
  }
}]);

