import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults() {
    this.constructor.uniqueId = this.constructor.uniqueId + 1;
    return {
      content: `text${this.constructor.uniqueId}`
    }
  }
}, {
  // TODO remove test class property
  uniqueId: 0
});
