import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deleteUser() {
      const userToDelete = this.get('model');
      userToDelete.destroyRecord().then(() => {
        this.transitionToRoute('users.index');
      });
    }
  }
})