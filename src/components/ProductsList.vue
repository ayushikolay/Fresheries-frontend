<template>
  <div>
    <div id="products">
      <div v-for="product in products" :key="product.id">
        <div class="card">
          <div class="image-container">
            <img :src="'https://fresheries-api.onrender.com/' + product.image" alt="product_img" />
            <span>{{ product.category }}</span>
          </div>
          <div class="container">
            <h5>{{ product.title.toUpperCase() }}</h5>
            <h6>Rs. {{ product.cost }}</h6>
            <button class="btn" @click.prevent="addCart(product)">
              <i class="fas fa-cart-plus mx-1"></i>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  props: ["products"],
  methods: {
    addCart(product) {
      console.log("pushing into the cart");
      console.log(product);
      console.log(this.$store);

      this.$store.state.cart.push(product);
    },
  },
};
</script>

<style scoped>
#products {
  margin: 5rem 10%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1.5em;
  padding: 2em 0;
}
.card {
  background: #fff;
  max-width: 19em;
  margin-top: 2.5rem;
  padding: 1em;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.9);
  outline: 0.1rem solid #4caf50;
  outline-offset: -1rem;
  border-radius: 5px;
}

.card:hover {
  outline: 0.2rem solid #4caf50;
  outline-offset: 0rem;
  transform: scale(1.1);
  cursor: pointer;
}
.image-container {
  text-align: center;
}
img {
  max-width: 100%;
  object-fit: contain;
  height: 15em;
}

img:hover {
  opacity: 0.7;
}
.container {
  padding-top: 1em;
  color: #110f29;
}
.container h5 {
  font-weight: 500;
}

.btn {
  border: 2px solid #4caf50;
  background-color: transparent;
  color: #4caf50;
  cursor: pointer;
}

.btn:hover {
  color: #fff;
  background-color: #4caf50;
}
</style>
