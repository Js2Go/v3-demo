import { App, Ref } from 'vue'

export default {
  install: (app: App<Element>, options: any, lang: Ref<string>) => {
    app.config.globalProperties.$t = (key: string) => key.split('.').reduce((o, i) => { if (o) return o[i] }, options[lang.value])
  }
}
