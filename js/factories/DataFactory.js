reminders.factory('Data', ['angularFireCollection',
  function (angularFireCollection) {
    var url = new Firebase('https://todosng.firebaseio.com/reminders');

    return {
      getAllReminders: function () {
        var ref = angularFireCollection(url);
        return ref;
      },
      addReminder: function (newReminder) {
        console.log(newReminder)
        var ref = angularFireCollection(url);
        ref.add({text: newReminder, completed: false});
      }
    }
  }
]);