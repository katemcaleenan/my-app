<template>
  <div class="product-cart">
    <button @click="addToCart" :disabled="!inStock">Add to cart</button>

    <div class="cart">
      <p>Cart({{ count }})</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    inStock: {
      type: Number
    }
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    addToCart() {
      this.count = this.count + 1
    }
  }
}
</script>

<style>
.product-cart {
  display: flex;
  justify-content: flex-end;
}

.cart {
  padding-top: 2px;
  padding-left: 10px;
  border: 2px solid;
  border-radius: 5px;
}

button {
  margin-top: 30px;
  border: none;
  background-color: #1e95ea;
  color: white;
  height: 40px;
  width: 100px;
  font-size: 14px;
  border-radius: 5px;
}

button[disabled] {
  background-color: #d8d8d8;
}
</style>
