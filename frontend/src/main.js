import { createApp } from 'vue'
import App from './App.vue'

// import utilits
import router from './router'
import store from './store'
import { createI18n } from 'vue-i18n'

// Import BalmUI components
import UiButton from 'balm-ui/components/button'
import UiIconButton from 'balm-ui/components/icon-button'
import UiForm from 'balm-ui/components/form'
import UiFormField from 'balm-ui/components/form-field'
import UiTextfieldComponents from 'balm-ui/components/textfield'
import UiTabsComponents from 'balm-ui/components/tabs'
import UiSpinner from 'balm-ui/components/spinner'
import UiDrawerComponents from 'balm-ui/components/drawer'
import UiListComponents from 'balm-ui/components/list'
import UiCardComponents from 'balm-ui/components/card'

import $toast from 'balm-ui/plugins/toast'

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
app.use(UiDrawerComponents)
app.use(UiListComponents)
app.use(UiIconButton)
app.use(UiCardComponents)

app.use($toast)

app.mount('#app')
