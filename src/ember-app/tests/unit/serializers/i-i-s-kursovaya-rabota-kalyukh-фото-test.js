import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-rabota-kalyukh-фото', 'Unit | Serializer | i-i-s-kursovaya-rabota-kalyukh-фото', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya-rabota-kalyukh-фото',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kursovaya-rabota-kalyukh-вид-носителя',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
