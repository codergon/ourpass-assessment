<template>
  <nav class="bg-white">
    <div class="nav-content container-padding">
      <ul>
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
import { defineComponent } from "vue";
import { useWindowSize } from "src/composables/resize";
import PhoneIcon from "../common/icons/PhoneIcon.vue";
import WalletIcon from "../common/icons/WalletIcon.vue";
import SquaresIcon from "../common/icons/SquaresIcon.vue";
import InvoiceIcon from "../common/icons/InvoiceIcon.vue";
import ActivityIcon from "../common/icons/ActivityIcon.vue";

export default defineComponent({
  name: "BottomNavbar",

  components: {
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
  flex-direction: row;
  justify-content: center;

  bottom: 0;
  left: 0px;
  position: fixed;
  border-top: $border;
  padding-bottom: 10px;

  .nav-content {
    width: 100%;
    display: flex;
    padding-top: 2px;
    align-items: center;
    flex-direction: row;
    max-width: $max-width;
    justify-content: center;
  }
}

ul {
  flex: 1;
  gap: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  max-width: 800px;

  li {
    display: flex;
    font-weight: 500;
    a {
      gap: 10px;
      display: flex;
      font-size: 15px;
      flex-direction: row;
      align-items: center;
      padding: 16px 10px;

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

      @include tablet {
        p {
          font-size: 14px;
        }
      }
      @include SMtablet {
        p {
          display: none;
        }
      }
    }
  }
}
</style>
