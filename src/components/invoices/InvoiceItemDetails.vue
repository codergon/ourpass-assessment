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

    <div class="item-info">
      <div class="item-info__column first-column">
        <div class="column-item header-item">Item name</div>
        <div class="column-item">
          <div class="input-block">
            Payment Project - Monlight Mobile Design
          </div>
        </div>

        <div class="column-item">
          <div class="input-block desc">
            <input type="text" placeholder="Description" />
          </div>
        </div>
      </div>

      <div class="item-info__column common-column">
        <div class="column-item header-item">Hours</div>
        <div class="column-item">
          <div class="input-block">
            <input type="number" placeholder="120" />
          </div>
        </div>
      </div>

      <div class="item-info__column common-column">
        <div class="column-item header-item">Rate/hr</div>
        <div class="column-item">
          <div class="input-block">
            <input type="number" placeholder="40.00" />
          </div>
        </div>
      </div>

      <div class="item-info__column common-column">
        <div class="column-item header-item">Tax</div>
        <div class="column-item">
          <div class="input-block">
            <p class="secondary-text">$</p>
            <input type="number" placeholder="0.00" />
          </div>
        </div>
      </div>

      <div class="item-info__column total-line-column">
        <div class="column-item header-item">Line Total</div>
        <div class="column-item">
          <div class="input-block">
            <p class="secondary-text">$</p>
            <input type="number" placeholder="4,800.00" />
          </div>
          <div><button>+</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlidersIcon from "../common/icons/SlidersIcon.vue";
export default {
  components: { SlidersIcon },
  name: "InvoiceItemDetails",
  props: {},
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
}
</style>
