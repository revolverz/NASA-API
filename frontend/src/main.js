import { createApp } from 'vue'
import App from './App.vue'

// import utilits
import router from './router'
import store from './store'
import { createI18n } from 'vue-i18n'

// Import BalmUI components
import UiButton from 'balm-ui/components/button'
import UiForm from 'balm-ui/components/form'
import UiFormField from 'balm-ui/components/form-field'
import UiTextfieldComponents from 'balm-ui/components/textfield'
import UiTabsComponents from 'balm-ui/components/tabs'
import UiSpinner from 'balm-ui/components/spinner'

import 'balm-ui-css'

const app = createApp(App)

const i18n = createI18n({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'ru'
})

// use utilits
app.use(router)
app.use(store)
app.use(i18n)

// use BalmUI
app.use(UiButton)
app.use(UiForm)
app.use(UiFormField)
app.use(UiTextfieldComponents)
app.use(UiTabsComponents)
app.use(UiSpinner)

app.mount('#app')
