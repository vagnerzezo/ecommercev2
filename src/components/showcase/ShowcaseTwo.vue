<!-- eslint-disable vue/html-self-closing -->
<template>
  <div class="container p-6 mx-auto">
    <h2
      class="mt-2 text-pretty text-3xl font-semibold tracking-tight text-gray-900 mb-6"
    >
      Os mais vendidos
    </h2>
    <div
      id="modal-id"
      class="left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover rounded-xl p"
      style="
        background-image: url(https://images.unsplash.com/photo-1555421689-491a97ff2040?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
      "
    >
      <div class="relative flex flex-col items-center justify-center">
        <div
          class="grid mx-8 py-4 gap-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-3"
        >
          <div
            v-for="item in showcaseTwo.products?.slice(0, 3)"
            :key="item.id"
            class="flex flex-col"
          >
            <div class="bg-white shadow-md rounded-xl p-4">
              <div class="flex-none lg:flex">
                <div class="w-48 h-48 lg:mb-0 mb-3 bg-black rounded-xl">
                  <img
                    v-if="created === false"
                    class="h-48 w-48 rounded-xl"
                    src="@/assets/img/logoWhite.svg"
                    alt="logo da loja"
                  />

                  <img
                    v-else
                    :src="item.images[1]"
                    :alt="item.title"
                    class="w-48 h-48 object-scale-down rounded-2xl"
                  />
                </div>

                <div class="flex-auto ml-3 justify-evenly py-2">
                  <div class="flex flex-wrap">
                    <div
                      class="w-full flex-none text-xs text-blue-700 font-medium"
                    >
                      {{ item.brand }}
                    </div>
                    <h2 class="flex-auto text-sm font-medium h-10">
                      {{ item.title }}
                    </h2>
                  </div>
                  <p class="mt-3" />
                  <div class="flex py-4 text-sm text-gray-500">
                    <div class="flex-1 inline-flex items-center">
                      <p class="">
                        {{ item.availabilityStatus }}
                      </p>
                    </div>
                    <div class="flex-1 inline-flex items-center">
                      <p class="">
                        Sku: {{ item.sku }}
                      </p>
                    </div>
                  </div>
                  <div class="flex p-4 pb-2 border-t border-gray-200" />
                  <div class="flex space-x-3 text-sm font-medium">
                    <button
                      class="mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                      type="button"
                      aria-label="like"
                    >
                      Ver produto
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShowCaseTwo",
  data() {
    return {
      created: false,
    };
  },
  computed: {
    showcaseTwo() {
      return this.$store.getters.twoShowcase;
    },
  },
  created() {
    setTimeout(() => {
      this.created = true;
    }, 1500);
    this.$store.dispatch("fetchShowcaseTwo");
  },
};
</script>
