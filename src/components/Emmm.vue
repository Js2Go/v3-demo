<template>
  <div>Emmm {{ props.id }}</div>
  <div>{{ store.state.count }}</div>
  <div>{{ arrItem }}</div>
  <input type="text" name="" id="" v-model="computedLocalId">
  <button @click="store.dispatch('inc')">inc</button>
  <button @click="store.dispatch('asyncInc')">asyncInc</button>
  <button @click="store.dispatch('dec')">dec</button>
  <button @click="store.dispatch('reset')">reset</button>
  <button @click="store.dispatch('change', Math.floor(Math.random() * 100))">change</button>
  <button @click="store.commit('UPDATE_DATA', Math.floor(Math.random() * 100))">UPDATE_DATA</button>
</template>

<script setup lang="ts">
import { computed, toRef, toRefs, watch } from 'vue'
import { useStore } from 'vuex'

const props = defineProps<{
  id: string | number
}>()

ref: localId = -1
const computedLocalId = computed({
  get: () => {
    return $localId.value
  },
  set: val => {
    $localId.value = val
    $arrItem.value = store.getters.arrItem(+val)
    console.log(store.getters.arrItem2(+val))
  },
})

const store = useStore()
console.log($localId.value)
ref: arrItem = {}
</script>
