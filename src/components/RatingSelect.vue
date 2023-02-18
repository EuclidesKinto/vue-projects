<template>
  <ul class="rating">
    <li v-for="n in 10" :key="`rating-${n}`">
      <input type="radio"
             :id="`num${n}`"
             name="rating"
             :value="n"
             :checked="selected === n"
             v-model="selected"
      >
      <label :for="`num${n}`">{{n}}</label>
    </li>
  </ul>
</template>

<script>
export default {
  name: "RatingSelect",
  data(){
    return{
      selected: this.rating
    }
  },
  props:{
    rating:{
      type: Number
    }
  },
   watch:{
    selected(newVal){
      this.$emit('setRating', newVal);
    },
     rating(newVal){
      this.selected = newVal;
     }
   }
}
</script>

<style scoped>
.rating {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 30px 0 40px;
}
.rating li,
.num-display {
  position: relative;
  /* background: #4ecca3; */
  width: 50px;
  height: 50px;
  padding: 10px;
  text-align: center;
  border-radius: 50%;
  font-size: 19px;
  border: 1px #ccc solid;
  transition: 0.3s;
}
.rating li label {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
.rating li:hover,
.num-display {
  background: #4ecca3;
  color: #fff;
}
[type="radio"] {
  opacity: 0;
}
[type="radio"]:checked ~ label {
  background: #4ecca3;
  color: #fff;
}
.input-group {
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  padding: 8px 10px;
  border-radius: 8px;
}
input {
  flex-grow: 2;
  border: none;
  font-size: 16px;
}
input:focus {
  outline: none;
}
</style>