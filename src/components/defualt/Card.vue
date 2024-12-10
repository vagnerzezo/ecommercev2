<template>
  <div class="card-product grid grid-cols-4 gap-4">
    <div
      v-for="product in data"
      :key="product.id"
      class="relative flex w-94 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
    >
      <div
        class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-black bg-clip-border text-gray-700 flex justify-center"
      >
        <router-link
          :to="`/produto/${product.id}`"
          class="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <img :src="product.images[0]" class="h-full w-full object-cover" />
        </router-link>
      </div>
      <div class="p-6">
        <div class="mb-2 flex items-center justify-between">
          <p
            class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased"
          >
            {{ product.title }}
          </p>
          <p
            class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased"
          >
            R$ {{ formatPrice(product.price) }}
          </p>
        </div>
        <p
          class="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75"
        >
          {{ product.description }}
        </p>
      </div>
      <div class="p-6 pt-0">
        <router-link
          :to="`/produto/${product.id}`"
          class="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Ver produto
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardProduct",
  props: {
    data: [],
  },
  computed: {
    productName() {
      return this.data;
    },
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>