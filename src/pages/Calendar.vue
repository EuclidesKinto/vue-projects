<template>
  <div class="flex-col">
      <h2 class="text-3xl font-bold text-center pb-3">Calendário Vue</h2>
      <section class="flex py-5 justify-center bg-blue-100">
        <p class="font-extrabold text-xl">{{currentMonthName.toUpperCase()}} - {{currentYear}}</p>
      </section>
      <section class="flex py-2 w-96 ">
        <p class="text-center" style="width: 14.28%" v-for="day in days" :key="day">
          {{ day }}
        </p>
      </section>
     <section class="flex flex-wrap  w-96 h-52 border-t">
       <p
           class="text-center"
           style="width: 14.28%"
          v-for="num in startDay()" :key="num" >
       </p>
       <p
           class="text-center my-2 "
           style="width: 14.28%"
          v-for="num in (daysInMonth())" :key="num"
          :class="currentDateClass(num)">
         {{num}}
       </p>
     </section>
    <section class="flex justify-between mt-5 w-96 border-t pt-2">
      <button @click="prev"
          class="hover:bg-gray-100 px-3 text-gray-500 rounded border">Prev</button>
      <button @click="next"
          class="hover:bg-gray-100 px-3 text-gray-500 rounded border">Next </button>
    </section>
    </div>
</template>

<script>
export default {
  data(){
    return {
      currentDate: new Date().getUTCDate(),
      currentMonth: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear(),
      days: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],

    }
  },
  computed:{
    currentMonthName(){
      return new Date(
          this.currentYear,
          this.currentMonth).toLocaleString("pt-BR", {month:"long"});
    }
  },
  methods:{
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth+1,  0).getDate();
    },
    startDay(){
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    next(){
      if(this.currentMonth === 11){
        this.currentMonth = 0;
        this.currentYear++;
      }else{
        this.currentMonth++;
      }
    },
    prev(){
      if(this.currentMonth === 0){
        this.currentMonth = 11;
        this.currentYear--;
      }else{
        this.currentMonth--;
      }
    },
    currentDateClass(num) {
      const calenderFullDate = new Date(this.currentYear, this.currentMonth, num).toDateString();
      const calenderMonthFullDate = new Date().toDateString();
      // console.log(calenderFullDate)
      return calenderFullDate === calenderMonthFullDate ? 'text-white bg-blue-500': ''
    }
  }
}
</script>

<style scoped>

</style>