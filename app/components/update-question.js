import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    updateQuestion(question) {
      var params = {
        questionCont: this.get('questionCont'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      this.set('updateQuestionForm', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
