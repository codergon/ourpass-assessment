<template>
  <div class="invoice-details flex row spaced">
    <div class="column flex details-block">
      <p class="primary-text">Invoice Number</p>
      <p class="primary-text">{{ invoiceId.toUpperCase() }}</p>
      <p class="secondary-text">
        Issued Date: <span>{{ "11 Jan 2022" }}</span>
      </p>
      <p class="secondary-text">
        Due Date: <span>{{ "18 Jan 2022" }}</span>
      </p>
    </div>
    <div class="column flex details-block billing-address">
      <p class="primary-text">Billed to</p>
      <p class="secondary-text">Zack Grizzly</p>
      <p class="secondary-text">Monlight Agency LTD</p>
      <p class="secondary-text">New York, USA</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InvoiceDetails",
  props: {
    invoiceId: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.invoice-details {
  padding: 30px 30px;
  border-radius: 20px;
  margin-top: 2rem;
  background: #504da4;
  .details-block {
    gap: 2px;
  }
  .billing-address {
    align-items: flex-end;
  }
  p {
    color: #fff;
    line-height: 1.8;
    &.secondary-text {
      font-weight: 400 !important;
    }
    &.primary-text {
      font-weight: 600 !important;
    }
    span {
      font-weight: 600 !important;
    }
  }
}
</style>
