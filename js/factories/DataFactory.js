reminders.factory('Data', ['angularFire', function (angularFire) {
    return {
      loadReminders: function (scope, model) {
        var ref = new Firebase('https://todosng.firebaseio.com/todosng');
        return angularFire(ref, scope, model, []);
      }
    }
}]);