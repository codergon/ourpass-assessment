import _ from "lodash";

export function updateItem(state, details) {
  state.activeInvoice = {
    ...state.activeInvoice,
    items: state.activeInvoice.items.map((item) => {
      if (item.id === details.id) {
        return {
          ...item,
          ...details,
        };
      }
      return item;
    }),
  };
  state.activeInvoiceTotal =
    _.sumBy(state.activeInvoice.items, "total") -
    state.activeInvoiceDiscount -
    state.activeInvoiceTax;
}

export function setActiveInvoice(state, invoice) {
  state.activeInvoice = invoice;
  state.activeInvoiceTotal =
    _.sumBy(state.activeInvoice.items, "total") -
    state.activeInvoiceDiscount -
    state.activeInvoiceTax;
}
