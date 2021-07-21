<template>
  <input type="text" :value="val" @input="updateVal">
  <input type="text" v-model="value">

  <ul>
    <li v-for="(item, idx) in items" :key="item">
      <slot name="idx" :idx="idx">{{ idx }}__</slot>
      <slot :item="item">{{ item }}++</slot>
    </li>
  </ul>
  <!-- <Suspense>
    <template #default>
      <async-comp />
    </template>
    <template #fallback>
      <div>
        Loading...
      </div>
    </template>
    <template #error>
      <div>
        error
      </div>
    </template>
  </Suspense> -->
  <div :ref="setDivRef">
    {{ $t('greetings.hi') }}
  </div>

  <div v-if="hhh">
    <teleport to="body">
      <div>iofah9r78eyh129rhnfoidsfhjoisdhyfuihdsfu</div>
    </teleport>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive, ref, watchEffect, ComponentInternalInstance } from 'vue'
import { get } from '../utils/useProvide'
// import AsyncComp from './AsyncComp'
import OtherTr from './OtherTr.vue'

type RefParam = null | Element | ComponentInternalInstance

const props = defineProps<{
  val: string,
  valModifiers?: {
    [K: string]: any
  },
  items: Array<string>
}>()

const emit = defineEmits<{
  (event: 'update:val', val?: string): void
}>()

const updateVal = (e: Event) => {
  const val = (e.target as HTMLInputElement).value
  if (props.valModifiers?.upper) {
    emit('update:val', val.toUpperCase())
    return
  }
  emit('update:val', val)
}

const value = computed({
  get: () => props.val,
  set: val => emit('update:val', val),
})


ref: emmm = get('emmm')
watchEffect(() => {
  console.log(emmm)
})

ref: divRef = null as RefParam
ref: hhh = false

// setTimeout(() => {
//   $hhh.value = true
// }, 2000)

const setDivRef = (dom: RefParam) => { $divRef.value = dom! }
  
onMounted(() => {
  console.log($divRef)
})

const count = ref(0)
const state = reactive({
  count
})
state.count = 1
// @ts-ignore
state.count = ref(2)
console.log(state)
</script>
