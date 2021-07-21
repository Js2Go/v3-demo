import { reactive, ref } from 'vue'

const langs = reactive({
  zh: 'zh',
  ch: 'ch',
})

export const currentLang = ref(langs.zh)

export default langs
