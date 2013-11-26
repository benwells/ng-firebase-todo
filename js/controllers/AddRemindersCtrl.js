reminders.controller('AddRemindersCtrl', ['$scope', '$location', 'Data', function ($scope, $location, Data){
  $scope.text = ""
  $scope.add = function(){
    Data.addReminder($scope.text);
    $location.path('../views/list.html');
  }
}]);

