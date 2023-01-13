
<template>
  <Header @openLoginModal="isLoginOpen = true"/>
  <router-view></router-view>
  <LoginModal v-if="isLoginOpen"  @closeLogin="isLoginOpen = false"/>
</template>

<script>
import Header from "./components/Header.vue";
import LoginModal from "./components/LoginModal.vue";
export default {
  components: {Header, LoginModal},
  data(){
    return {
      isLoginOpen : false,
    }
  }
}
</script>
