<template>
  <div class="flex justify-center container mt-10 mx-auto ">
    <div class="flex-col">
      <h2 class="text-3xl font-bold mb-3 text-center">
        {{herosCount}} {{pluralHerosCount}}
      </h2>
      <div v-for="(hero, index) in dcHeros" :key="hero.name">
        <div class="flex justify-between">
          <span class="text-lg">{{index+1}} - {{hero.name}}</span>
          <div @click="removeHero(index)" class="px-2 my-2 bg-red-500 rounded-full w-min cursor-pointer">
            <span class="w-4 h-4 text-white">
              x
            </span>
          </div>
        </div>
      </div>
      <form class="flex mt-3" @submit.prevent="addHero">
        <input class="flex-grow pl-2 pr-3 border block py-2 px-0
            rounded text-md text-gray-900 border-b-2
            focus:outline-none focus:ring-0"
               type="text" v-model="newHero"
               ref="newHeroRef"
               placeholder="Nome do herói..."
        >
        <button v-if="newHero.length >= 2"  class=" px-5 text-2xl inline-flex items-center  border-l rounded-r text-white font-extrabold bg-green-500 ">
          +
        </button>
        <span v-else  class=" px-5 text-2xl inline-flex items-center  border-l rounded-r text-white font-extrabold bg-red-500 ">
          +
        </span>
      </form>
    </div>
  </div>
</template>

<script>

import {ref, computed, onMounted} from "vue";

export default {
  setup(){
    const newHeroRef = ref("");
    const newHero = ref("");
    const dcHeros = ref([
      { name: "SuperMan"},
      { name: "BatMan"},
      { name: "Flash"},
      { name: "Jocker...?"}
    ]);

    function removeHero(value){
      dcHeros.value =  dcHeros.value.filter((hero, i) => i !== value)
    }
    function addHero(){
      if (newHero.value !== "") {
        dcHeros.value.unshift({ name: newHero.value});
        newHero.value = "";
      }
    }

    const herosCount = computed(() => {
      return dcHeros.value.length;
    })
    const pluralHerosCount = computed(() => {
      return dcHeros.value.length <= 1 ? 'Herói Cadastrado' : 'Heróis Cadastrados';
    })

    onMounted(() => {
      newHeroRef.value.focus();
    });
    return {
      dcHeros,
      newHero,
      removeHero,
      herosCount,
      pluralHerosCount,
      addHero,
      newHeroRef
    };
  }
}
</script>