<template>
  <div class="product-item">
    <router-link
      :to="{ name: 'view-product', params: { title: title } }"
      class="product-img"
    >
      <img
        :src="require('../../../server/uploads/' + image + '')"
        alt="product_img"
      />
      <div class="product-absolute-options">
        <span class="offer-badge-1">{{ discount }}% OFF</span>
        <span class="like-icon" title="wishlist"></span>
      </div>
    </router-link>
    <div class="product-text-dt">
      <p>{{ stock }}</p>
      <h4>{{ title }}</h4>
      <div class="product-price">
        RS.{{ cost }}<span>Rs.{{ prev_cost }}</span>
      </div>
      <div class="qty-cart">
        <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
        <span class="cart-icon"><i class="fas fa-shopping-cart"></i></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductComp",
  props: {
    _id: String,
    image: String,
    title: String,
    stock: String,
    discount: Number,
    ratings: Number,
    cost: Number,
    prev_cost: Number,
  },
};
</script>

<style scoped>
.product-item {
  outline: 1px solid #4caf50;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
  width: 15rem;
  display: block;
  background: #fff;
  border-radius: 3px;
  text-align: center;
  padding: 15px;
}

.product-item:hover {
  outline: 1px solid #4caf50;
}

.product-img {
  width: 12rem;
  position: relative;
  padding: 10px 20px;
  display: block;
}

.product-img img {
  width: 100%;
  transition: transform 0.5s ease;
}

.product-item:hover img {
  transform: scale(1.1);
}

.offer-badge-1 {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  background: #4caf50;
  padding: 3px 10px;
  border-radius: 3px;
  line-height: 20px;
  text-transform: uppercase;
}

.product-text-dt p {
  font-size: 12px;
  font-weight: 500;
  color: #8f91ac;
  margin-bottom: 0;
  line-height: 24px;
}

.product-text-dt p span {
  margin-left: 5px;
}

.product-text-dt h4 {
  margin-top: 0;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px !important;
  line-height: 24px;
  text-align: center;
  color: #2b2f4c;
}

.product-price {
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: #4caf50;
  text-align: center;
}

.product-price span {
  color: #c7c7c7;
  text-decoration: line-through;
  margin-left: 10px;
  font-weight: 600;
}

.products .product-text-dt .qty-cart .stars i {
  font-size: 1rem;
  color: #4caf50;
  padding: 0.5rem 0;
}

.qty-cart {
  display: flex;
  align-items: center;
  margin-top: 17px;
}

.qty-cart .input-text {
  outline: none;
  border: none;
  width: 60px;
}
.cart-icon {
  margin-left: auto;
  font-size: 20px;
  color: #c7c7c7;
  cursor: pointer;
}

.cart-icon:hover {
  color: #4caf50;
}

span.like-icon {
  color: #4caf50;
  font-size: 18px;
  position: absolute;
  z-index: 101;
  right: 0;
  top: 0;
  cursor: pointer;
  background-color: rgba(155, 240, 44, 0.2);
  display: block;
  height: 35px;
  width: 35px;
  line-height: 37px;
  border-radius: 30px;
  transition: all 0.4s;
}

.like-icon:before,
.like-icon:after {
  transition: opacity 0.3s, transform 0.4s cubic-bezier(0, -0.41, 0.19, 2.5);
  font-family: "Font Awesome 5 Free";
  position: absolute;
  right: 0;
  left: 0;
  text-align: center;
  top: 0px;
}

.like-icon:before {
  content: "\f004";
  transform: scale(0.95);
}

.like-icon:after {
  content: "\f004";
  opacity: 0;
  transform: scale(0.3);
  font-weight: 900;
}

.like-icon.liked:after {
  opacity: 1;
  transform: scale(0.95);
}

.like-icon:hover,
.like-icon.liked {
  background-color: #4caf50;
  color: #fff;
}

.like-icon.liked:before {
  opacity: 0;
}
</style>
