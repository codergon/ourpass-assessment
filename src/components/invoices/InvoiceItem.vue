<template>
  <div class="item-info">
    <div class="item-info__column first-column">
      <div class="column-item header-item">Item name</div>
      <div class="column-item">
        <div class="input-block">Payment Project - Monlight Mobile Design</div>
      </div>

      <div class="column-item header-item header-item-description">
        Description
      </div>
      <div class="column-item">
        <div class="input-block desc">
          <input
            @blur="updateItem('description', $event.target.value)"
            v-on:keyup.enter="updateItem('description', $event.target.value)"
            v-model="description"
            type="text"
            placeholder="Description"
          />
        </div>
      </div>
    </div>

    <div class="item-info__column common-column">
      <div class="column-item header-item">Hours</div>
      <div class="column-item">
        <div class="input-block">
          <input
            @blur="updateItem('hours', $event.target.value)"
            v-on:keyup.enter="updateItem('hours', $event.target.value)"
            v-model="hours"
            type="number"
            placeholder="120"
          />
        </div>
      </div>
    </div>

    <div class="item-info__column common-column">
      <div class="column-item header-item">Rate/hr</div>
      <div class="column-item">
        <div class="input-block">
          <input
            @blur="updateItem('rate', $event.target.value)"
            v-on:keyup.enter="updateItem('rate', $event.target.value)"
            v-model="rate"
            type="number"
            placeholder="40.00"
          />
        </div>
      </div>
    </div>

    <div class="item-info__column common-column">
      <div class="column-item header-item">Tax</div>
      <div class="column-item">
        <div class="input-block">
          <p class="secondary-text">$</p>
          <input
            @blur="updateItem('tax', $event.target.value)"
            v-on:keyup.enter="updateItem('tax', $event.target.value)"
            v-model="tax"
            type="number"
            placeholder="0.00"
          />
        </div>
      </div>
    </div>

    <div class="item-info__column total-line-column">
      <div class="column-item header-item">Line Total</div>
      <div class="column-item">
        <div class="input-block">
          <p class="secondary-text">$</p>
          <input
            v-model="total"
            type="number"
            @blur="updateItem('total', $event.target.value)"
            v-on:keyup.enter="updateItem('total', $event.target.value)"
            placeholder="4,800.00"
          />
        </div>
        <div><button>+</button></div>
      </div>
    </div>
  </div>
</template>

<script>
import { toDecimals } from "../../utils/numberUtils";

export default {
  name: "InvoiceItem",

  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      tax: 0,
      rate: 0,
      total: 0,
      hours: 120,
      description: "",
    };
  },

  mounted() {
    this.updateItemFields(this.item);
  },

  methods: {
    updateItemFields(newItem) {
      this.tax = toDecimals(newItem?.tax);
      this.rate = toDecimals(newItem?.rate);
      this.hours = toDecimals(newItem?.hours);
      this.description = newItem?.description;
      this.total = toDecimals(newItem?.rate * newItem?.hours + newItem?.tax);
    },

    updateItem(key, value) {
      let newItem = {
        id: this.item.id,
        tax: this.tax,
        rate: this.rate,
        total: this.total,
        hours: this.hours,
        description: this.description,
        [key]: value,
      };

      if (key === "hours" || key === "rate" || key === "tax") {
        newItem.total = toDecimals(newItem.hours * newItem.rate + newItem.tax);
      } else if (key === "total") {
        newItem.rate = toDecimals(
          (newItem.total - newItem.tax) / newItem.hours
        );
      }

      this.updateItemFields(newItem);
      this.$store.commit("invoice/updateItem", newItem);
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

.item-info {
  width: 100%;
  display: flex;
  padding-bottom: 4px;
  flex-direction: row;
  border-bottom: $border;

  flex-wrap: wrap;

  &__column {
    display: flex;
    font-size: 14px;
    flex-direction: column;
    .column-item:not(last-child) {
      width: 100%;
      display: flex;
      overflow: hidden;
      padding-right: 20px;
    }

    .header-item {
      height: 44px;
      display: flex;
      font-weight: 600;
      padding-left: 6px;
      color: $secondary;
      align-items: center;
      margin-bottom: 20px;
      border-bottom: $border;
      &-description {
        display: none !important;
        @include desktop {
          display: flex !important;
        }
      }
    }
    .input-block {
      gap: 10px;
      width: 100%;
      height: 46px;
      display: flex;
      border: $border;
      padding: 0px 18px;
      flex-direction: row;
      border-radius: 12px;
      align-items: center;
      background: $accent;
      input {
        flex: 1;
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        font-size: 14px;
        min-width: auto;
        background: transparent;
        font-size: 14px !important;
      }
    }

    &.first-column {
      flex: 1;
      white-space: nowrap;
      min-width: max-content;
      max-width: calc(min(500px, 100%));
      .input-block {
        margin-bottom: 16px;
      }
    }
    &.common-column {
      min-width: 120px;
      max-width: 120px;
    }
    &.total-line-column {
      flex: 1;
      min-width: max-content;
      .column-item:not(.header-item) {
        gap: 20px;
        align-items: center;
        button {
          flex: 0;
          width: 24px;
          height: 24px;
          color: #fff;
          display: flex;
          font-size: 20px;
          border-radius: 100%;
          align-items: center;
          padding: 0px !important;
          justify-content: center;
          background-color: $primary;
        }
      }

      .input-block {
        width: 140px;
      }
    }
  }

  @include desktop {
    gap: 16px;
    padding-top: 16px;
    padding-bottom: 16px;

    &__column {
      flex: 1;
      margin-top: 0px;
      min-width: none !important;
      max-width: none !important;

      .column-item {
        align-items: center;
        padding-right: 0px !important;
        &.header-item {
          height: auto;
          // color: #555;
          margin-bottom: 8px;
          border-bottom: none;
        }

        .input-block {
          height: 44px;
          border-radius: 10px;
          padding: 0px 14px;
        }
      }

      &.first-column {
        max-width: 100%;
        .input-block {
          margin-bottom: 16px;
          &.desc {
            margin-bottom: 0px;
          }
        }
      }

      &.total-line-column {
        button {
          font-size: 16px !important;
        }
      }
    }
  }
}
</style>
