reminders.controller('AddRemindersCtrl', ['$scope', '$location', 'Data', 'angularFire', function ($scope, $location, Data, angularFire){
  $scope.reminders = Data;
  $scope.newReminder = [];
  $scope.add = function(){
    $scope.newReminder.completed = false;
    $scope.reminders.push($scope.newReminder);
    $location.path('../views/list.html');
  }
}]);

