<template>
  <q-layout view="lHh Lpr lFf" class="flex column">
    <app-navbar />

    <q-page-container class="container-padding layout-container">
      <router-view />
    </q-page-container>

    <bottom-navbar v-if="width <= 1000" />
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import AppNavbar from "src/components/app/AppNavbar.vue";
import { useWindowSize } from "src/composables/resize";
import BottomNavbar from "src/components/app/BottomNavbar.vue";

export default defineComponent({
  name: "DefaultLayout",
  components: { AppNavbar, BottomNavbar },
  setup() {
    const { width, height } = useWindowSize();
    return { width, height };
  },
});
</script>

<style lang="scss" scoped>
.layout-container {
  width: 100%;
  margin: 0px auto;
  max-width: $max-width;
}
</style>
