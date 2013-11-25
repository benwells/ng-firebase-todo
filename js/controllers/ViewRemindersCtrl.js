reminders.controller('ViewRemindersCtrl', ['$scope', function ($scope){
  $scope.reminders = [{
    text: 'I need to do this',
    completed: false
  },
  {
    text: 'also this',
    completed: true
  }];

  $scope.addReminder = function(){
    
  }
}])

