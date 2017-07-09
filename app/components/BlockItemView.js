import Marionette from 'backbone.marionette';
import template from '../templates/block.jst';

export default Marionette.View.extend({
  template: template,
  ui: {
    textarea: 'textarea'
  },
  events: {
    'input': 'onInput'
  },

  onRender() {
    this.getUI('textarea').val(this.model.get('content'));
  },

  onInput() {
    this.model.set('content', this.getUI('textarea').val());
  }
});
