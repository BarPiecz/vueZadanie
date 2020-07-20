<template>
  <div id="menu">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item key="movies" :to="'/movies/'">Movies</b-nav-item>
          <b-nav-item key="reviews" :to="'/reviews'">Your Reviews</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<script>
export default {
  data() {
    return {
      visible: true
    };
  },
  props: ["movies"]
};
</script>

<style>
.active {
  color: black;
}
</style>