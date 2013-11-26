reminders.factory('Data', ['angularFireCollection',
  function (angularFireCollection) {
    var url = new Firebase('https://todosng.firebaseio.com/reminders');
    var ref = angularFireCollection(url);

    return {
      getAllReminders: function () {
        return ref;
      },
      addReminder: function (newReminderText) {
        ref.add({text: newReminderText, completed: false});
      }
    }
  }
]);