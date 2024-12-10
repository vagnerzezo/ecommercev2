<template>
  <div id="home">
    <Fullbanner />
    <Showcase :data="showcaseOne" />
    <ShowcaseTwo />
    <BannerMeio />
    <ShowcaseTree />
    <BannerText />
  </div>
</template>


<script>
import Fullbanner from "@/components/banner/Fullbanner.vue";
import Showcase from "@/components/showcase/Showcase.vue";
import ShowcaseTwo from "@/components/showcase/ShowcaseTwo.vue";
import BannerMeio from "@/components/banner/BannerMeio.vue";
import ShowcaseTree from "@/components/showcase/ShowcaseTree.vue";
import BannerText from "@/components/home/Banner-text.vue";

export default {
  name: 'HomeView',
  components: {
    Fullbanner,
    Showcase,
    ShowcaseTwo,
    BannerMeio,
    ShowcaseTree,
    BannerText
  },
  computed: {
    // Propriedades computadas são reativas e são recalculadas automaticamente quando os dados em que dependem mudam
    products() {
      // Obtém a lista de produtos do Vuex através do getter 'allProducts'
      return this.$store.getters.allProducts;
    }
  },

  created() {
    // Aqui, estamos disparando a action 'fetchProducts' para buscar os produtos da API
    this.$store.dispatch("fetchProducts");
  }
}

</script>
