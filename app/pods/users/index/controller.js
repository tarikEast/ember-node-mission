import Ember from "ember";

const {
  Controller
} = Ember;

export default Controller.extend({
  actions: {
    goToUser(userId) {
      this.transitionToRoute('users.show.index', userId);
    }
  }
})