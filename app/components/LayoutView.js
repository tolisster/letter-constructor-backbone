import Marionette from 'backbone.marionette';
import Block from '../models/Block';
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
    this.$el.find('ul, li').disableSelection();

    this.blockCollection.add(new Block({content: 'text1'}));
    this.blockCollection.add(new Block({content: 'text2'}));
    this.blockCollection.add(new Block({content: 'text3'}));
  }
});
