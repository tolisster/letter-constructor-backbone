import Marionette from 'backbone.marionette';

export default Marionette.Behavior.extend({
  events: {
    'sortupdate': 'onUpdate',
    'sortreceive': 'onReceive'
  },

  onRender() {
    this.$el.sortable({
      axis: this.options.axis || false,
      grid: this.options.grid || false,
      containment: this.options.containment || false,
      cursor: 'move',
      handle: this.options.handle || false,
      revert: this.options.revert || false
    });
  },

  onUpdate: function(event, ui) {
    const collection = this.view.collection;
    // get the attached model
    const model = collection.get(ui.item.data('model-cid'));
    const index = ui.item.index();
    // do not use silent to notify other obversers.
    collection.remove(model);
    collection.add(model, {at: index});
  },

  onReceive: function(event, ui) {
    // pass up
    this.view.triggerMethod('receive:view', ui.helper.index());
    // remove default jQuery UI behavior
    ui.helper.remove();
  },

  onAddChild: function(currentView, childView) {
    // bind the element to the model by cid
    childView.$el.data('model-cid', childView.model.cid);
  }
});
