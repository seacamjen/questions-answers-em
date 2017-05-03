import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
      var params = {
        questionCont: this.get('questionCont'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
