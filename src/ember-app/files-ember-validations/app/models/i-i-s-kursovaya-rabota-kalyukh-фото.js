import {
  defineNamespace,
  defineProjections,
  Model as ФотоMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-kalyukh-фото';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ФотоMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
