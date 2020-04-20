<template>
  <div class="container description-container">
    <div class="columns">
      <div class="column is-three-quarters">
        <h1 class="title">{{ selectedMovie.title }}</h1>
        <h4 class="subtitle">
          <p class="subtitle-tag">{{ selectedMovie.duration }}</p>
          <p class="subtitle-tag">{{ selectedMovie.genre }}</p>
          <p class="subtitle-tag">{{ selectedMovie.releaseDate }}</p>
        </h4>
        <p class="description">{{ selectedMovie.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { movies } from '@/moviedb.js'
export default {
  data() {
    return {
      selectedMovie: movies[this.$route.params.id],
      movies
    }
  },
  methods: {
    selectMovie() {
      this.selectedMovie = movies[this.$route.params.id]
    }
  }
}
</script>

<style>
p.home-subintro {
  color: white;
}

p.subtitle-tag {
  color: white;
}
h1.home-intro {
  color: darkred;
}
h1.title {
  color: darkred;
  text-shadow: red;
}

p.description {
  color: white;
}

h4 {
  color: white;
}
</style>
