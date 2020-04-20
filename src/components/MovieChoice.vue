<template>
  <section class="hero is-primary is-medium">
    <router-view></router-view>
    <div class="hero-foot">
      <div class="columns is-mobile">
        <div v-for="movieChoice in movieChoices" :key="movieChoice.id" class="column">
          <router-link :to="getMovieLink(movieChoice)" class="movie-choice">
            <img :src="`${movieChoice.smallImgSrc}`">
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { movies } from '@/moviedb.js'
export default {
  data() {
    return {
      movies,
      movieChoices: movies
    }
  },
  methods: {
    getMovieLink(movieChoice) {
      return { name: 'vueflix-movie', params: { id: movieChoice.id } }
    }
  }
}
</script>

<style scoped lang="css" src="../../public/style.css" >
</style>
