
<template>
  <Header/>
  <div class="container flex justify-center mt-10">
    <Hero/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
export default {
  components: {Header, Hero},
}
</script>
