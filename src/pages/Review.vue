<template class="">
  <div class="flex justify-center container mt-10 mx-auto">
    <div class="flex-col">
      <h2 class="text-3xl font-bold mb-3 text-center">
        Review Comment
      </h2>
      <div class="w-full">
       <ReviewForm/>
        <ReviewStats/>
        <ReviewList/>
      </div>
    </div>
  </div>
</template>

<script>
import ReviewForm from "../components/ReviewForm.vue";
import ReviewStats from "../components/ReviewStats.vue";
import ReviewList from "../components/ReviewList.vue";
export default {
  name: "Review",
  components: {ReviewList, ReviewStats, ReviewForm}
}
</script>

<style>
.card {
  background-color: #fff;
  color: #212121;
  border-radius: 15px;
  padding: 40px 50px;
  margin: 20px 0;
  position: relative;
}
.card.reverse {
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
}
.card h2 {
  font-size: 22px;
  font-weight: 600;
  text-align: center;
}

.feedback-stats {
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.num-display {
  position: absolute;
  top: -10px;
  left: -10px;
}
.close,
.edit {
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  background: none;
  border: none;
}
.edit {
  right: 40px;
}
.btn {
  color: #fff;
  border: 0;
  border-radius: 8px;
  color: #fff;
  width: 100px;
  height: 40px;
  cursor: pointer;
}
.btn-primary {
  background-color: #232931;
}
.btn-secondary {
  background: #4ecca3;
}
.btn:hover {
  transform: scale(0.98);
  opacity: 0.9;
}
.btn:disabled {
  background-color: #cccccc;
  color: #333;
  cursor: auto;
}
.btn:disabled:hover {
  transform: scale(1);
  opacity: 1;
}
.message {
  padding-top: 10px;
  text-align: center;
  color: red;
}
.about-link {
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: #fff;
  cursor: pointer;
}
.about-link a {
  color: #fff;
}
.about-link a:hover {
  color: #4ecca3;
}
.about h1 {
  margin-bottom: 20px;
}
.about p {
  margin: 10px 0;
}
@media (max-width: 600px) {
  .rating li {
    margin: 10px 3px;
  }
  .rating {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 30px 0 40px;
  }
  .input-group input {
    width: 80%;
  }
}
.card.reverse {
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
}
</style>