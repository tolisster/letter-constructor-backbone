import Marionette from 'backbone.marionette';
import template from '../templates/tools.jst';

export default Marionette.View.extend({
  tagName: 'ul',
  template: template,

  onRender() {
    this.$el.draggable({
      connectToSortable: this.options.blockCollectionView.$el,
      helper: 'clone',
      revert: 'invalid'
    });
  }
});
