import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKursovayaRabotaKalyukhЗаказLForm from './forms/i-i-s-kursovaya-rabota-kalyukh-заказ-l';
import IISKursovayaRabotaKalyukhКлиентLForm from './forms/i-i-s-kursovaya-rabota-kalyukh-клиент-l';
import IISKursovayaRabotaKalyukhОператорLForm from './forms/i-i-s-kursovaya-rabota-kalyukh-оператор-l';
import IISKursovayaRabotaKalyukhПроверкаКиоскаLForm from './forms/i-i-s-kursovaya-rabota-kalyukh-проверка-киоска-l';
import IISKursovayaRabotaKalyukhТоварыLForm from './forms/i-i-s-kursovaya-rabota-kalyukh-товары-l';
import IISKursovayaRabotaKalyukhФотокиоскLForm from './forms/i-i-s-kursovaya-rabota-kalyukh-фотокиоск-l';
import IISKursovayaRabotaKalyukhЧекLForm from './forms/i-i-s-kursovaya-rabota-kalyukh-чек-l';
import IISKursovayaRabotaKalyukhЗаказEForm from './forms/i-i-s-kursovaya-rabota-kalyukh-заказ-e';
import IISKursovayaRabotaKalyukhКлиентEForm from './forms/i-i-s-kursovaya-rabota-kalyukh-клиент-e';
import IISKursovayaRabotaKalyukhОператорEForm from './forms/i-i-s-kursovaya-rabota-kalyukh-оператор-e';
import IISKursovayaRabotaKalyukhПроверкаКиоскаEForm from './forms/i-i-s-kursovaya-rabota-kalyukh-проверка-киоска-e';
import IISKursovayaRabotaKalyukhТоварыEForm from './forms/i-i-s-kursovaya-rabota-kalyukh-товары-e';
import IISKursovayaRabotaKalyukhФотокиоскEForm from './forms/i-i-s-kursovaya-rabota-kalyukh-фотокиоск-e';
import IISKursovayaRabotaKalyukhЧекEForm from './forms/i-i-s-kursovaya-rabota-kalyukh-чек-e';
import IISKursovayaRabotaKalyukhЗаказModel from './models/i-i-s-kursovaya-rabota-kalyukh-заказ';
import IISKursovayaRabotaKalyukhКлиентModel from './models/i-i-s-kursovaya-rabota-kalyukh-клиент';
import IISKursovayaRabotaKalyukhОператорModel from './models/i-i-s-kursovaya-rabota-kalyukh-оператор';
import IISKursovayaRabotaKalyukhПроверкаКиоскаModel from './models/i-i-s-kursovaya-rabota-kalyukh-проверка-киоска';
import IISKursovayaRabotaKalyukhТоварыModel from './models/i-i-s-kursovaya-rabota-kalyukh-товары';
import IISKursovayaRabotaKalyukhФотоModel from './models/i-i-s-kursovaya-rabota-kalyukh-фото';
import IISKursovayaRabotaKalyukhФотокиоскModel from './models/i-i-s-kursovaya-rabota-kalyukh-фотокиоск';
import IISKursovayaRabotaKalyukhЧекModel from './models/i-i-s-kursovaya-rabota-kalyukh-чек';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya-rabota-kalyukh-заказ': IISKursovayaRabotaKalyukhЗаказModel,
    'i-i-s-kursovaya-rabota-kalyukh-клиент': IISKursovayaRabotaKalyukhКлиентModel,
    'i-i-s-kursovaya-rabota-kalyukh-оператор': IISKursovayaRabotaKalyukhОператорModel,
    'i-i-s-kursovaya-rabota-kalyukh-проверка-киоска': IISKursovayaRabotaKalyukhПроверкаКиоскаModel,
    'i-i-s-kursovaya-rabota-kalyukh-товары': IISKursovayaRabotaKalyukhТоварыModel,
    'i-i-s-kursovaya-rabota-kalyukh-фото': IISKursovayaRabotaKalyukhФотоModel,
    'i-i-s-kursovaya-rabota-kalyukh-фотокиоск': IISKursovayaRabotaKalyukhФотокиоскModel,
    'i-i-s-kursovaya-rabota-kalyukh-чек': IISKursovayaRabotaKalyukhЧекModel
  },

  'application-name': 'Kursovaya rabota kalyukh',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kursovaya rabota kalyukh',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya rabota kalyukh',
          title: 'Kursovaya rabota kalyukh'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'kursovaya-rabota-kalyukh': {
          caption: 'KursovayaRabotaKalyukh',
          title: 'KursovayaRabotaKalyukh',
          'i-i-s-kursovaya-rabota-kalyukh-оператор-l': {
            caption: 'Оператор',
            title: ''
          },
          'i-i-s-kursovaya-rabota-kalyukh-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-kursovaya-rabota-kalyukh-чек-l': {
            caption: 'Чек',
            title: ''
          },
          'i-i-s-kursovaya-rabota-kalyukh-фотокиоск-l': {
            caption: 'Фотокиоск',
            title: ''
          },
          'i-i-s-kursovaya-rabota-kalyukh-проверка-киоска-l': {
            caption: 'Проверка киоска',
            title: ''
          },
          'i-i-s-kursovaya-rabota-kalyukh-заказ-l': {
            caption: 'Заказ',
            title: ''
          },
          'i-i-s-kursovaya-rabota-kalyukh-товары-l': {
            caption: 'Товары',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-kursovaya-rabota-kalyukh-заказ-l': IISKursovayaRabotaKalyukhЗаказLForm,
    'i-i-s-kursovaya-rabota-kalyukh-клиент-l': IISKursovayaRabotaKalyukhКлиентLForm,
    'i-i-s-kursovaya-rabota-kalyukh-оператор-l': IISKursovayaRabotaKalyukhОператорLForm,
    'i-i-s-kursovaya-rabota-kalyukh-проверка-киоска-l': IISKursovayaRabotaKalyukhПроверкаКиоскаLForm,
    'i-i-s-kursovaya-rabota-kalyukh-товары-l': IISKursovayaRabotaKalyukhТоварыLForm,
    'i-i-s-kursovaya-rabota-kalyukh-фотокиоск-l': IISKursovayaRabotaKalyukhФотокиоскLForm,
    'i-i-s-kursovaya-rabota-kalyukh-чек-l': IISKursovayaRabotaKalyukhЧекLForm,
    'i-i-s-kursovaya-rabota-kalyukh-заказ-e': IISKursovayaRabotaKalyukhЗаказEForm,
    'i-i-s-kursovaya-rabota-kalyukh-клиент-e': IISKursovayaRabotaKalyukhКлиентEForm,
    'i-i-s-kursovaya-rabota-kalyukh-оператор-e': IISKursovayaRabotaKalyukhОператорEForm,
    'i-i-s-kursovaya-rabota-kalyukh-проверка-киоска-e': IISKursovayaRabotaKalyukhПроверкаКиоскаEForm,
    'i-i-s-kursovaya-rabota-kalyukh-товары-e': IISKursovayaRabotaKalyukhТоварыEForm,
    'i-i-s-kursovaya-rabota-kalyukh-фотокиоск-e': IISKursovayaRabotaKalyukhФотокиоскEForm,
    'i-i-s-kursovaya-rabota-kalyukh-чек-e': IISKursovayaRabotaKalyukhЧекEForm
  },

});

export default translations;
