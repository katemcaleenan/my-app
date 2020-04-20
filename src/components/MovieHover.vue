<template>
  <div id="photo">
    <p class="flex-center" v-if="starred.length === 0">Click on the star to like the photos!</p>
    <p class="flex-center" v-else="v-else">You liked {{ starred.length }} photos!</p>
    <div class="wrapper flex-center">
      <div
        class="image"
        v-for="image in images"
        :key="image.id"
        @mouseover="hovered = image.id"
        @mouseleave="hovered = null"
      >
        <transition name="fade">
          <div class="overlay" v-if="hovered === image.id">
            <div
              class="icon icon-liked"
              v-if="isStarred(image.id)"
              @click="starToggle(image.id)"
            >&#9733;</div>
            <div class="icon icon-unliked" v-else="v-else" @click="starToggle(image.id)">&#9734;</div>
          </div>
        </transition>
        <img :src="image.path">
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
