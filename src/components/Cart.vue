<template>
  <div>
    <div
      class="color-box"
      v-for="(variant, index) in variants"
      :key="variant.variantId"
      :style="{ backgroundColor: variant.variantColor }"
      @mouseover="updateProduct(index)"
    ></div>
    <button
      v-on:click="addToCart"
      :disabled="!inStock"
      :class="{disabledButton: !inStock}"
    >Add to cart</button>
    <br>
    <!-- <button @click="removeFromCart">Remove from cart</button>
    <br>-->
    <br>
    <div class="cart">
      <p>Cart({{ cart }})</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedVariant: 0,
      variants: [
        {
          variantId: 2234,
          variantColor: 'orange',
          variantImage: '/img/nerf-red.jpg',
          variantQuantity: 10
        },
        {
          variantId: 2235,
          variantColor: 'yellow',
          variantImage: '/img/nerf-blue.jpg',
          variantQuantity: 0
        }
      ],
      cart: 0
    }
  },
  computed: {
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateProduct: function(index) {
      this.selectedVariant = index
    }
  }
}
</script>

<style scoped>
body {
  font-family: tahoma;
  color: #282828;
  margin: 0px;
}

.nav-bar {
  background: linear-gradient(-90deg, #84cf6a, #16c0b0);
  height: 60px;
  margin-bottom: 15px;
}

.product {
  display: flex;
  flex-flow: wrap;
  padding: 1rem;
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

.color-box {
  width: 40px;
  height: 40px;
  margin-top: 5px;
}

.cart {
  margin-right: 25px;
  float: right;
  border: 1px solid #d8d8d8;
  padding: 5px 20px;
}

button {
  margin-top: 30px;
  border: none;
  background-color: #1e95ea;
  color: white;
  height: 40px;
  width: 100px;
  font-size: 14px;
}

.disabledButton {
  background-color: #d8d8d8;
}

.review-form {
  width: 400px;
  padding: 20px;
  margin: 40px;
  border: 1px solid #d8d8d8;
}

input {
  width: 100%;
  height: 25px;
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  height: 60px;
}

.tabs {
  margin-left: 20px;
  cursor: pointer;
}

.activeTab {
  color: #16c0b0;
  text-decoration: underline;
}
</style>
