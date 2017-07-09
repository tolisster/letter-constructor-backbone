import Marionette from 'backbone.marionette';
import BlockItemView from './BlockItemView';

export default Marionette.CollectionView.extend({
  childView: BlockItemView,

  onRender() {
    this.$el.sortable({
      revert: true
    });
  }
});
