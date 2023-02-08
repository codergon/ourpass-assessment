<template>
  <q-layout view="lHh Lpr lFf">
    <app-navbar />

    <q-page-container>
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

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
    };
  },
});
</script>
