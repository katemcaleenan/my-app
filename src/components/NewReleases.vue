<template>
  <div>
    <div class="exit">
      <router-link :to="{path: '/vueflix/' }" class="delete"></router-link>
    </div>
    <div class="hero-body" style="background: #1e1e1d">
      <div class="container has-text-centered">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter vertical-align">
            <h1 class="home-intro">VueFlix</h1>
            <p class="home-subintro">NEW RELEASES</p>
            <p>Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
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

<style>
</style>
