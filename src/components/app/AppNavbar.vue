<template>
  <nav class="bg-white">
    <div class="nav-content container-padding">
      <app-logo />

      <ul v-if="width > 1000">
        <li>
          <router-link to="/dashboard" active-class="activeLink">
            <squares-icon />
            <p>Dashboard</p>
          </router-link>
        </li>
        <li>
          <router-link to="/" active-class="activeLink">
            <invoice-icon />
            <p>Invoices</p>
          </router-link>
        </li>
        <li>
          <router-link to="/wallet" active-class="activeLink">
            <wallet-icon />
            <p>Wallet</p>
          </router-link>
        </li>
        <li>
          <router-link to="/activity" active-class="activeLink">
            <activity-icon />
            <p>Activity</p>
          </router-link>
        </li>
        <li>
          <router-link to="/help" active-class="activeLink">
            <phone-icon />
            <p>Help</p>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import AppLogo from "./AppLogo.vue";
import { defineComponent } from "vue";
import { useWindowSize } from "src/composables/resize";
import PhoneIcon from "../common/icons/PhoneIcon.vue";
import WalletIcon from "../common/icons/WalletIcon.vue";
import SquaresIcon from "../common/icons/SquaresIcon.vue";
import InvoiceIcon from "../common/icons/InvoiceIcon.vue";
import ActivityIcon from "../common/icons/ActivityIcon.vue";

export default defineComponent({
  name: "AppNavbar",

  components: {
    AppLogo,
    SquaresIcon,
    WalletIcon,
    PhoneIcon,
    InvoiceIcon,
    ActivityIcon,
  },

  setup() {
    const { width, height } = useWindowSize();
    return { width, height };
  },
});
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  display: flex;
  padding-top: 2px;
  flex-direction: row;
  justify-content: center;

  .nav-content {
    width: 100%;
    display: flex;
    min-height: 66px;
    padding-top: 2px;
    align-items: center;
    flex-direction: row;
    max-width: $max-width;
    justify-content: space-between;
    gap: calc(max(5vw, 5vh, 5vmin));
  }
}

ul {
  flex: 1;
  gap: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  li {
    display: flex;
    font-weight: 500;
    a {
      gap: 10px;
      display: flex;
      font-size: 15px;
      flex-direction: row;
      align-items: center;
      padding: 20px 10px;

      svg {
        fill: #9ea6b9 !important;
      }

      &.activeLink {
        color: $primary;
        border-bottom: 2px solid $primary;
        svg {
          fill: $primary !important;
        }
      }
    }
  }
}
</style>
