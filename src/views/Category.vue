<template>
  <div class="container p-6 mx-auto mt-20">
    <Card :data="products" />
  </div>
</template>

<script>
import Card from "@/components/defualt/Card.vue";
import { mapGetters } from 'vuex';

export default {
  components: {
    Card
  },
  data() {
    return {
      categoryName: ''
    };
  },
  computed: {
    ...mapGetters(['allProducts']), // Mapeia os produtos do estado Vuex
    products() {
      return this.allProducts; // Retorna os produtos da store
    }
  },
  watch: {
    '$route.params.slug': {
      immediate: true,
      handler(newSlug) {
        this.categoryName = newSlug; // Atualiza o nome da categoria na interface
        this.fetchCategoryProducts(newSlug); // Dispara a busca sempre que o slug mudar
      }
    }
  },
  methods: {
    async fetchCategoryProducts(slug) {
      await this.$store.dispatch('fetchProductsByCategory', slug); // Chama a ação do Vuex
    }
  }
};
</script>

<style>
/* Estilização opcional */
.product-item {
  margin-bottom: 16px;
}
</style>