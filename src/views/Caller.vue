<template>
  <div class="about">
    <h1>This is an about page</h1>
    <WindowPortal :open="open" @close="open = false"></WindowPortal>
    <button @click="open = true">Open</button>
  </div>
</template>

<script>
import WindowPortal from './newWindow.vue'

export default {
  components: {
    WindowPortal
  },
  data() {
    return {
      open: false
    }
  }
}
</script>
