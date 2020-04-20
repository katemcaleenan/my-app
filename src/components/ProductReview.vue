<template>
  <div class="product-review">
    <form class="review-form" @submit.prevent="onSubmit">
      <h3>Add a review</h3>
      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
      </p>

      <p>
        <label for="review">Comment:</label>
        <textarea id="review" v-model="comment" required></textarea>
      </p>

      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>
      <button @click="addReview" type="submit" value="Submit">Submit</button>
    </form>
    <h6>Reviews</h6>
    <p v-if="!reviews.length">There are no reviews yet.</p>
    <ul>
      <li v-for="review in reviews">
        <p>{{ review.name }}</p>
        <p>{{ review.comment }}</p>
        <p>{{ review.rating }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      comment: null,
      rating: null,

      reviews: []
    }
  },
  methods: {
    addReview() {
      this.reviews.push({
        name: this.name,
        comment: this.comment,
        rating: this.rating
      }) //curly brackets make the object and 'this.' adds them into the array
      ;(this.name = null), (this.comment = null), (this.rating = null)
    }
  }
}
</script>

<style>
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
</style>
