<template>
  <div class="movie-navbar">
    <header class="nav">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </a>
          <router-link to="/" class="nav-item is-active">Home</router-link>
          <a class="nav-item is-active">
            <span class="tag is-rounded">Films</span>
          </a>
          <a class="nav-item is-active">Music</a>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { movies } from '@/moviedb.js'
export default {
  data() {
    return {
      movies
    }
  }
}
</script>

<style scoped>
.tag:not(body) {
  background-color: whitesmoke;
  color: darkred;
}
a {
  color: darkred;
  font-weight: 600;
  background-color: transparent;
}

select {
  width: auto;
  height: auto;
  border-radius: 5px;
}
</style>
