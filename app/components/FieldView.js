import Marionette from 'backbone.marionette';

export default Marionette.View.extend({
  tagName: 'input',
  template: _.noop,
  events: {
    'input': 'onInput'
  },

  onRender() {
    const color = this.model.get(this.options.fieldName);
    this.$el.val(color);
  },

  onInput() {
    const color = this.$el.val();
    this.model.set(this.options.fieldName, color);
  }
});
