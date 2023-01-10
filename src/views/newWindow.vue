<template>
    <div v-if="open">
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'window-portal',
    emits: ['close'],
    props: {
      open: {
        type: Boolean,
        default: false,
      }
    },
    data() {
      return {
        windowRef: null,
      }
    },
    watch: {
      open(newOpen) {
        if(newOpen) {
          this.openPortal();
        } else {
          this.closePortal();
        }
      }
    },
    methods: {
      openPortal() {
        this.windowRef = window.open("", "", "width=1200,height=800,left=75,top=100");
        this.windowRef.addEventListener('beforeunload', this.closePortal);
        // magic!
        this.windowRef.document.body.appendChild(this.$el);
      },
      closePortal() {
        if(this.windowRef) {
          this.windowRef.close();
          this.windowRef = null;
          this.$emit('close');
        }
      }
    },
    mounted() {
      if(this.open) {
        this.openPortal();
      }
    },
    beforeDestroy() {
      if (this.windowRef) {
        this.closePortal();
      }
    }
  }
  </script>