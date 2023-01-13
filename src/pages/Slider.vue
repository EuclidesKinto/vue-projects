<template>
  <div class="flex flex-wrap w-full">
    <div class=" absolute w-full"
         v-for="(color, index) in sliders" :key="color"
    >
      <div  v-if="currentSlide === index"
          :class="color"
          style="height: 350px;"
      >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data(){
    return {
      currentSlide: 0,
      sliders: ["bg-green-500", "bg-blue-500", "bg-teal-500"],
      interval:'',
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide+1;
      // if (this.currentSlide === 2){
      //   this.currentSlide = 0;
      // }else{
      //   this.currentSlide++;
      // }
    }, 1000)
  },
  beforeUnmount() {
    clearInterval(this.interval)
  }
}
</script>

<style scoped>

</style>