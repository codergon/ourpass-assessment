<template>
  <div class="card">
    <div class="card-type">
      <p class="primary-text">Wire transfer</p>
      <wise-logo />
    </div>

    <div class="info">
      <p class="secondary-text">Account name:&nbsp;</p>
      <p class="primary-text">Barly Vallendito</p>
    </div>
    <div class="info">
      <p class="secondary-text">Account number:&nbsp;</p>
      <p class="primary-text">9700 0023 4300 2900</p>
    </div>
    <div class="info">
      <p class="secondary-text">Routing number:&nbsp;</p>
      <p class="primary-text">084009519</p>
    </div>
  </div>
</template>

<script>
import WiseLogo from "../common/icons/WiseLogo.vue";
export default {
  components: { WiseLogo },
  name: "InvoicePaymentMethod",
};
</script>

<style lang="scss">
.card {
  width: 350px;
  display: flex;
  padding: 16px 20px;
  max-width: 100%;
  background: $accent;
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
