import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерЗаказа: DS.attr('number'),
  носитель: DS.attr('i-i-s-kursovaya-rabota-kalyukh-вид-носителя'),
  клиент: DS.belongsTo('i-i-s-kursovaya-rabota-kalyukh-клиент', { inverse: null, async: false }),
  фотокиоск: DS.belongsTo('i-i-s-kursovaya-rabota-kalyukh-фотокиоск', { inverse: null, async: false }),
  фото: DS.hasMany('i-i-s-kursovaya-rabota-kalyukh-фото', { inverse: 'заказ', async: false })
});

export let ValidationRules = {
  номерЗаказа: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-kalyukh-заказ.validations.номерЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  носитель: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-kalyukh-заказ.validations.носитель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-kalyukh-заказ.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  фотокиоск: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-kalyukh-заказ.validations.фотокиоск.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  фото: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-kalyukh-заказ.validations.фото.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-kursovaya-rabota-kalyukh-заказ', {
    клиент: belongsTo('i-i-s-kursovaya-rabota-kalyukh-клиент', 'Клиент', {
      iD: attr('Клиент', { index: 1 })
    }, { index: 0 }),
    фотокиоск: belongsTo('i-i-s-kursovaya-rabota-kalyukh-фотокиоск', 'Фотокиоск', {
      наименование: attr('Фотокиоск', { index: 3 })
    }, { index: 2 }),
    номерЗаказа: attr('Номер заказа', { index: 4 }),
    носитель: attr('Носитель', { index: 5 }),
    фото: hasMany('i-i-s-kursovaya-rabota-kalyukh-фото', 'Фото', {
      количество: attr('Количество', { index: 0 }),
      товары: belongsTo('i-i-s-kursovaya-rabota-kalyukh-товары', 'Вид', {
        стоимость: attr('Стоимость', { index: 2 })
      }, { index: 1, displayMemberPath: 'вид' })
    })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-kursovaya-rabota-kalyukh-заказ', {
    фотокиоск: belongsTo('i-i-s-kursovaya-rabota-kalyukh-фотокиоск', 'Фотокиоск', {
      наименование: attr('Фотокиоск', { index: 0 })
    }, { index: -1, hidden: true }),
    клиент: belongsTo('i-i-s-kursovaya-rabota-kalyukh-клиент', 'Клиент', {
      iD: attr('Клиент', { index: 1 })
    }, { index: -1, hidden: true }),
    номерЗаказа: attr('Номер заказа', { index: 2 }),
    носитель: attr('Носитель', { index: 3 }),
    фото: hasMany('i-i-s-kursovaya-rabota-kalyukh-фото', '', {
      количество: attr('Количество', { index: 0 }),
      товары: belongsTo('i-i-s-kursovaya-rabota-kalyukh-товары', 'Вид', {
        стоимость: attr('Стоимость', { index: 2 })
      }, { index: 1, displayMemberPath: 'вид' })
    })
  });
};
