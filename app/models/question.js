import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  question: DS.attr('string'),
  description: DS.attr('string'),
  answers: DS.hasMany('answer', {async: true})
});
