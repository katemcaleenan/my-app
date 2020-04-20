<template>
  <div class="to-do-item">
    <li>
      {{ title }}
      <button @click="$emit(\'remove\')">Remove</button>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style>
</style>
