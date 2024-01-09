import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kursovaya-rabota-kalyukh.caption'),
          title: i18n.t('forms.application.sitemap.kursovaya-rabota-kalyukh.title'),
          children: [{
            link: 'i-i-s-kursovaya-rabota-kalyukh-оператор-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-kalyukh.i-i-s-kursovaya-rabota-kalyukh-оператор-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-kalyukh.i-i-s-kursovaya-rabota-kalyukh-оператор-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-kalyukh-клиент-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-kalyukh.i-i-s-kursovaya-rabota-kalyukh-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-kalyukh.i-i-s-kursovaya-rabota-kalyukh-клиент-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-kalyukh-чек-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-kalyukh.i-i-s-kursovaya-rabota-kalyukh-чек-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-kalyukh.i-i-s-kursovaya-rabota-kalyukh-чек-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-kalyukh-фотокиоск-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-kalyukh.i-i-s-kursovaya-rabota-kalyukh-фотокиоск-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-kalyukh.i-i-s-kursovaya-rabota-kalyukh-фотокиоск-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-kalyukh-проверка-киоска-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-kalyukh.i-i-s-kursovaya-rabota-kalyukh-проверка-киоска-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-kalyukh.i-i-s-kursovaya-rabota-kalyukh-проверка-киоска-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-kalyukh-заказ-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-kalyukh.i-i-s-kursovaya-rabota-kalyukh-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-kalyukh.i-i-s-kursovaya-rabota-kalyukh-заказ-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-kalyukh-товары-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-kalyukh.i-i-s-kursovaya-rabota-kalyukh-товары-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-kalyukh.i-i-s-kursovaya-rabota-kalyukh-товары-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})