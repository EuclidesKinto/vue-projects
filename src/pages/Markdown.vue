<template>
  <div class="flex-coll w-full">
    <h2 class="text-3xl font-bold mb-3 text-center">Markdown</h2>
    <section class="flex w-full h-screen">
      <article class="w-1/2 border">
        <textarea class="w-full h-full p-3"
                  v-model="text"
        ></textarea>
      </article>
      <article class="w-1/2 border bg-gray-200 p-3"
      v-html="markedText"
      ></article>
    </section>
  </div>
</template>

<script>
import {marked} from 'marked';
export default {
  data() {
    return{
      text: "",
    }
  },
  computed: {
    markedText(){
      return marked(this.text);
      // setTimeout(() => {
      // }, 1000)
    }
  }
}
</script>

<style scoped>

</style>