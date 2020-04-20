<template>
  <div class="product-details">
    <div class="product-image">
      <img :src="activeProduct.image">
    </div>

    <div class="product-info">
      <h2>{{ activeProduct.titles }}</h2>

      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>
      <p>Shipping: {{ shipping }}</p>
      <ul>
        <li v-for="(detail, index) in activeProduct.details" :key="index">{{ detail }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeProduct: {
      type: Object,
      required: false
    },
    premium: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {}
  },
  computed: {
    inStock() {
      return !!this.activeProduct.quantity
    },
    shipping() {
      if (this.premium) {
        return 'Free'
      }
      return 2.99
    }
  }
}
</script>

<style>
.product-details {
  display: flex;
}

img {
  border: 1px solid #d8d8d8;
  width: 70%;
  margin: 40px;
  box-shadow: 0px 0.5px 1px #d8d8d8;
}

.product-image {
  width: 80%;
}

.product-image,
.product-info {
  margin-top: 10px;
  width: 50%;
}
</style>
