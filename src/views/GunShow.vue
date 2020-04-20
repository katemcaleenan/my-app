<template>
  <div>
    <ProductDetails :active-product="activeProduct" :premium="premium"></ProductDetails>
    <ProductList :products="products" @product-hovered="onProductHovered"></ProductList>
    <AddToDo></AddToDo>
    <ProductCart :in-stock="activeProduct.quantity"></ProductCart>
    <ProductTabs></ProductTabs>
    <!-- <ProductReview @review-submitted="addReview"></ProductReview> -->
    <!-- <ProductReview @review-submitted="addReview"></ProductReview> -->
  </div>
</template>

 <script>
import ProductList from '@/components/ProductList.vue'
import ProductDetails from '@/components/ProductDetails.vue'
import ProductCart from '@/components/ProductCart.vue'
import AddToDo from '@/components/AddToDo.vue'
import ProductReview from '@/components/ProductReview.vue'
import ProductTabs from '@/components/ProductTabs.vue'
export default {
  data: function() {
    return {
      premium: true,
      activeProduct: null,
      products: [
        {
          id: 2234,
          titles: 'Red Devil',
          color: 'red',
          image: '/img/nerf-red.jpg',
          quantity: 10,
          details: ['40 Bullets', 'Max Power', 'Red']
        },
        {
          id: 2235,
          titles: 'Blue Blast',
          color: 'blue',
          image: '/img/nerf-blue.jpg',
          quantity: 0,
          details: ['Automatic', 'Fast', 'Blue']
        }
      ]
    }
  },
  components: {
    ProductList,
    ProductDetails,
    ProductCart,
    ProductReview,
    ProductTabs,
    AddToDo
  },
  methods: {
    onProductHovered(index) {
      this.activeProduct = this.products[index]
    }
  },
  created() {
    if (!this.activeProduct) {
      this.activeProduct = this.products[0]
    }
  }
}
</script>

 <style scoped>
</style>
