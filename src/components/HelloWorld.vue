<template>
  <h1>{{ msg }}</h1>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

  <div v-for="i in 10" :key="i">
    <span v-if="i % 2">
      {{ i }}
    </span>
  </div>

  <select v-model="component">
    <option v-for="tag in tags" :value="tag" :key="tag">tag: {{ tag }}</option>
  </select>

  <select v-model="evt">
    <option v-for="e in evts" :value="e" :key="e">event: {{ e }}</option>
  </select>

  <keep-alive>
    <component style="width: 100%;" :is="component" :[attr]="comp[attr]" :target=" component === 'a' && '_blank' || null">hhhhhh</component>
  </keep-alive>

  <button @[computedEvt]="dynmicEvent">{{ evt }} me</button>
  <button @click="emit('click', $event), nativeClick()" :style="style" :class="$attrs.class">click me too</button>
  
  <input v-model="check" multiple type="checkbox" value="1" id="">1
  <input v-model="check" multiple type="checkbox" value="2" id="">2


  <input :value="modelValue" @input="modelValueInput($event)">
  <input v-model="v">

  <table v-bind="$attrs">
    <other-tr></other-tr>
  </table>
</template>

<script lang="ts" setup>
import { computed, watch, useAttrs } from 'vue'
import OtherTr from './OtherTr.vue'

ref: count = 0
ref: color = '#00f'
ref: component = 'a'
ref: comp = {
  'href': 'https://pic3.zhimg.com/v2-1d3fe2a7403d23ce2eb79665e93fcac8_r.jpg?source=172ae18b',
  'src': 'https://pic3.zhimg.com/v2-1d3fe2a7403d23ce2eb79665e93fcac8_r.jpg?source=172ae18b',
  'value': 'emmmm'
} as {
  [K: string]: any
}
ref: attr = 'src'
ref: tags = ['a', 'img', 'input']

ref: evt = 'click'
ref: check = [] as Array<string>
ref: evts = ['click', 'dblclick', 'mouseenter']

const props = defineProps<{
  msg: string,
  modelValue: string,
}>()

const computedEvt = computed(() => $evt.value)
const v = computed({
  get: () => {
    return props.modelValue
  },
  set: value => {
    emit('update:modelValue', value)
  }
})

watch($component, () => {
  const v = $tags.value.find(v => v === $component.value)
  switch (v) {
    case 'a':
      $attr.value = 'href'
      break

    case 'img':
      $attr.value = 'src'
      break
      
    case 'input':
      $attr.value = 'value'
      break
  }
}, {
  immediate: true,
})

const dynmicEvent = () => {
  console.log(`${$evt.value}ed`)
}

const emit = defineEmits<{
  (event: 'click', arg: Event): void,
  (event: 'update:modelValue', value: string): void,
}>()

const attrs = useAttrs()

ref: style = attrs.style as any

const nativeClick = () => {
  console.log('nativeClick')
}

const modelValueInput = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
  color: v-bind(color);
}
</style>
