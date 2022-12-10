<template>
  <div>
    <header class="header-section">
      <div class="logo">
        <a href="/dashboard"><i class="fas fa-shopping-basket"></i> </a>
        <span>
          <a href="/dashboard">Fresheries</a>
          <br />
          <small>SUPER MARKET</small>
        </span>
        <br />
      </div>

      <div class="profile-section">
        <button id="signUpbtn" @click="logout">Logout</button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "SellerNav",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "SellerLogin" });
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
  background: #1e283c;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 5%;
  opacity: 0.95;
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

#signUpbtn {
  color: #fff;
  border: 1px solid #4caf50;
  height: 2.5rem;
  margin-left: 1rem;
  width: 8rem;
  background: #4caf50;
}

#signUpbtn:hover {
  color: #fff;
  background: #2b852e;
  transition: 0.3s linear;
}
</style>
