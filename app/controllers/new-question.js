import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var newQuestion = this.store.createRecord('question', {
        name: this.get('name'),
        question: this.get('question'),
        description: this.get('description')
      });

      newQuestion.save();
      this.transitionToRoute('questions');
    }
  }
});
