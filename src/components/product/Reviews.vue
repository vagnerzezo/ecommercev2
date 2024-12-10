<template>
  <div class="bg-white">
    <div>
      <h2 class="text-xl font-semibold mb-8">Avaliações recentes</h2>

      <div class="-my-10">
        <div
          v-for="(review, reviewIdx) in reviews.reviews"
          :key="review.id"
          class="flex space-x-4 text-sm text-gray-500"
        >
          <div class="flex-none py-10">
            <div class="size-12 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-circle-user-round"
              >
                <path d="M18 20a6 6 0 0 0-12 0" />
                <circle cx="12" cy="10" r="4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
          </div>
          <div
            :class="[
              reviewIdx === 0 ? '' : 'border-t border-gray-200',
              'flex-1 py-10',
            ]"
          >
            <h3 class="font-medium text-gray-900">{{ review.reviewerName }}</h3>
            <p>
              <time :datetime="review.datetime">{{ review.date }}</time>
            </p>

            <div class="mt-4 flex items-center">
              <StarIcon
                v-for="rating in [0, 1, 2, 3, 4]"
                :key="rating"
                :class="[
                  review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                  'size-5 shrink-0',
                ]"
                aria-hidden="true"
              />
            </div>
            <p class="sr-only">{{ review.rating }} out of 5 stars</p>

            <div class="mt-4 text-sm/6 text-gray-500" v-html="review.comment" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { StarIcon } from "@heroicons/vue/20/solid";
</script>
<script>
export default {
  name: "Reviews",
  props: {
    reviews: [],
  },
};
</script>