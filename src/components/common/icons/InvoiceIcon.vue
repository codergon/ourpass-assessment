<template>
  <svg
    :style="style"
    fill="none"
    viewBox="0 0 18 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 1.7325e-06C1.45 1.78059e-06 0.979 0.260889 0.587 0.782667C0.195666 1.30533 -2.17805e-08 1.93333 4.23295e-08 2.66667L1.67422e-06 21.3333C1.73833e-06 22.0667 0.195668 22.6947 0.587002 23.2173C0.979002 23.7391 1.45 24 2 24L16 24C16.55 24 17.021 23.7391 17.413 23.2173C17.8043 22.6947 18 22.0667 18 21.3333L18 8L12 8.58275e-07L2 1.7325e-06ZM11 2.66667L16 9.33333L11 9.33333L11 2.66667ZM3 12.3333L8 12.3333L8 14L3 14L3 12.3333ZM3 16.6667L13 16.6667L13 18.3333L3 18.3333L3 16.6667Z"
    />
  </svg>
</template>

<script>
export default {
  name: "Invoice-Icon",
  props: {
    size: {
      type: Number,
      default: 17.5,
    },
  },
  computed: {
    style() {
      return "height: " + this.size + "px";
    },
  },
};
</script>
