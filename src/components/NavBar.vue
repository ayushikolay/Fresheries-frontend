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
      <div class="logo">
        <a href="/"><i class="fas fa-shopping-basket"></i> </a>
        <span>
          <a href="/">Fresheries</a>
          <br />
          <small>SUPER MARKET</small>
        </span>
        <br />
      </div>

      <nav class="navigation">
        <router-link :to="{ name: 'Login' }" active-class="active"
          ><button id="signUpbtn">Sign In</button></router-link
        >

        <router-link :to="{ name: 'Register' }" active-class="active"
          ><button id="signUpbtn">Sign Up</button></router-link
        >
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "NavBar",
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
  padding: 0 5%;
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
</style>
