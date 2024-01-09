import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  товары: DS.belongsTo('i-i-s-kursovaya-rabota-kalyukh-товары', { inverse: null, async: false }),
  заказ: DS.belongsTo('i-i-s-kursovaya-rabota-kalyukh-заказ', { inverse: 'фото', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-kalyukh-фото.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  товары: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-kalyukh-фото.validations.товары.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-kalyukh-фото.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФотоE', 'i-i-s-kursovaya-rabota-kalyukh-фото', {
    количество: attr('Количество', { index: 0 }),
    товары: belongsTo('i-i-s-kursovaya-rabota-kalyukh-товары', 'Вид', {
      стоимость: attr('Стоимость', { index: 2 })
    }, { index: 1, displayMemberPath: 'вид' })
  });
};
