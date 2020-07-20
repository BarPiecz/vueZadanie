<template>
  <div class="overview">
    <div v-if="movieData">
      <h1 class="title">{{movieData.title}}</h1>
      <p>Producers: {{movieData.producer}}</p>
      <p>Director: {{movieData.director}}</p>
      <p>Release Date: {{movieData.release_date}}</p>
      <p>Opening Crawl: {{movieData.opening_crawl}}</p>
      <p>Your review:</p>
      <b-form-textarea
        id="textarea"
        v-model="review"
        placeholder="Your review..."
        rows="3"
        max-rows="6"
      >{{review}}</b-form-textarea>
      <b-button id="send-review" @click="sendReview">Send review</b-button>
    </div>
    <div v-else>
      <h1>Loading...</h1>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      movieData: null,
      review: ""
    };
  },
  methods: {
    sortIDs() {
      switch (this.$route.params.id) {
        case "1":
          return 4;
        case "2":
          return 5;
        case "3":
          return 6;
        case "4":
          return 1;
        case "5":
          return 2;
        case "6":
          return 3;
      }
    },
    fetchMovie() {
      axios("https://swapi.dev/api/films/" + this.sortIDs() + "/").then(
        resp => {
          return (this.movieData = resp.data);
        }
      );
    },
    sendReview() {
      let review = {
        title: this.movieData.title,
        review: this.review
      };
      this.$store.commit("saveReviews", review);
    },
    getReview() {
       let review = this.$store.state.filter(review => {
          console.log(review)
          if (review.title === this.movieData.title) return review.review
       })
       this.review = review;
    }
  },
  mounted() {
    this.fetchMovie();
  }
};
</script>

<style>
.overview {
  background-color: rgb(255, 255, 255, 0.9);
  border: 3px outset blue;
  border-radius: 5px;
  height: 80vh;
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
#send-review {
  margin-top: 10px;
}
</style>