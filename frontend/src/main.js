import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import BalmUI scripts
import UiButton from 'balm-ui/components/button'
import UiForm from 'balm-ui/components/form'
import UiFormField from 'balm-ui/components/form-field'
import UiTextfieldComponents from 'balm-ui/components/textfield'
import UiTabsComponents from 'balm-ui/components/tabs'

import 'balm-ui-css'

const app = createApp(App)

app.use(UiButton) // Mandatory
app.use(UiForm)
app.use(UiFormField)
app.use(UiTextfieldComponents)
app.use(UiTabsComponents)

app.use(router)

app.mount('#app')
