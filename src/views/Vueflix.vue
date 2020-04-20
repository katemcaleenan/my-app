<template>
  <div class="vueflix">
    <section class="hero is-primary is-medium">
      <router-view></router-view>
      <Intro></Intro>
      <movieChoice></movieChoice>
    </section>
  </div>
</template>

<script>
import Intro from '@/components/Intro.vue'
import movieChoice from '@/components/MovieChoice.vue'
import { movies } from '@/moviedb.js'
export default {
  data() {
    return {
      movies,
      movieChoices: movies
    }
  },
  components: {
    Intro,
    movieChoice
  },
  methods: {
    getMovieLink(movieChoice) {
      return { name: 'vueflix-movie', params: { id: movieChoice.id } }
    }
  }
}
</script>

<style  scoped >
.hero-body {
  width: 600px;
}
section.hero.is-primary.is-medium {
  width: 600px;
}
</style>
