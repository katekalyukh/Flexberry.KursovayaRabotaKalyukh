import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-rabota-kalyukh-фотокиоск', 'Unit | Model | i-i-s-kursovaya-rabota-kalyukh-фотокиоск', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kursovaya-rabota-kalyukh-заказ',
    'model:i-i-s-kursovaya-rabota-kalyukh-клиент',
    'model:i-i-s-kursovaya-rabota-kalyukh-оператор',
    'model:i-i-s-kursovaya-rabota-kalyukh-проверка-киоска',
    'model:i-i-s-kursovaya-rabota-kalyukh-товары',
    'model:i-i-s-kursovaya-rabota-kalyukh-фото',
    'model:i-i-s-kursovaya-rabota-kalyukh-фотокиоск',
    'model:i-i-s-kursovaya-rabota-kalyukh-чек',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
