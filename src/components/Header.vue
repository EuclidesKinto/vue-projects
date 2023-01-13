<template>
  <div class="items-center flex bg-sky-500 py-5 w-full">
    <div class="container mx-auto flex justify-start ">
      <router-link
          :to="{name:'home'}"
          class="text-2xl text-yellow-400 w-56 font-extrabold hover:text-yellow-300">
        Vue Projects
      </router-link>
      <div class="flex justify-start w-full space-x-5 text-white items-center border-l">
        <router-link
            v-for="item in list" :key="item.to"
            :to="item.to"
            class="hover:underline text-lg pl-5 hover:text-yellow-200">
            {{item.title}}
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      list: [
        {title: "Heróis", to: "/hero"},
        {title: "Calendário", to: "/calendar"},
        {title: "Markdown", to: "/markdown"},
      ]
    }
  }
}
</script>

<style scoped>

</style>