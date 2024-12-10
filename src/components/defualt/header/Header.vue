<template>
     <header
          class="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-full lg:max-w-screen-lg">
          <div class="px-4">
               <div class="flex items-center justify-between">
                    <div class="flex shrink-0">
                         <a aria-current="page" class="flex items-center" href="/">
                              <img class="h-6 w-auto" src="@/assets/img/logo-techz.svg" alt="">
                              <p class="sr-only">techz</p>
                         </a>
                    </div>
                    <div class="hidden md:flex md:items-center md:justify-center md:gap-5">
                         <div v-for="(cat, indice) in categories?.slice(0, 7)" :key="indice">
                              <router-link :to="`/categoria/${cat.slug}`" aria-current="page"
                              class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                              href="#">{{ cat.name }}
                         </router-link>
                         </div>
                    </div>
                    <div class="flex items-center justify-end gap-3">
                         <button type="button" class="flex items-center focus:outline-none"
                              aria-label="toggle profile dropdown">
                              <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 32 32" width="32">
                                   <path d="m8.0071 24.93a4.9958 4.9958 0 0 1 4.9929-4.93h6a4.9959 4.9959 0 0 1 4.9929 4.93 11.94 11.94 0 0 1 -15.9858 0zm12.4929-12.43a4.5 4.5 0 1 1 -4.5-4.5 4.5 4.5 0 0 1 4.5 4.5z"
                                        fill="none" />
                                   <path
                                        d="m26.7489 24.93a13.9893 13.9893 0 1 0 -24.7489-8.93 13.899 13.899 0 0 0 3.2511 8.93l-.02.0166c.07.0845.15.1567.2222.2392.09.1036.1864.2.28.3008.28.3033.5674.5952.87.87.0915.0831.1864.1612.28.2417.32.2759.6484.5372.99.7813.0441.0312.0832.0693.1276.1006v-.0127a13.9011 13.9011 0 0 0 16 0v.0125c.0444-.0313.0835-.0694.1276-.1006.3412-.2441.67-.5054.99-.7813.0936-.08.1885-.1586.28-.2417.3025-.2749.59-.5668.87-.87.0933-.1006.1894-.1972.28-.3008.0719-.0825.1522-.1547.2222-.2392zm-10.7489-16.93a4.5 4.5 0 1 1 -4.5 4.5 4.5 4.5 0 0 1 4.5-4.5zm-7.9929 16.93a4.9957 4.9957 0 0 1 4.9929-4.93h6a4.9958 4.9958 0 0 1 4.9929 4.93 11.94 11.94 0 0 1 -15.9858 0z" />
                                   <path d="m0 0h32v32h-32z" fill="none" />
                              </svg>
                         </button>
                         <button class="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="26" viewBox="0 0 16 16"
                                   width="26">
                                   <g fill="#212121">
                                        <path
                                             d="m2.5 2c-.27614 0-.5.22386-.5.5s.22386.5.5.5h.2457c.22324 0 .41943.14799.48076.36264l1.58556 5.54944c.18398.64395.77256 1.08792 1.44228 1.08792h4.5687c.6133 0 1.1649-.37343 1.3927-.94291l1.4743-3.6857c.2627-.65686-.2211-1.37139-.9285-1.37139h-8.31292l-.2606-.91208c-.18398-.64395-.77256-1.08792-1.44228-1.08792z" />
                                        <path
                                             d="m6.5 14c.82843 0 1.5-.6716 1.5-1.5s-.67157-1.5-1.5-1.5-1.5.6716-1.5 1.5.67157 1.5 1.5 1.5z" />
                                        <path
                                             d="m10.5 14c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5c-.82843 0-1.5.6716-1.5 1.5s.67157 1.5 1.5 1.5z" />
                                   </g>
                              </svg>
                         </button>
                    </div>
               </div>
          </div>
     </header>
</template>
<script>
export default {
     name: "PageHeader",
     computed: {
          categories() {
               return this.$store.getters.allCategory;
          },
     },

     created() {
          this.$store.dispatch("fetchCategory");
     }
}
</script>