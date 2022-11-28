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
        <span>R</span>
        <span>E</span>
        <span>G</span>
        <span>I</span>
        <span>S</span>
        <span>T</span>
        <span>E</span>
        <span>R</span>
      </h1>
      <div class="signup-box">
        <form method="POST" @submit.prevent="onSignUp()">
          <div class="error" id="err">{{ error }}</div>
          <div class="section">
            <label for="name">Owner Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              id="name"
              v-model.trim="name"
            />
          </div>
          <div class="section">
            <label for="shopName">Shop Name</label>
            <input
              type="text"
              placeholder="Enter your shop name"
              id="shopName"
              v-model.trim="shopName"
            />
          </div>
          <div class="error">{{ errors.name }}</div>
          <div class="section">
            <label for="email">Email ID</label>
            <input
              type="text"
              placeholder="Enter your email"
              id="email"
              v-model.trim="email"
            />
          </div>
          <div class="error">{{ errors.email }}</div>
          <div class="section">
            <label for="pass">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              id="pass"
              v-model.trim="password"
            />
          </div>
          <div class="error">{{ errors.password }}</div>
          <div class="section">
            <label for="repass">Confirm Password</label>

            <input
              type="password"
              placeholder="Re-enter your password"
              id="repass"
              v-model.trim="cpassword"
            />
          </div>
          <div class="error">{{ errors.cpassword }}</div>
          <div>
            <button type="submit" id="signBtn" class="button">SIGN UP</button>
          </div>
          <br /><br />
        </form>

        <p>
          *By registering,you agree to our <br />
          <a href="#" style="color: grey">Terms and Condition</a> and
          <a href="#" style="color: grey">Policy Privacy</a>
        </p>
        <p>
          Already have an account?
          <router-link :to="{ name: 'SellerLogin' }" id="accCreate">
            SIGN IN
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import swal from "sweetalert2";
import SellerNavBar from "@/components/SellerNavBar.vue";
// import SignupValidations from "../services/SignupValidations";

export default {
  name: "SellerRegister",
  components: {
    SellerNavBar,
  },
  data() {
    return {
      name: "",
      shopName: "",
      email: "",
      password: "",
      cpassword: "",
      errors: [],
      error: "",
    };
  },
  methods: {
    async onSignUp() {
      let result = await axios.post("http://localhost:5000/api/sellerSignUp", {
        name: this.name,
        shopName: this.shopName,
        email: this.email,
        password: this.password,
        cpassword: this.cpassword,
      });
      // const result = await Response.json(0);
      console.log(result);
      if (result.status == 201 && !this.errors.length) {
        // alert("User signup successful");
        localStorage.setItem("seller-info", JSON.stringify(result.data));
        this.$router.push({ name: "Dashboard" });
      } else {
        this.error = result.data;
        // alert("signup failed");
      }
    },
    //   onSignUp: async function () {
    //     const form = event.target;
    //     const formData = new FormData(form);
    //     let validations = new SignupValidations(
    //       this.email,
    //       this.password,
    //       this.name,
    //       this.cpassword
    //     );
    //     this.errors = validations.checkSignupValidations();
    //     if (
    //       "email " in this.errors ||
    //       "password" in this.errors ||
    //       "name" in this.errors ||
    //       "cpassword" in this.errors
    //     ) {
    //       console.log(this.errors);
    //       return false;
    //     }
    //     // const response = await Axios.post(this.$apiURL + "/register", formData);
    //     // swal.fire("Success", response.data.message, "success");
    //     // if (response.data.status == "success") {
    //     //   form.reset();
    //     // }
    //   },
    // },
    mounted() {
      let seller = localStorage.getItem("seller-info");
      if (seller) {
        this.$router.push({ name: "Dashboard" });
      }
    },
  },
};
</script>

<style scoped>
.loginpage {
  margin-top: 5rem;
  text-align: center;
  color: #4caf50;
  font-size: 1rem;
}

#signBtn {
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

#accCreate {
  color: #2b852e;
}
.signup-box {
  width: 500px;
  /* height: 420px; */
  padding: 55px 40px 90px 50px;
  margin-top: 20px;
  margin-left: 0px;
  margin-bottom: 70px;
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
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: 2rem;
}

input {
  /* background-color: rgb(23, 23, 23); */
  color: black;
}

.error {
  color: red;
  font-size: 0.8rem;
  text-align: right;
}

#err {
  color: red;
  font-size: 0.8rem;
  text-align: center;
}
.signup-box a {
  text-decoration: none;
  font-size: 1.4rem;
  color: #bac34e;
}

.signup-box button {
  font-size: 1rem;
}

.signup-box button:hover {
  background: #bac34e;
  color: white;
}

#sell_btn {
  height: 3rem;
  width: 7rem;
  color: #fff;
  background-color: #bac34e;
  border: #747c16;
  font-size: 1rem;
}

#sell_btn:hover {
  background-color: #868f24;
  cursor: pointer;
}

#space {
  background: #fff;
}
.heading {
  /* margin-top: 9rem; */
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
