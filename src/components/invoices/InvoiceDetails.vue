<template>
  <div class="invoice-details flex row spaced">
    <div class="column flex details-block">
      <p class="primary-text">Invoice Number</p>
      <p class="primary-text">{{ invoiceId.toUpperCase() }}</p>
      <p class="secondary-text">
        Issued Date: <span>{{ issuedDate }}</span>
      </p>
      <p class="secondary-text">
        Due Date: <span>{{ dueDate }}</span>
      </p>
    </div>
    <div class="column flex details-block billing-address">
      <p class="primary-text">Billed to</p>
      <p class="secondary-text">{{ billedTo?.name }}</p>
      <p class="secondary-text">{{ billedTo?.company }}</p>
      <p class="secondary-text">{{ billedTo?.address }}</p>
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
    dueDate: {
      type: String,
      required: true,
    },
    issuedDate: {
      type: String,
      required: true,
    },
    billedTo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
// $

.invoice-details {
  gap: 20px;
  padding: 30px;
  margin-top: 2rem;
  border-radius: 20px;
  background: #504da4;

  @include phone {
    padding: 20px;
    flex-direction: column;
    justify-content: start;

    .billing-address {
      align-items: flex-start !important;
    }
  }

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
