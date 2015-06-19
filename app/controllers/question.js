import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,

  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      var question = this.get('model');
      question.set('question', this.get('model.question'));
      question.save();
      this.set('isEditing', false);
    },
    deleteAnswer: function(answer) {

     if (confirm('Are you sure you would like to delete?')){
       var question = this.get('model');
       question.get('answers').removeObject(answer);
       question.save();
       answer.deleteRecord();
       answer.save();
       this.transitionToRoute('question', this.get('id'));
     }
   },
    delete: function() {
      if (confirm('Are you sure you would like to delete?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    }
  }
});
