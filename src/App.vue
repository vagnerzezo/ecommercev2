<template>
  <div id="content">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/defualt/header/Header.vue";
import Footer from "@/components/defualt/footer/Footer.vue";

export default {
  name: "PageHome",
  components: {
    Header,
    Footer
  },
};
</script>
4