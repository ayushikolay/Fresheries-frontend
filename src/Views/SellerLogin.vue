<template>
  <div>
    <SellerNavBar />
    <div class="loginpage">
      <h1 class="heading">
        <span>S</span>
        <span>E</span>
        <span>L</span>
        <span>L</span>
        <span>E</span>
        <span>R</span>
        <span id="space">&nbsp;</span>
        <span>L</span>
        <span>O</span>
        <span>G</span>
        <span>I</span>
        <span>N</span>
      </h1>
      <div class="signup-box">
        <form @submit.prevent="onLogin()">
          <div class="error">{{ errors }}</div>
          <div class="section">
            <label for="email">Email ID</label>
            <input
              type="text"
              placeholder="Enter your email"
              v-model.trim="email"
              id="email"
            />
          </div>
          <div class="error">{{ errors.email }}</div>
          <div class="section">
            <label for="pass">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              v-model.trim="password"
              id="pass"
            />
          </div>
          <div class="error">{{ errors.password }}</div>

          <button type="submit" id="signBtn" class="button">SIGN IN</button>
          <br /><br />
        </form>
        <p>
          Create an account?
          <router-link :to="{ name: 'SellerRegister' }" id="accCreate">
            SIGN UP
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import SellerNavBar from "@/components/SellerNavBar.vue";
import axios from "axios";

export default {
  name: "SellerLogin",
  data() {
    return {
      email: "",
      password: "",
      errors: "",
    };
  },
  components: {
    SellerNavBar,
  },
  methods: {
    async onLogin() {
      let result = await axios.post("https://fresheries-api.onrender.com/api/sellerLogin", {
        email: this.email,
        password: this.password,
      });
      if (result.status == 201) {
        localStorage.setItem("seller-info", JSON.stringify(result.data));
        this.$router.push({ name: "Dashboard" });
      } else {
        this.errors = result.data;
      }
    },
  },
  mounted() {
    let seller = localStorage.getItem("seller-info");
    if (seller) {
      this.$router.push({ name: "Dashboard" });
    }
  },
};
</script>

<style scoped>
.loginpage {
  margin-top: 7rem;
  text-align: center;
  color: #4caf50;
  font-size: 1.25rem;
}

#accCreate {
  color: #2b852e;
}

#signBtn {
  margin-top: 2rem;
  color: #fff;
  background: #4caf50;
  border: 1px solid #fff;
  height: 2.5rem;
  width: 8rem;
}

#signBtn:hover {
  background: #2b852e;
  transition: 0.3s linear;
}

#space {
  background: #fff;
}
.heading {
  text-align: center;
}
.heading span {
  font-size: 2rem;
  background: #bac34e;
  color: #fff;
  gap: 1rem;
  padding: 0.2rem 1rem;
}
.signup-box {
  width: 500px;
  height: 30rem;
  padding: 55px 40px 90px 50px;
  margin-top: 20px;
  margin-left: 0px;
  margin-bottom: 50px;
  background-color: rgba(#fff, 0.9);
  border: 2px solid #bac34e;
  border-radius: 3px;
  color: black;
  z-index: 1;
  display: inline-block;
  position: relative;
  text-align: center;
  box-shadow: 10px 10px 10px #bac34e;
}

.section {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 1rem;
}

input {
  color: black;
}

.error {
  color: red;
  font-size: 1rem;
}

.signup-box a {
  text-decoration: none;
  font-size: 1.4rem;
  color: #2b852e;
}

.signup-box button {
  font-size: 1rem;
}

.heading {
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
</style>
