
  // counter starts at 0
  Session.setDefault('counter', 3);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
      console.log(Session.get('counter'));
    }
  });