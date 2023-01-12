
<template>
  <Header/>
  <div class="container flex justify-center mt-10 mx-auto">
    <Calendar/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Calendar from "./components/Calendar.vue";
export default {
  components: {Header, Calendar},
}
</script>
