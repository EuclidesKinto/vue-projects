<template>
  <div class="flex justify-center container mt-10 mx-auto ">
    <div class="flex-col w-full">
      <h2 class="text-3xl font-bold mb-3 text-center">Markdown</h2>
      <section class="flex w-full h-screen">
        <article class="w-1/2 border">
          <textarea class="w-full h-full p-3"
                    :value="text"
                    @input="update"
          ></textarea>
        </article>
        <article class="w-1/2 border bg-gray-200 p-3"
        v-html="markedText"
        ></article>
      </section>
    </div>
  </div>
</template>

<script>
import {marked} from 'marked';
export default {
  data() {
    return{
      text: "",
      timeout: ""
    }
  },
  computed: {
    markedText(){
      return marked(this.text);
    }
  },
  methods:{
    update(e) {
      const task = () => {
        this.text = e.target.value;
      }
        this.debounce(task)
    },
    debounce(func, wait = 1000) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(func, wait);
    }
  }
}
</script>

<style scoped>

</style>