<template>
    <section
        @click="$emit('closeLogin')"
        class="z-20 h-screen w-screen bg-black/60 fixed top-0">
    </section>
    <div class="absolute inset-0">
        <div class="flex h-full">
          <div class="m-auto bg-white p-2 rounded shadow z-30">
            <form  @submit.prevent="$emit('closeLogin')"
                class="w-full p-8 text-black">
              <h1 class="text-3xl text-center mb-3 border-b pb-3">Entrar</h1>
              <input v-model="form.email"
                     type="text"
                     placeholder="E-mail"
                     class="block w-full p-3 mb-4 border rounded border-grey-light"
              />

              <input v-model="form.password"
                     type="password"
                     placeholder="Senha"
                     class="block w-full p-3 mb-4 border rounded border-grey-light"
              />
              <button v-if="form.password.length >= 6 && form.email.length >= 3"
                      type="submit" class="w-full py-3 my-1 text-center text-white bg-green-500 rounded hover:bg-green-dark focus:outline-none">
                Entrar
              </button>
              <div v-else class="w-full py-3 my-1 italic text-center text-gray-200 bg-gray-400 rounded focus:outline-none">
                Entrar
              </div>
            </form>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: "LoginModal",
  data(){
    return {
      form:{
        email: '',
        password: '',
      }
    }
  },
  methods:{
    submit(){
      console.log(this.email, this.password)
    }
  }
}
</script>

<style scoped>

</style>