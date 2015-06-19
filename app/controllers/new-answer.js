import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['question'],
  actions: {
    save: function() {
      var question = this.get('controllers.question.model');
      var answer = this.store.createRecord('answer', {
        text: this.get('text'),
        date: Date.now()
      });
      answer.save().then(function() {
      question.get('answers').pushObject(answer);
      question.save();
    });

      this.transitionToRoute('question', question.get('id'));
    }
    }
  });
