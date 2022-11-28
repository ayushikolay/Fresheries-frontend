<template>
  <div>
    <section class="products">
      <h1 class="heading">
        <span>T</span>
        <span>O</span>
        <span>P</span>
        <span id="space">&nbsp;</span>
        <span>S</span>
        <span>E</span>
        <span>L</span>
        <span>L</span>
        <span>E</span>
        <span>R</span>
        <span>S</span>
      </h1>
      <br />
      <br />
      <br />
      <div class="box-container">
        <div class="box">
          <div class="icons">
            <router-link
              :to="{ name: 'DisplayProducts' }"
              class="fas fa-shopping-cart"
            ></router-link>
          </div>
          <div class="image">
            <img src="@/assets/sellers/seller1.png" alt="" />
          </div>
          <div class="content">
            <h3>Fizz Category</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="icons">
            <router-link
              :to="{ name: 'DisplayProducts' }"
              class="fas fa-shopping-cart"
            ></router-link>
          </div>
          <div class="image">
            <img src="@/assets/sellers/seller5.png" alt="" />
          </div>
          <div class="content">
            <h3>ABC Grocery</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="icons">
            <router-link
              :to="{ name: 'DisplayProducts' }"
              class="fas fa-shopping-cart"
            ></router-link>
          </div>
          <div class="image">
            <img src="@/assets/sellers/seller3.png" alt="" />
          </div>
          <div class="content">
            <h3>DEF Grocery</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="icons">
            <router-link
              :to="{ name: 'DisplayProducts' }"
              class="fas fa-shopping-cart"
            ></router-link>
          </div>
          <div class="image">
            <img src="@/assets/sellers/seller4.jpg" alt="" />
          </div>
          <div class="content">
            <h3>Frizz Grocery</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "TopSellers",
};
</script>

<style scoped>
section {
  margin: 6rem 9%;
}
.heading {
  margin-top: 7rem;
  text-align: center;
}

.heading span {
  font-size: 1.5rem;
  background: #4caf50;
  color: #fff;
  gap: 1rem;
  padding: 0.2rem 1rem;
  border: 2px solid #fff;
}

.products .box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1.5rem;
}

.products .box-container .box {
  position: relative;
  background: #fff;
  text-align: center;
  overflow: hidden;
}

.products .box-container .box:hover .icons {
  top: 0;
}

.products .box-container .box .icons {
  position: absolute;
  top: -105%;
  left: 0;
  height: 25rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(243, 243, 243, 0.8);
  gap: 1rem;
}

.products .box-container .box .icons a {
  font-size: 2rem;
  height: 5rem;
  width: 5rem;
  line-height: 5rem;
  background: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  color: #666;
}

.products .box-container .box .icons a:hover {
  background: #4caf50;
  color: #fff;
}

.products .box-container .box .image {
  height: 25rem;
  width: 100%;
  overflow: hidden;
}

.products .box-container .box .image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.products .box-container .box .content {
  padding: 1.5rem;
}

.products .box-container .box .content h3 {
  font-size: 2rem;
  color: #222;
}

.products .box-container .box .content .price {
  font-size: 2rem;
  color: #222;
  padding: 1rem 0;
}

.products .box-container .box .content .stars i {
  font-size: 1.7rem;
  color: #4caf50;
}

#space {
  background: #fff;
}
</style>
