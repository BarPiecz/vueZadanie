<template>
  <div class="reviews">
    <h1 class="title">Your Reviews</h1>
    <div v-if="reviews.length">
      <div v-for="review in reviews" :key="reviews.indexOf(review)">
        <p class='movie-title'>{{review.title}}</p>
        <p>{{review.review}}</p>
      </div>
    </div>
    <div v-else>
      <p>No reviews</p>
    </div>
  </div>
</template>
   
<script>
export default {
  data() {
    return {
      reviews: []
    };
  },
  mounted() {
    this.reviews = this.$store.state.savedReviews;
  }
};
</script>

<style>
.reviews {
  background-color: rgb(255, 255, 255, 0.9);
  border: 3px outset blue;
  border-radius: 5px;
  min-height: 80vh;
  height: auto;
  width: 80vw;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
}
.title {
  text-align: center;
}
.movie-title {
   font-weight: 800;
   font-size: 1.5rem;
}
</style>