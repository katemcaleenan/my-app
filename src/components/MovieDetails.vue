<template>
  <div>
    <div
      :class="[{ 'favorite-shadow': selectedMovie.favorite }, 'hero-body']"
      :style="{ 'background-image': selectedMovie.largeImgSrc }"
    >
      <div>
        <div class="container">
          <div class="nav-left">
            <a class="nav-item">
              <i class="fa fa-bars" aria-hidden="true"></i>
            </a>
            <router-link to="/" class="nav-item is-active">Home</router-link>|
            <router-link :to="{name: 'vueflix-release'}">New Releases</router-link>|
            <a class="nav-item is-active">
              <span class="tag is-rounded">Films</span>
            </a>
            <a class="nav-item is-active" style="float:right;">
              <select v-model="selectedFavourite" v-on:change="favouriteClicked">
                <option value>My Favorites</option>
                <option v-for="movie in movies" :key="movie.id" v-if="movie.favorite">{{ movie.id }}</option>
              </select>
            </a>
          </div>
        </div>
      </div>
      <div>
        <p></p>
        <movieInfo></movieInfo>
      </div>
      <div class="links">
        <router-link
          :to="{path: '/vueflix/' + $route.params.id + '/trailer'}"
          class="button play-button"
        >
          Play
          <i class="fa fa-play"></i>
        </router-link>
        <a class="button is-link favorites-button" @click="addToFavorites">
          <span :class="[{ 'hide': selectedMovie.favorite }]">Add to</span>
          <span :class="[{ 'hide': !selectedMovie.favorite }]">Remove from</span>
          &nbsp;favorites
          <i class="fa fa-plus-square-o"></i>
        </a>
      </div>
    </div>
    <movieChoice></movieChoice>
  </div>
</template>

<script>
import movieChoice from '@/components/MovieChoice.vue'
import movieInfo from '@/components/MovieInfo.vue'
import movieNavBar from '@/components/MovieNavBar.vue'
import { movies } from '@/moviedb.js'
export default {
  data() {
    return {
      movies,
      selectedMovie: movies[this.$route.params.id],
      selectedFavourite: ''
    }
  },
  watch: {
    $route() {
      this.selectMovie()
    }
  },
  components: {
    movieChoice,
    movieNavBar,
    movieInfo
  },
  methods: {
    selectMovie() {
      this.selectedMovie = movies[this.$route.params.id]
    },
    addToFavorites() {
      movies[this.$route.params.id].favorite = !movies[this.$route.params.id]
        .favorite
    },
    favouriteClicked() {
      if (this.selectedFavourite === '') {
        return
      }
      this.$router.push({ path: `/vueflix/${this.selectedFavourite}` })
    }
  }
}
</script>
<style scoped >
.hide {
  display: none;
}

html .favorite-shadow,
body .favorite-shadow {
  box-shadow: 0 0 50px 15px rgb(245, 201, 237);
}

.hero-body {
  width: 600px;
}
section.hero.is-primary.is-medium {
  width: 600px;
}
a[data-v-3c40a022] {
  color: darkred;
}
.button.is-link {
  background-color: #e7ecf3;
  border-color: transparent;
  color: darkred;
}
select {
  width: auto;
  height: auto;
  border-radius: 5px;
}
</style>
