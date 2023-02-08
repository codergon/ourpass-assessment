<template>
  <div class="page-header">
    <p class="primary-color">
      Invoices<span> / edit invoice </span>
      <span class="bold-text">({{ invoiceId.toUpperCase() }})</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "InvoiceHeader",
  props: {
    invoiceId: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.page-header {
  margin: 1.5rem 0px;
  p {
    span {
      color: #acb3b9;
    }
  }
}
</style>
