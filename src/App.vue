
<template>
  <Header/>
  <div class="container flex justify-center mt-10 mx-auto">
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {Header},
}
</script>
