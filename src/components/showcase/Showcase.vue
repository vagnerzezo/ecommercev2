<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/html-self-closing -->
<template>
  <div class="showcase container p-6 mx-auto">
    <h2
      class="mt-2 text-pretty text-3xl font-semibold tracking-tight text-gray-900 mb-6"
    >
      Produtos lançamentos
    </h2>
    <div class="card-product flex gap-6">
      <div v-for="item in showcaseOne.products?.slice(0, 4)" :key="item.id" class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div v-if="created === false" class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-black bg-clip-border text-gray-700 flex justify-center">
          <img class="h-48 w-48 rounded-xl" src="@/assets/img/logoWhite.svg" alt="logo da loja" />
        </div>
        <div v-else class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-black bg-clip-border text-gray-700 flex justify-center">
          <img :src="item.images[1]" class="max-h-full max-w-full mx-auto object-cover object-center" :alt="item.title" />
        </div>
        <div class="p-6 h-52">
          <div class="mb-2 flex items-center justify-between">
            <p
              class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased"
            >
              {{ item.title }}
            </p>
            <p
              class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased"
            >
              R$ {{ formatPrice(item.price) }}
            </p>
          </div>
          <p
            class="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75"
          >
            {{ item.description }}
          </p>
        </div>
        <div class="p-6 pt-0">
          <button
            class="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Ver produto
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShowCase",
  data() {
    return {
      created: false,
    };
  },
  computed: {
    showcaseOne() {
      return this.$store.getters.oneShowcase;
    },
  },
  created() {
    setTimeout(() => {
      this.created = true;
    }, 1500);
    this.$store.dispatch("fetchShowcaseOne");
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>
