<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    />

    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
      crossorigin="anonymous"
    />
    <header class="header-section">
      <router-link :to="{ name: 'Home' }">
        <div class="logo">
          <a href=""><i class="fas fa-shopping-basket"></i> </a>
          <span>
            <a href="">Fresheries</a>
            <br />
            <small>SUPER MARKET</small>
          </span>
          <br />
        </div>
      </router-link>

      <div class="search-section">
        <input
          type="search"
          placeholder="Select your location"
          id="search-box"
        />
        <label for="search-box" class="fas fa-location"></label>
      </div>
      <nav class="navigation">
        <a href="/home">Home</a>
        <a href="/home#features">Features</a>
        <a href="/home#categories">Categories</a>
        <a href="/home#products">Products</a>
        <a href="/home#contact">Contact</a>
      </nav>

      <div class="wishlist" title="Wishlist">
        <a href="" class="fas fa-heart"></a>
      </div>

      <div class="cart-section">
        <a href="" class="fas fa-shopping-cart"> </a>
        <div id="cardItem">{{ $store.state.cart.length }}</div>
      </div>

      <div class="profile-section">
        <button id="signUpbtn" @click="logout">Logout</button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style scoped>
.header-section {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 5%;
}

.header-section .logo a i {
  font-size: 2.5rem;
  font-weight: bolder;
  color: #4caf50;
  text-decoration: none;
}

.header-section .logo span {
  font-size: 1rem;
  color: #4caf50;
}

.header-section .search-section {
  background: #fff;
  padding: 0px 5px;
}
.header-section .search-section input {
  padding: 0 1.2rem;
  font-size: 1.1rem;
  color: #222;
  outline: none;
  border: 2px solid;
  border-top: none;
  border-left: none;
  border-right: none;
  background: #fff;
  text-transform: none;
}

.header-section .search-section label {
  font-size: 1.2rem;
  margin-right: 1.4rem;
  cursor: pointer;
  color: #666;
}
.header-section .logo span a {
  font-size: 1.5rem;
  text-decoration: none;
  color: #4caf50;
}

.header-section .navigation a {
  font-size: 1.3rem;
  color: #666;
  margin: 0 1rem;
  text-decoration: none;
}

.header-section .wishlist a {
  font-size: 1.8rem;
  color: #4caf50;
  text-decoration: none;
}

.header-section .wishlist a:hover {
  color: #2b852e;
}

.header-section .profile-section a {
  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: space-between;
  background: #f7f7f7;
  text-decoration: none;
  color: black;
}

.header-section .navigation a {
  font-size: 1.3rem;
  color: #666;
  margin: 0 1rem;
  text-decoration: none;
}

.header-section .navigation a:hover {
  color: #4caf50;
}

.header-section .cart-section {
  display: flex;
  color: #4caf50;
}

.header-section .cart-section a {
  text-decoration: none;
  font-size: 1.4rem;
  color: #4caf50;
}

.header-section .cart-section a:hover {
  color: #2b852e;
}

.header-section .profile-section img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
}
.header-section .navigation a:hover {
  color: #4caf50;
}

#signUpbtn {
  color: #4caf50;
  border: 1px solid #4caf50;
  height: 2.5rem;
  margin-left: 1rem;
  width: 8rem;
  background: #fff;
}

#signUpbtn:hover {
  color: #fff;
  background: #4caf50;
  border: 1px solid #fff;
  transition: 0.3s linear;
}

/* #signUpbtn:active {
  color: #fff;
  background: #4caf50;
  border: 1px solid #fff;
  transition: 0.3s linear;
} */

.active #signUpbtn {
  color: #fff;
  background: #4caf50;
  border: 1px solid #fff;
}
#cardItem {
  font-size: 1rem;
}
</style>
