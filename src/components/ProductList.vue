<template>
  <ul class="product-list">
    <li
      class="color-box"
      v-for="(product, index) in products"
      :key="product.id"
      :style="{ backgroundColor: product.color }"
      @mouseover="onMouseOver(index)"
    ></li>
  </ul>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  methods: {
    onMouseOver(index) {
      this.$emit('product-hovered', index)
    }
  }
}
</script>

<style>
.product-list {
  display: grid;
  justify-content: space-evenly;
}
.color-box {
  width: 40px;
  height: 40px;
  margin-top: 5px;
  border-radius: 2px;
}

.product-list li {
  list-style-type: none;
}
</style>
