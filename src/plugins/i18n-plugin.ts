import { Plugin } from '@nuxt/types'

import { configure } from "vee-validate";

const i18nPlugin: Plugin = ({ app }) => {

  // beforeLanguageSwitch called right before setting a new locale
  // app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
  //   console.log('beforeLanguageSwitch', oldLocale, newLocale)
  // };
  // // onLanguageSwitched called right after a new locale has been set
  // app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
  //   console.log('onLanguageSwitched', oldLocale, newLocale)
  // };

  configure({
    // @ts-ignore
    defaultMessage: (field: string, values: Record<string, any>) => {
      values._field_ = app.i18n.t(`${field}`);
      return app.i18n.t(`validation.${values._rule_}`, values);
    }
  });


};

export default i18nPlugin
