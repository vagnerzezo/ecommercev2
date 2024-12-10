<!-- eslint-disable vue/first-attribute-linebreak -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/html-self-closing -->
<template>
  <div
    v-if="product"
    class="mx-auto mt-8 max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8"
  >
    <div class="m-40"></div>
    <div class="">
      <div class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
        <div class="lg:col-span-5 lg:col-start-8">
          <div class="flex justify-between">
            <h1 class="text-xl font-medium text-gray-900">
              {{ product.title }}
            </h1>
            <p class="text-xl font-medium text-gray-900">
              R$ {{ formatPrice(product.price) }}
            </p>
          </div>
          <!-- Reviews -->
          <div class="mt-4 flex justify-between">
            <div v-if="product.brand">
              <span class="text-sm font-semibold">Marca: </span>
              <span class="text-xs">{{ product.brand }}</span>
            </div>
            <div v-if="product.sku">
              <span class="text-sm font-semibold">Sku: </span>
              <span class="text-xs">{{ product.sku }}</span>
            </div>
          </div>
        </div>

        <!-- Image gallery -->
        <div
          class="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0"
        >
          <h2 class="sr-only">Images</h2>
          <div v-if="product.images.length === 1">
            <img
              :src="product.images[0]"
              alt=""
              class="rounded-lg border border-gray-300"
            />
          </div>

          <div v-else class="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
            <img
              v-for="image in product.images"
              :key="image.id"
              :src="image"
              :alt="image.imageAlt"
              :class="[
                image.primary
                  ? 'lg:col-span-2 lg:row-span-2'
                  : 'hidden lg:block',
                'rounded-lg border border-gray-300',
              ]"
            />
          </div>
        </div>

        <div class="mt-8 lg:col-span-5">
          <button
            type="button"
            class="rounded-md bg-white px-10 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Ver produto
          </button>

          <div class="mt-10">
            <div
              class="mt-4 space-y-4 text-sm/6 text-gray-500"
              v-html="product.description"
            />
            <div
              class="mt-4 space-y-4 text-sm/6 text-gray-500"
              v-html="product.description"
            />
            <div
              class="mt-4 space-y-4 text-sm/6 text-gray-500"
              v-html="product.description"
            />
          </div>
        </div>
      </div>

      <div class="mt-20 rounded-lg border border-gray-300 p-8">
        <h2 class="text-2xl">Descrição</h2>
        <div class="flex items-center">
          <img
            v-if="product.images[0]"
            :src="product.images[0]"
            alt=""
            class="flex w-80 h-80"
          />
          <p class="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            luctus tincidunt metus, eget porta erat auctor quis. Fusce luctus
            tempus metus, sed hendrerit urna tempus non. Fusce ut metus libero.
            Curabitur facilisis ante in sagittis ornare. Donec vitae ligula
            euismod, commodo est at, ultrices orci. Nullam semper lectus a magna
            lobortis pellentesque. Vivamus porta, dolor at dapibus interdum,
            lorem nisi iaculis metus, eget vulputate erat velit id nibh.
          </p>
        </div>
        <div class="flex items-center">
          <p class="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            luctus tincidunt metus, eget porta erat auctor quis. Fusce luctus
            tempus metus, sed hendrerit urna tempus non. Fusce ut metus libero.
            Curabitur facilisis ante in sagittis ornare. Donec vitae ligula
            euismod, commodo est at, ultrices orci. Nullam semper lectus a magna
            lobortis pellentesque. Vivamus porta, dolor at dapibus interdum,
            lorem nisi iaculis metus, eget vulputate erat velit id nibh.
          </p>
          <img
            v-if="product.images[1]"
            :src="product.images[1]"
            alt=""
            class="flex w-80 h-80"
          />
        </div>
      </div>
    </div>
    <Reviews
      :reviews="product"
      class="mt-10 rounded-lg border border-gray-300 p-8"
    />
  </div>
</template>

<script>
import Reviews from "@/components/product/Reviews.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ProductPage", // Recebe o ID da rota como prop
  components: {
    Reviews,
  },
  props: ["id"],
  data() {
    return {
      loading: true, // Controle de carregamento
    };
  },
  computed: {
    ...mapGetters(["Product"]), // Mapeia o getter para acessar o estado do produto
    product() {
      return this.Product;
    },
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    ...mapActions(["fetchProduct"]), // Mapeia a action para buscar o produto
  },
  async created() {
    // Chama a action para buscar o produto com base no ID
    await this.fetchProduct(this.id);
    this.loading = false;
  },
};
</script>
