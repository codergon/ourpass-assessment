<template>
  <div class="fullscreen text-black text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 28vmin; color: #383584">404</div>

      <div style="font-size: 8vmin; opacity: 0.4; margin-bottom: 40px">
        Oops. Nothing here...
      </div>

      <router-link
        to="/"
        style="
          color: #fff;
          font-size: 14px;
          padding: 7px 16px;
          border-radius: 2px;
          background: #383584;
        "
      >
        Go Home
      </router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorNotFound",
});
</script>
