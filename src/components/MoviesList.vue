<template>
  <div class="movies">
   <b-form-select @change='sortMovies()' v-model="selected" :options="options"></b-form-select>
    <b-link
      class="link"
      :to="'/movie/' + movie.episode_id"
      v-for="movie in movies"
      :key="movie.episode_id"
    >{{movie.title}}</b-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      movies: null,
      selected: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'release_date', text: 'Release Date' },
          { value: 'title', text: 'Title' }
        ]
    };
  },
  methods: {
    fetchAllMovies() {
      axios("https://swapi.dev/api/films/").then(resp => {
        this.movies = resp.data.results;
      });
    },
    sortMovies() {
      if (this.movies) {
        this.movies.sort((a, b) => (a[this.selected] > b[this.selected] ? 1 : -1));
      }
    }
  },
  mounted() {
    this.fetchAllMovies();
    this.sortMovies();
  }
};
</script>

<style>
.movies {
  background-color: rgb(255, 255, 255, 0.9);
  border: 3px outset blue;
  border-radius: 5px;
  height: auto;
  width: 80vw;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
}
.link {
  flex-basis: 100%;
  font-size: 2rem;
}
</style>