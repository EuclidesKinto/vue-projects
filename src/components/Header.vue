<template>
  <div class="items-center flex bg-sky-500 py-5 w-full">
    <div class="container mx-auto flex justify-start ">
      <router-link
          :to="{name:'home'}"
          class="text-2xl text-white w-56">
        Vue Projects
      </router-link>
      <div class="flex justify-start w-full space-x-5 text-white items-center border-l">
        <router-link
            :to="{name: 'hero'}"
            class="hover:underline text-lg pl-5">
          Heróis
        </router-link>
        <router-link
            :to="{name:'calendar'}"
            class="hover:underline text-lg">
          Calendário
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>