<template>
  <div class="flex justify-center container mt-10 mx-auto ">
    <div class="flex-col">
      <h2 class="text-3xl font-bold mb-3 text-center">
        Calculadora
      </h2>
      <div class="w-full">
        <div class="overflow-hidden mt-5 shadow-lg mb-2 bg-purple-900 shadow-lg border rounded-lg ">
          <div class="">
            <div class="p-3 text-white text-center text-3xl bg-purple-900">Euclides</div>
            <div class="pt-5 p-5 pb-0 text-white text-right text-2xl bg-purple-800 h-16 px-2"> {{currentNum}}</div>
            <div class="p-5 text-white text-right text-2xl bg-purple-800 overflow-x-hidden">
              =
              <span class="text-orange-500" style="direction: rtl;">
             0
              </span>
            </div>
            <div class="flex items-stretch bg-purple-900 h-24">
              <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                <div class="rounded-full h-20 w-20 flex items-center bg-white justify-center shadow-lg border-2  focus:outline-none">

                </div>
              </div>

              <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                <div @click="pressed('C')" class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
                  C
                </div>
              </div>

              <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                <div @click="pressed('%')" class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
                  %
                </div>
              </div>

              <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                <div @click="pressed('÷')" class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
                  ÷
                </div>
              </div>
            </div>

            <div class="flex items-stretch bg-purple-900 h-24">
              <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                <div @click="pressed('7')" class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
                  7
                </div>
              </div>

              <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                <div @click="pressed('8')" class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
                  8
                </div>
              </div>

              <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                <div @click="pressed('9')" class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
                  9
                </div>
              </div>

              <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                <div @click="pressed('×')" class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
                  ×
                </div>
              </div>
            </div>

            <div class="flex items-stretch bg-purple-900 h-24">
              <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                <div @click="pressed('4')" class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
                  4
                </div>
              </div>

              <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                <div @click="pressed('5')" class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
                  5
                </div>
              </div>

              <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                <div @click="pressed('6')" class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
                  6
                </div>
              </div>

              <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                <div @click="pressed('-')" class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
                  -
                </div>
              </div>
            </div>

            <div class="flex items-stretch bg-purple-900 h-24">
              <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                <div @click="pressed('1')" class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
                  1
                </div>
              </div>

              <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                <div @click="pressed('2')" class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
                  2
                </div>
              </div>

              <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                <div @click="pressed('3')" class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
                  3
                </div>
              </div>

              <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                <div @click="pressed('+')" class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
                  +
                </div>
              </div>
            </div>


            <div class="flex items-stretch bg-purple-900 h-24 mb-4">
              <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                <div @click="pressed('0')" class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
                  0
                </div>
              </div>

              <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                <div @click="pressed('.')" class="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
                  .
                </div>
              </div>

              <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                <div @click="pressed('=')" class="rounded-full h-20 w-20 flex items-center bg-orange-500 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
                  =
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "Calculator",
  setup(){
    const operation = ['+', '-', '*', '/', '%'];
    const currentNum = ref('');
    const prevNum = ref('');
    const selectOperation = ref('');

    function pressed(value){
      if(value === '=') calculate();
      else if (value === 'C') clearDisplay();
      else if (value === 'x') applyOperation(value);
      else appendNumber(value);
    }

    function appendNumber(value) {
      currentNum.value = currentNum.value + value;
    }

    function applyOperation(value){
      prevNum.value = currentNum.value;
      // currentNum.value = "";
      selectOperation.value = value;
    }

    function calculate() {
      if(selectOperation.value === 'x') multiply();
      else if(selectOperation.value === '/') divide();
      else if(selectOperation.value === '-') subtract();
      else if(selectOperation.value === '+') sum();
    }

    function multiply() {
      console.log('multiply')
      currentNum.value = (prevNum.value) + (+currentNum.value);
    }
    function divide() {
      currentNum.value = +prevNum.value / +currentNum.value;
    }
    function subtract() {}
    function sum() {}

    function clearDisplay(){
      currentNum.value = '';
    }
    return{
      currentNum,
      pressed,
      selectOperation,
      prevNum,
    }
  },
}
</script>

<style scoped>
</style>