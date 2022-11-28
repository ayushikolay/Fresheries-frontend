<template>
  <div class="box">
    <div class="seller">
      <img
        :src="product.image"
        alt=""
      />
      <div class="info">
        <h3>{{ product.choice["seller_name"] }}</h3>
        <span
          >Distance: <img src="@/assets/distance.png" />
          <span>{{ product.choice["distance"] }}</span
          >&nbsp;KM</span
        >
      </div>
    </div>
    <div class="other_info">
      <div class="price">
        Rs.{{ product.cost }}/- - {{ product.prev_cost }}/-
      </div>
      <div class="stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
        <div>{{ product.ratings }}</div>
      </div>
      <button class="btn" @click.prevent="addCart(product)">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SameProductCard",
  props: { product: Object },
  methods: {
    addCart(product) {
      this.$store.state.cart.push(product);
    },
  },
};
</script>

<style scoped>
.box {
  background: #fff;
  outline: 2px solid #4caf50;
  padding: 2rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
}

.box:hover {
  box-shadow: 10px 10px 10px #bac34e;
}

.info h3 {
  margin-top: -2rem;
  margin-bottom: 1rem;
}
h3 {
  color: #4caf50;
  padding-bottom: 1rem;
}
.box .seller {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.box .seller img {
  height: 12rem;
  width: 12rem;
}

.box .seller a {
  text-decoration: none;
  font-size: 2.2rem;
  color: #4caf50;
}

.box .seller span {
  font-size: 1.4rem;
  color: black;
}

.box .seller span img {
  height: 3rem;
  width: 3rem;
}

.box .seller span span {
  color: red;
}

.other_info {
  text-align: center;
}

.other_info .price {
  font-size: 1.4rem;
}

.other_info .stars i {
  color: #4caf50;
}
.box p {
  font-size: 1.4rem;
  color: #666;
  line-height: 2;
}

.other_info .btn {
  font-size: 1rem;
  text-decoration: none;
}

.btn {
  color: #fff;
  background-color: #4caf50;
  border: 1px solid #4caf50;
  height: 2.5rem;
  margin-left: 1rem;
  width: 8rem;
}

.btn:hover {
  color: #fff;
  background: #2b852e;
  border: 1px solid #4caf50;
  border: 1px solid #fff;
  transition: 0.3s linear;
}
</style>
