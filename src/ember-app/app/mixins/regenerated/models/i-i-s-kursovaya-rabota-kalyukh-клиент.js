import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number')
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-kalyukh-клиент.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентE', 'i-i-s-kursovaya-rabota-kalyukh-клиент', {
    iD: attr('ID', { index: 0 })
  });

  modelClass.defineProjection('КлиентL', 'i-i-s-kursovaya-rabota-kalyukh-клиент', {
    iD: attr('ID', { index: 0 })
  });
};
