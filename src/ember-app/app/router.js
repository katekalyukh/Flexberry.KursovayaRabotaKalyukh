import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya-rabota-kalyukh-заказ-l');
  this.route('i-i-s-kursovaya-rabota-kalyukh-заказ-e',
  { path: 'i-i-s-kursovaya-rabota-kalyukh-заказ-e/:id' });
  this.route('i-i-s-kursovaya-rabota-kalyukh-заказ-e.new',
  { path: 'i-i-s-kursovaya-rabota-kalyukh-заказ-e/new' });
  this.route('i-i-s-kursovaya-rabota-kalyukh-клиент-l');
  this.route('i-i-s-kursovaya-rabota-kalyukh-клиент-e',
  { path: 'i-i-s-kursovaya-rabota-kalyukh-клиент-e/:id' });
  this.route('i-i-s-kursovaya-rabota-kalyukh-клиент-e.new',
  { path: 'i-i-s-kursovaya-rabota-kalyukh-клиент-e/new' });
  this.route('i-i-s-kursovaya-rabota-kalyukh-оператор-l');
  this.route('i-i-s-kursovaya-rabota-kalyukh-оператор-e',
  { path: 'i-i-s-kursovaya-rabota-kalyukh-оператор-e/:id' });
  this.route('i-i-s-kursovaya-rabota-kalyukh-оператор-e.new',
  { path: 'i-i-s-kursovaya-rabota-kalyukh-оператор-e/new' });
  this.route('i-i-s-kursovaya-rabota-kalyukh-проверка-киоска-l');
  this.route('i-i-s-kursovaya-rabota-kalyukh-проверка-киоска-e',
  { path: 'i-i-s-kursovaya-rabota-kalyukh-проверка-киоска-e/:id' });
  this.route('i-i-s-kursovaya-rabota-kalyukh-проверка-киоска-e.new',
  { path: 'i-i-s-kursovaya-rabota-kalyukh-проверка-киоска-e/new' });
  this.route('i-i-s-kursovaya-rabota-kalyukh-товары-l');
  this.route('i-i-s-kursovaya-rabota-kalyukh-товары-e',
  { path: 'i-i-s-kursovaya-rabota-kalyukh-товары-e/:id' });
  this.route('i-i-s-kursovaya-rabota-kalyukh-товары-e.new',
  { path: 'i-i-s-kursovaya-rabota-kalyukh-товары-e/new' });
  this.route('i-i-s-kursovaya-rabota-kalyukh-фотокиоск-l');
  this.route('i-i-s-kursovaya-rabota-kalyukh-фотокиоск-e',
  { path: 'i-i-s-kursovaya-rabota-kalyukh-фотокиоск-e/:id' });
  this.route('i-i-s-kursovaya-rabota-kalyukh-фотокиоск-e.new',
  { path: 'i-i-s-kursovaya-rabota-kalyukh-фотокиоск-e/new' });
  this.route('i-i-s-kursovaya-rabota-kalyukh-чек-l');
  this.route('i-i-s-kursovaya-rabota-kalyukh-чек-e',
  { path: 'i-i-s-kursovaya-rabota-kalyukh-чек-e/:id' });
  this.route('i-i-s-kursovaya-rabota-kalyukh-чек-e.new',
  { path: 'i-i-s-kursovaya-rabota-kalyukh-чек-e/new' });
});

export default Router;
