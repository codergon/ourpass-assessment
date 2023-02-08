<template>
  <q-layout view="lHh Lpr lFf" class="flex column">
    <app-navbar />

    <q-page-container class="container-padding layout-container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import AppNavbar from "src/components/app/AppNavbar.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "DefaultLayout",
  components: { AppNavbar },
});
</script>

<style lang="scss" scoped>
.layout-container {
  margin: 0px auto;
  max-width: $max-width;
}
</style>
