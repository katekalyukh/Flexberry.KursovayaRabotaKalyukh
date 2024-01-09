import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-kursovaya-rabota-kalyukh-заказ-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-kursovaya-rabota-kalyukh-фото+товары':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'вид',
            required: true,
            relationName: 'товары',
            projection: 'ТоварыL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
