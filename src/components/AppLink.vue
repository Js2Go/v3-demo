<script lang="ts">
import { computed } from 'vue'
import { RouterLink, useLink } from 'vue-router'

export default {
  name: 'AppLink',
  props: {
    // @ts-ignore
    ...RouterLink.props,
    inactiveClass: String
  },
  setup(props: any) {
    const { route, href, isActive, isExactActive, navigate } = useLink(props)

    const isExternalLink = computed(
      () => typeof props.to === 'string' && props.to.startsWith('http')
    )

    return { isExternalLink, href, navigate, isActive }
  }
}
</script>