<template>
  <div>User</div>
  <div :ref="setDivRef">
    {{ $t('greetings.hi') }}
  </div>
</template>

<script lang="ts">
import { ComponentInternalInstance, ref } from 'vue'

type RefParam = null | Element | ComponentInternalInstance

export default {
  setup() {
    const setDivRef = (dom: RefParam) => {
      nodeRef.value = dom
    }

    const nodeRef = ref<RefParam>(null)

    return {
      setDivRef
    }
  }
}
</script>
