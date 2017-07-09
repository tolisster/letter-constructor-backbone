import Marionette from 'backbone.marionette';
import BlockItemView from './BlockItemView';
import Sortable from '../behaviors/SortableBehavior';

export default Marionette.CollectionView.extend({
  childView: BlockItemView,
  behaviors: [
    {
      behaviorClass: Sortable,
      containment: 'parent'
    }
  ]
});
