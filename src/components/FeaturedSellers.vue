<template>
  <section class="featured-sellers">
    <br />
    <br />
    <h1 class="title"><span>Featured Sellers</span></h1>

    <div class="box-container">
      <a href="#" class="box">
        <img
          src="@/assets/category_s/cat-1.png"
          alt="vegetable-featured-vendor"
        />
        <h3>Fizz Grocery</h3>
      </a>

      <a href="#" class="box">
        <img src="@/assets/category_s/cat-2.png" alt="fruits-featured-vendor" />
        <h3>ABC Grocery</h3>
      </a>

      <a href="#" class="box">
        <img src="@/assets/category_s/cat-3.png" alt="dairy-featured-vendor" />
        <h3>DEF Grocery</h3>
      </a>

      <a href="#" class="box">
        <img src="@/assets/category_s/cat-4.png" alt="other-featured-vendor" />
        <h3>Frizz Grocery</h3>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeaturedSellers",
};
</script>

<style scoped>
section {
  padding: 0 9%;
}
.featured-sellers .box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 1.5rem;
  padding: 4rem 0;
}

.featured-sellers .box-container a {
  text-decoration: none;
}

.featured-sellers .box-container .box {
  text-align: center;
}

.featured-sellers .box-container .box img {
  height: 10rem;
}

.featured-sellers .box-container .box:hover {
  transform: scale(1.1);
  transition: 0.3s linear;
}

.featured-sellers .box-container .box h3 {
  font-size: 2rem;
  margin: 1rem 0;
  color: #666;
}

.featured-sellers .box-container .box:hover h3 {
  color: #4caf50;
}

.featured-sellers {
  background: #f7f7f7;
  margin: 5em 0rem 0rem;
}

.featured-sellers .title {
  text-align: center;
  font-size: 2.5rem;
}

.featured-sellers .title span {
  color: #4caf50;
}
</style>
