import Marionette from 'backbone.marionette';
import Block from '../models/Block';
import BlockItemView from './BlockItemView';
import Sortable from '../behaviors/SortableBehavior';

export default Marionette.CollectionView.extend({
  childView: BlockItemView,
  behaviors: [
    {
      behaviorClass: Sortable,
      containment: 'parent'
    }
  ],

  initialize(options) {
    this.listenTo(options.settingsModel, 'change', this.onSettingsUpdate);
  },

  onRender() {
    this.onSettingsUpdate();
  },

  onReceiveView(index) {
    this.collection.add(new Block, {at: index});
  },

  onSettingsUpdate() {
    const color = this.options.settingsModel.get('background-color');
    this.$el.css('background-color', color);
  }
});
