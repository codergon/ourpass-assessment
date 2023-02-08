<template>
  <invoice-header :invoice-id="invoiceId" />

  <div class="invoice-content">
    <div class="flex row spaced">
      <div class="row flex align-center company-details">
        <div class="company-logo">
          <img v-bind:src="require('assets/images/dipa.png')" alt="logo" />
        </div>
        <div class="company-info">
          <p class="primary-text">Dipa Inhouse</p>
          <p class="secondary-text">hello@dipainhouse.com</p>
        </div>
      </div>

      <div class="column flex company-address">
        <p class="secondary-text">Ijen Boulevard Street 101</p>
        <p class="secondary-text">Malang City, 65115</p>
        <p class="secondary-text">East Java, Indonesia</p>
      </div>
    </div>

    <invoice-details :invoice-id="invoiceId" />
    <invoice-item-details />

    <invoice-payment-method />
  </div>
</template>

<script>
import InvoiceHeader from "src/components/invoices/InvoiceHeader.vue";
import InvoiceDetails from "src/components/invoices/InvoiceDetails.vue";
import InvoiceItemDetails from "src/components/invoices/InvoiceItemDetails.vue";
import InvoicePaymentMethod from "src/components/invoices/InvoicePaymentMethod.vue";
export default {
  components: {
    InvoiceHeader,
    InvoiceDetails,
    InvoiceItemDetails,
    InvoicePaymentMethod,
  },
  name: "InvoicePage",

  data() {
    return {
      invoiceId: "inv-2022-010",
    };
  },
};
</script>

<style lang="scss" scoped>
.invoice-content {
  display: flex;
  border-radius: 14px;
  margin-bottom: 50px;
  flex-direction: column;
  padding: 20px 26px 40px;
  background-color: #fff;
  p {
    line-height: 1.6;
  }

  .company {
    &-logo {
      width: 50px;
      height: 50px;
      overflow: hidden;
      border-radius: 100%;
      margin-right: 1rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    &-info {
      .primary-text {
        font-size: 16px;
      }
    }
    &-address {
      align-items: flex-end;
    }
  }
}
</style>
