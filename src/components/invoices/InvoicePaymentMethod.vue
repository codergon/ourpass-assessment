<template>
  <div class="container">
    <div class="payment-details">
      <div class="payment-details-header">
        <p class="primary-text">Payment Method</p>
        <p class="primary-color">Select Payment</p>
      </div>
      <payment-card :card="card" v-if="card?.id" />
    </div>

    <div class="sub-total">
      <div class="sub-total-header">
        <p class="primary-text">Sub Total</p>
        <p class="primary-text">${{ total }}</p>
      </div>

      <div class="sub-total-entries">
        <div class="entry-item">
          <p class="secondary-text">Discount</p>
          <p class="primary-text">$0.00</p>
        </div>
        <div class="entry-item">
          <p class="secondary-text">Total tax</p>
          <p class="primary-text">$0.00</p>
        </div>

        <div class="entry-item total">
          <p class="secondary-text">Total Amount</p>
          <p class="primary-text">${{ total }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toDecimals } from "src/utils/numberUtils";
import PaymentCard from "./PaymentCard.vue";
export default {
  components: { PaymentCard },
  name: "InvoicePaymentMethod",

  props: {
    cardId: {
      required: true,
    },
  },

  data() {
    return {
      card: null,
    };
  },

  computed: {
    total() {
      return toDecimals(this.$store.state.invoice.activeInvoiceTotal);
    },
  },

  mounted() {
    fetch(`/api/cards/${this.cardId}`)
      .then((res) => res.json())
      .then((json) => (this.card = json?.card));
  },
};
</script>

<style lang="scss" scoped>
// $

.container {
  gap: 30px;
  display: flex;
  padding-top: 20px;
  flex-direction: row;
  justify-content: space-between;

  @include ipad {
    align-items: center;
    flex-direction: column;
    justify-content: start;
  }

  .payment-details {
    width: 350px;
    display: flex;
    max-width: 100%;
    flex-direction: column;
    &-header {
      display: flex;
      flex-direction: row;
      margin-bottom: 14px;
      justify-content: space-between;
    }
  }

  .sub-total {
    width: 350px;
    display: flex;
    max-width: 100%;
    flex-direction: column;
    &-header {
      display: flex;
      flex-direction: row;
      margin-bottom: 14px;
      justify-content: space-between;
    }
    &-entries {
      width: 100%;
      display: flex;
      flex-direction: column;
      .entry-item {
        width: 100%;
        display: flex;
        flex-direction: row;
        margin-bottom: 14px;
        justify-content: space-between;
        p {
          font-size: 14px;
        }
        &.total {
          margin-top: 20px;
          padding-top: 20px;
          border-top: $border;
          p {
            font-size: 15px;
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>
