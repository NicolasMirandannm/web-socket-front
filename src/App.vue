<template>
  <v-app>
    <v-main>
      <!-- <nav>
        <router-link to="/">Panel</router-link> |
        <router-link to="/Caller">Caller</router-link>
      </nav> -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>


