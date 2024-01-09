import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяОплаты: DS.attr('string'),
  датаОплаты: DS.attr('date'),
  сумма: DS.attr('number'),
  заказ: DS.belongsTo('i-i-s-kursovaya-rabota-kalyukh-заказ', { inverse: null, async: false })
});

export let ValidationRules = {
  времяОплаты: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-kalyukh-чек.validations.времяОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаОплаты: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-kalyukh-чек.validations.датаОплаты.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-kalyukh-чек.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-kalyukh-чек.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЧекE', 'i-i-s-kursovaya-rabota-kalyukh-чек', {
    заказ: belongsTo('i-i-s-kursovaya-rabota-kalyukh-заказ', 'Номер заказа', {
      номерЗаказа: attr('Номер заказа', { index: 0 })
    }, { index: -1, hidden: true }),
    времяОплаты: attr('Время оплаты', { index: 1 }),
    датаОплаты: attr('Дата оплаты', { index: 2 }),
    сумма: attr('Сумма', { index: 3 })
  });

  modelClass.defineProjection('ЧекL', 'i-i-s-kursovaya-rabota-kalyukh-чек', {
    заказ: belongsTo('i-i-s-kursovaya-rabota-kalyukh-заказ', 'Номер заказа', {
      номерЗаказа: attr('Номер заказа', { index: 0 })
    }, { index: -1, hidden: true }),
    времяОплаты: attr('Время оплаты', { index: 1 }),
    датаОплаты: attr('Дата оплаты', { index: 2 }),
    сумма: attr('Сумма', { index: 3 })
  });
};
