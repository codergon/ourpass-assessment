<template>
  <invoice-header :invoice-id="invoiceId" />

  <div class="invoice-content">
    <div class="flex row spaced company-details-container" v-if="data?.seller">
      <div class="row flex align-center company-details">
        <div class="company-logo">
          <img v-bind:src="require('assets/images/dipa.png')" alt="logo" />
        </div>
        <div class="company-info">
          <p class="primary-text">{{ data?.seller?.name }}</p>
          <p class="secondary-text">{{ data?.seller?.email }}</p>
        </div>
      </div>

      <div class="column flex company-address">
        <p class="secondary-text">{{ data?.seller?.address?.street }}</p>
        <p class="secondary-text">{{ data?.seller?.address?.city }}</p>
        <p class="secondary-text">{{ data?.seller?.address?.country }}</p>
      </div>
    </div>

    <invoice-details
      v-if="data?.billedTo"
      :invoice-id="invoiceId"
      :dueDate="data?.dueDate"
      :issuedDate="data?.issuedDate"
      :billedTo="data?.billedTo"
    />

    <invoice-item-details :items="data?.items" v-if="data?.items?.length > 0" />

    <invoice-payment-method v-if="data?.cardId" :cardId="data?.cardId" />
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
      data: null,
    };
  },

  created() {
    fetch(`/api/invoice/${this.invoiceId}`)
      .then((res) => res.json())
      .then((json) => {
        this.$store.commit("invoice/setActiveInvoice", json.invoice);

        this.data = json.invoice;
      });
  },
};
</script>

<style lang="scss" scoped>
// $

.invoice-content {
  display: flex;
  border-radius: 14px;
  margin-bottom: 50px;
  flex-direction: column;
  padding: 20px 26px 40px;
  background-color: #fff;
  @include phone {
    padding: 20px 20px 40px;
  }
  p {
    line-height: 1.6;
  }

  .company-details-container {
    gap: 20px;
    @include ipad {
      flex-direction: column;
      justify-content: start;

      .company-address {
        // flex-direction: row;
        align-items: flex-start;
      }
    }
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
