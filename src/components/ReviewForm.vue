<template>
  <Card>
    <form @submit.prevent="handleSubmit">
      <h2>Escolha uma nota</h2>
      <!-- Rating Component -->
      <RatingSelect @setRating="setRating" :rating="rating" />
      <div class="input-group flex">
        <input class="flex-grow pl-2 pr-3 border block py-2 px-0
            rounded-l text-md text-gray-900 border-b-2
            focus:outline-none focus:ring-0"
            type="text" placeholder="Comentar" v-model="text" />
        <button type="submit" class="px-5 py-3 bg-teal-500 text-white rounded-r hover:bg-teal-600" :disabled="btnDisabled">
          Enviar
        </button>
      </div>
      <div class="message" v-if="message != ''">
        {{ message }}
      </div>
    </form>
  </Card>
</template>

<script setup>
import {ref} from "vue";
import Card from "./shared/Card.vue";
import RatingSelect from "./RatingSelect.vue";
const text = ref('');
const btnDisabled = ref(false);
const message = ref('');
const rating = ref(10);

const setRating = (val) => {
  rating.value = val;
  console.log(val);
}
const handleSubmit = () => {
  const newReview = {
    text: text.value,
    rating: rating.value
  }
}
</script>

<style scoped>

</style>