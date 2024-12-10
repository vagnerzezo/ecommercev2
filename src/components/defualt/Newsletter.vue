<template>
  <div class="flex h-full justify-center items-center ">
    <div class=" w-full">
      <div class="flex flex-wrap items-center w-full  p-5 mx-auto text-left   lg:flex-nowrap  ">
        <div class="flex-1 w-full mb-5 md:mb-0 md:pr-5 lg:pr-10 md:w-1/2">
          <h3 class="mb-2 text-2xl font-bold text-gray-700 ">
            Subscribe to Newsletter
          </h3>
          <p class="text-gray-500 dark:text-gray-400 ">
            Provide your email to get email notification when
            we launch
            new
            products or publish new articles
          </p>
        </div>
        <div class="w-full px-1 flex-0 md:w-auto lg:w-1/2">
          <form novalidate="">
            <input
              type="hidden"
              name="tags"
              value="earlyaccess"
            >
            <div class="flex flex-col sm:flex-row">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                class="flex-1 px-3 py-2 placeholder-gray-300 border border-gray-600 rounded-md sm:mr-5 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:text-white dark:placeholder-gray-400"
              >
              <button
                type="submit"
                class="w-full px-6 py-4 mt-5 text-black text-lg bg-gray-300 rounded-md sm:mt-0 sm:w-auto whitespace-nowrap border border-gray-600"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
     name: 'NewSletter'
}
</script>