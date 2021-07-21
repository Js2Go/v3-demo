import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import i18nPlugin from './plugins/i18n'
import { i18nStrings } from './data/i18n'
import { currentLang } from './utils/lang'

const app = createApp(App)

app.use(i18nPlugin, i18nStrings, currentLang)
app.use(router)
app.use(store)

app.config.compilerOptions.isCustomElement = tag => tag.startsWith('mycustom-')

// add $t global property (i18n)
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $t: (key: string) => string
  }
}

app.mount('#app')
