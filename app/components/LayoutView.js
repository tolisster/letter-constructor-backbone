import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import BlockCollection from '../collections/BlockCollection';
import BlockCollectionView from './BlockCollectionView';
import ToolsView from './ToolsView';
import FieldView from './FieldView';
import template from '../templates/layout.jst';

export default Marionette.View.extend({
  template: template,
  className: 'layout',
  regions: {
    blocks: '.blocks',
    tools: '.tools',
    backgroundColorField: '.background-color-field'
  },

  initialize() {
    this.settingsModel = new Backbone.Model({'background-color': '#faebd7'});
    this.blockCollection = new BlockCollection;
    this.blockCollectionView = new BlockCollectionView({
      collection: this.blockCollection,
      settingsModel: this.settingsModel
    });
  },

  onRender() {
    this.showChildView('blocks', this.blockCollectionView);
    this.showChildView('tools', new ToolsView({
      blockCollectionView: this.blockCollectionView
    }));
    this.$el.find('ul, li').disableSelection();
    this.showChildView('backgroundColorField', new FieldView({
      model: this.settingsModel,
      fieldName: 'background-color',
      attributes: {
        type: 'color',
        className: 'form-control'
      }
    }));
  }
});
