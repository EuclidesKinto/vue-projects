<template>
  <div class="flex flex-wrap w-full relative">
    <div class="absolute w-full"
         v-for="(color, index) in sliders" :key="color"
    >
      <Transition>
        <div  v-if="currentSlide === index"
            :class="color"
            style="height: 350px;"
        >
        </div>
      </Transition>
    </div>
    <div class="w-full" style="height: 340px">
      <div class="absolute bottom-0 w-full flex justify-center">
        <div v-for="(item, index) in sliders" :key="item"
             @click="sliderClick(index)"
             :class="currentSlide === index ? 'bg-black' : 'bg-white'"
            class="w-3 h-3 rounded-full mx-1 cursor-pointer shadow-lg"></div>
      </div>
    </div>
<!--    <div class="flex w-full my-10">-->
<!--      <div class="mx-auto">-->
<!--        <transition name="fade">-->
<!--          <h1 v-if="isTitleShow">Slider</h1>-->
<!--        </transition>-->
<!--        <button-->
<!--            @click="isTitleShow = !isTitleShow"-->
<!--            class="px-2 rounded border">Toggle</button>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "Slider",
  data(){
    return {
      currentSlide: 0,
      sliders: ["bg-green-500", "bg-blue-500", "bg-teal-500", "bg-red-500", "bg-yellow-500"],
      interval:'',
      isTitleShow: true
    }
  },
  mounted() {
    console.log(this.sliders.length)
    this.interval = setInterval(() => {
      // this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide+1;
      if (this.currentSlide === this.sliders.length-1){
        this.currentSlide = 0;
      }else{
        this.currentSlide++;
      }
    }, 3500)
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  methods:{
    sliderClick(index){
      this.currentSlide = index;
    }
  }
}
</script>

<style scoped>
.v-enter-active, .v-leave-active {
  transition: all 1s ease;
}
.v-enter-from{
  opacity: 0;
  transform: translateX(-100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
/*.slide-fade-enter-active {*/
/*  transition: all 0.3s ease-out;*/
/*}*/

/*.slide-fade-leave-active {*/
/*  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);*/
/*}*/

/*.slide-fade-enter-from,*/
/*.slide-fade-leave-to {*/
/*  transform: translateX(20px);*/
/*  opacity: 0;*/
/*}*/
</style>