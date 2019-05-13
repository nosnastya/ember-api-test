import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.store.findAll('post')
  },

  setupController: function(controller, model) {
    controller.set('posts', model);
  }
});
