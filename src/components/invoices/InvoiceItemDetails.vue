<template>
  <div class="item-details flex row spaced">
    <div class="item-details-header spaced flex align-center">
      <div class="column">
        <p class="primary-text">Item Detail</p>
        <p class="secondary-text">Type Item for <span>Hours</span> item</p>
      </div>

      <button class="flex row align-center">
        <sliders-icon />
        <p>Customize</p>
      </button>
    </div>

    <invoice-item v-for="(item, index) in items" :item="item" :key="index" />
  </div>
</template>

<script>
import SlidersIcon from "../common/icons/SlidersIcon.vue";
import InvoiceItem from "./InvoiceItem.vue";
export default {
  components: { SlidersIcon, InvoiceItem },
  name: "InvoiceItemDetails",

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
p {
  span {
    font-weight: 600;
  }
}

.item-details {
  width: 100%;
  margin-top: 2rem;

  &-header {
    width: 100%;
    padding-bottom: 24px;
    border-bottom: $border;

    button {
      gap: 8px;
      color: $primary;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      border-radius: 8px;
      padding: 0.6rem 1rem;
      background-color: #f6f5fd;
      svg {
        fill: $primary;
      }
    }
  }
}
</style>
