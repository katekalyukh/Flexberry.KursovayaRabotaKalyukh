import {
  defineNamespace,
  defineProjections,
  Model as ОператорMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-kalyukh-оператор';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОператорMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
