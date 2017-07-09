import Marionette from 'backbone.marionette';
import BlockCollection from '../collections/BlockCollection';
import BlockCollectionView from './BlockCollectionView';
import ToolsView from './ToolsView';
import template from '../templates/layout.jst';

export default Marionette.View.extend({
  template: template,
  className: 'layout',
  regions: {
    blocks: '.blocks',
    tools: '.tools'
  },

  initialize() {
    this.blockCollection = new BlockCollection;
    this.blockCollectionView = new BlockCollectionView({
      collection: this.blockCollection
    });
  },

  onRender() {
    this.showChildView('blocks', this.blockCollectionView);
    this.showChildView('tools', new ToolsView({
      blockCollectionView: this.blockCollectionView
    }));
    $('ul, li').disableSelection();
  }
});
