import Marionette from 'backbone.marionette';
import template from '../templates/block.jst';

export default Marionette.View.extend({
  template: template,
  ui: {
    textarea: 'textarea'
  },

  onRender() {
    this.getUI('textarea').val(this.model.get('content'));
  }
});
