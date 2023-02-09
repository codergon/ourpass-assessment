<template>
  <div class="card">
    <div class="card-type">
      <p class="primary-text">{{ card?.type }}</p>
      <wise-logo />
    </div>

    <div class="info">
      <p class="secondary-text">Account name:&nbsp;</p>
      <p class="primary-text">{{ card?.acctName }}</p>
    </div>
    <div class="info">
      <p class="secondary-text">Account number:&nbsp;</p>
      <p class="primary-text">{{ card?.acctNumber }}</p>
    </div>
    <div class="info">
      <p class="secondary-text">Routing number:&nbsp;</p>
      <p class="primary-text">{{ card?.routingNo }}</p>
    </div>
  </div>
</template>

<script>
import WiseLogo from "../common/icons/WiseLogo.vue";
export default {
  components: { WiseLogo },
  name: "InvoicePaymentMethod",

  props: {
    card: {
      card: {
        type: Object,
        required: true,
      },
      required: true,
    },
  },
};
</script>

<style lang="scss">
$card-bg: #f8f8f8;
.card {
  width: 350px;
  display: flex;
  padding: 16px 20px;
  max-width: 100%;
  background: $card-bg;
  border-radius: 12px;
  flex-direction: column;
  p {
    font-size: 14px;
    line-height: 1.8;
    text-transform: capitalize;
  }
  .card-type {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 4px;
    justify-content: space-between;
  }
  .info {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 2px;
  }
}
</style>
