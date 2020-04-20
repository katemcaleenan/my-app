<template>
  <div>
    <div class="exit">
      <router-link :to="{path: '/vueflix/' + $route.params.id}" class="delete"></router-link>
    </div>
    <div class="trailer-body" style="background: #1e1d1d">
      <div class="has-text-centered">
        <div class="columns">
          <div class="column vertical-align">
            <iframe
              allowfullscreen
              frameborder="0"
              height="376"
              :src="trailerUrlPath"
              style="width: 100%; min-width: 600px; height:100%"
            />
          </div>
        </div>
      </div>
      <movieChoice></movieChoice>
    </div>
  </div>
</template>

<script>
import { movies } from '@/moviedb.js'
import movieChoice from '@/components/MovieChoice.vue'
export default {
  components: {
    movieChoice
  },
  data() {
    return {
      movies,
      trailerUrlPath: movies[this.$route.params.id].trailerPath
    }
  }
}
</script>

<style scoped>
.hero-body {
  width: 600px;
}

section.hero.is-primary.is-medium {
  width: 600px;
}
.exit {
  width: 600px;
  padding: 10px;
  background: linear-gradient(to bottom right, #632b2b, #3e0c11);
}

.column.vertical-align {
  width: 120%;
  min-width: 600px;
  height: 376px;
}
</style>
