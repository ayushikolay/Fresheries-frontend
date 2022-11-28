<template>
  <aside>
    <div class="logo"></div>

    <div class="menu">
      <router-link to="/dashboard" class="button">
        <span class="material-icons">Home</span>
        <span class="text">Home</span>
      </router-link>
      <router-link to="/dashboard/create-product" class="button">
        <span class="material-icons">Create Product</span>
        <span class="text">Create Product</span>
      </router-link>
    </div>

    <div class="flex"></div>
  </aside>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style scoped>
aside {
  display: flex;
  flex-direction: column;
  background-color: #1e283c;
  color: #fff;
  width: 19rem;
  min-height: 100%;
  height: 100vh;
  padding-left: 1.5rem;
  padding-top: 5rem;
  padding-bottom: 2rem;
  transition: 0.2s ease-in-out;
  opacity: 0.95;
}
.flex {
  flex: 1 1 0%;
}
.logo {
  margin-bottom: 1rem;
}

.button .text {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.button {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  padding: 1rem 2rem;
}
.material-icons {
  font-size: 1rem;
  color: #fff;
  transition: 0.2s ease-in-out;
}
.text {
  color: #fff;
  transition: 0.2s ease-in-out;
}

.menu .router-link-exact-active {
  background-color: #1e2952;
}
</style>
