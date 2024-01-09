import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  бумага: DS.attr('boolean'),
  времяПроверки: DS.attr('string'),
  готовКРаботе: DS.attr('boolean'),
  датаПроверки: DS.attr('date'),
  картЗаправ: DS.attr('boolean'),
  оператор: DS.belongsTo('i-i-s-kursovaya-rabota-kalyukh-оператор', { inverse: null, async: false }),
  фотокиоск: DS.belongsTo('i-i-s-kursovaya-rabota-kalyukh-фотокиоск', { inverse: null, async: false })
});

export let ValidationRules = {
  бумага: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-kalyukh-проверка-киоска.validations.бумага.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  времяПроверки: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-kalyukh-проверка-киоска.validations.времяПроверки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  готовКРаботе: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-kalyukh-проверка-киоска.validations.готовКРаботе.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаПроверки: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-kalyukh-проверка-киоска.validations.датаПроверки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  картЗаправ: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-kalyukh-проверка-киоска.validations.картЗаправ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оператор: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-kalyukh-проверка-киоска.validations.оператор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  фотокиоск: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-kalyukh-проверка-киоска.validations.фотокиоск.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПроверкаКиоскаE', 'i-i-s-kursovaya-rabota-kalyukh-проверка-киоска', {
    фотокиоск: belongsTo('i-i-s-kursovaya-rabota-kalyukh-фотокиоск', 'Фотокиоск', {
      наименование: attr('Наименование', { index: 1 })
    }, { index: 0 }),
    оператор: belongsTo('i-i-s-kursovaya-rabota-kalyukh-оператор', 'Оператора', {
      фИО: attr('ФИО', { index: 3 }),
      кодВхода: attr('Пароль', { index: 4 })
    }, { index: 2 }),
    картЗаправ: attr('Картридж заправлен', { index: 5 }),
    бумага: attr('Бумага', { index: 6 }),
    датаПроверки: attr('Дата проверки', { index: 7 }),
    времяПроверки: attr('Время проверки', { index: 8 }),
    готовКРаботе: attr('Готов к работе', { index: 9 })
  });

  modelClass.defineProjection('ПроверкаКиоскаL', 'i-i-s-kursovaya-rabota-kalyukh-проверка-киоска', {
    фотокиоск: belongsTo('i-i-s-kursovaya-rabota-kalyukh-фотокиоск', 'Фотокиоск', {
      наименование: attr('Фотокиоск', { index: 0 })
    }, { index: -1, hidden: true }),
    оператор: belongsTo('i-i-s-kursovaya-rabota-kalyukh-оператор', 'ФИО', {
      фИО: attr('ФИО', { index: 1 }),
      кодВхода: attr('Пароль', { index: 2 })
    }, { index: -1, hidden: true }),
    картЗаправ: attr('Картридж заправлен', { index: 3 }),
    бумага: attr('Бумага', { index: 4 }),
    датаПроверки: attr('Дата проверки', { index: 5 }),
    времяПроверки: attr('Время проверки', { index: 6 }),
    готовКРаботе: attr('Готов к работе', { index: 7 })
  });
};
