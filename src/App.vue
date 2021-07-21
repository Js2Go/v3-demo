<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld v-model:modelValue="emmm" hhh="hhh" msg="Hello Vue 3 + TypeScript + Vite" class="hhhhhhhh" style="color: red;" @click="hhh" />
  <HelloLocal v-model:val.upper="emmm" :items="items">
    <template #[computedSlot]="slotData">
      <span >{{ ddd(slotData) }}</span>
    </template>
  </HelloLocal>

  <select v-model="currentLang">
    <option v-for="lang in langs" :value="lang">{{ lang }}</option>
  </select>

  <mycustom-dialog /> -->
  <router-link to="/hhh/1">hhh1</router-link> |
  <router-link to="/hhh/2">hhh2</router-link> |
  <router-link to="/hhhgggg/2">hhhgggg2</router-link> |
  <router-link to="/users">users</router-link> |
  <router-link to="/users/list">users list</router-link> |
  <router-link to="/person">person</router-link> |
  <router-link to="/users/222">users 222</router-link> |
  <router-link to="/emmm/222">emmm 222</router-link> |
  <router-view #="{ Component, route }">
    <component :is="Component"></component>
    <!-- <transition :name="route.meta.transition || 'fade'">
    </transition> -->
  </router-view>
</template>

<script lang="ts" setup>
// import HelloWorld from './components/HelloWorld.vue'
import HelloLocal from './components/HelloLocal.vue'
import { computed, reactive, ref, watch } from 'vue'
import { set } from './utils/useProvide'
import langs, { currentLang } from './utils/lang'
import { useRouter, isNavigationFailure, NavigationFailureType } from 'vue-router'

ref: emmm = 'emmm'
ref: items = ['a', 'b', 'c', 'd']

const hhh = (e: Event) => {
  console.log(e)
  console.log('hhh')
}

ref: computedSlot = 'default' as 'default' | 'idx'

const computedKey = computed(() => {
  switch (computedSlot) {
    case 'default':
      return 'item'
      
    default:
      return computedSlot
  }
})

const ddd = (slotData: { [k: string]: any }): string => {
  return slotData[computedKey.value]
}

set('emmm', $emmm)

// setTimeout(() => {
//   $emmm.value = '1212312312312321'
// }, 5000)
const router = useRouter()
// setTimeout(async () => {
//   const res = await router.push('/emmm/123123213')
//   // aborted：在导航守卫中返回 false 中断了本次导航。
//   // cancelled： 在当前导航还没有完成之前又有了一个新的导航。比如，在等待导航守卫的过程中又调用了 router.push。
//   // duplicated：导航被阻止，因为我们已经在目标位置了。
//   if (isNavigationFailure(res, NavigationFailureType.duplicated)) {
//     alert('都在这个页面了，你还跳尼玛呢跳')
//   }
//   console.log(res)
// }, 3000)
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
