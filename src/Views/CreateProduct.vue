<template>
  <div id="parent">
    <div>
      <SellerNav />
      <SideBar />
    </div>
    <div>
      <form :ref="formData" @submit.prevent="onSubmit">
        <h1>Create New Product</h1>
        {{ this.image }}

        <div v-if="error">{{ error }}</div>
        <div class="form-row">
          <div class="col">
            <label for="title">Product Name</label>
            <input
              type="text"
              class="form-control"
              id="title"
              v-model="formData.title"
              placeholder="Product name"
              :rules="rules"
            />
          </div>
          <div class="col">
            <label for="category">Category</label>
            <select
              id="category"
              class="form-control"
              v-model="formData.category"
              :rules="rules"
            >
              <option selected hidden>Choose...</option>
              <option value="vegetables">vegetables</option>
              <option value="fruits">fruits</option>
              <option value="dairy">dairy</option>
            </select>
          </div>
          <br />
        </div>
        <div class="form-group">
          <label for="image">Upload Product Image &nbsp;</label>
          <input
            type="file"
            @change="selectFile"
            class="form-control-file"
            id="image"
            :rules="rules"
          />
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="cost">Cost</label>
            <input
              type="number"
              class="form-control"
              v-model="formData.cost"
              :rules="rules"
              id="cost"
            />
          </div>
          <div class="form-group col-md-4">
            <label for="prev_cost">Previous Cost</label>
            <input
              type="number"
              id="prev_cost"
              v-model="formData.prev_cost"
              :rules="rules"
              class="form-control"
            />
          </div>

          <div class="form-group col-md-2">
            <label for="choice[distance]">Distance</label>
            <input
              type="number"
              class="form-control"
              id="choice.distance"
              step="any"
              :rules="rules"
              v-model="formData.choice.distance"
            />
          </div>
          <br />
          <button type="submit" id="signUpbtn" class="btn">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import SellerNav from "../components/SellerNav.vue";
import SideBar from "../Views/SideBar.vue";
import swal from "sweetalert2";
import API from "../services/Api";
export default {
  name: "CreateProduct",
  data() {
    return {
      formData: {
        title: "",
        category: "",
        image: null,
        stock: "Available(In Stock)",
        discount: 6,
        cost: null,
        prev_cost: null,
        ratings: 4,
        location: "Agra, Uttar Pradesh",
        choice: {
          seller_name: "",
          distance: null,
        },
      },
      image: "",
      rules: [(value) => !!value || "This field is required"],
      error: "",
    };
  },
  mounted() {
    let seller = localStorage.getItem("seller-info");
    if (!seller) {
      this.$router.push({ name: "SellerLogin" });
    }
    let sellername = JSON.parse(localStorage.getItem("seller-info")).shopName;
    this.formData.choice.seller_name = sellername;
  },
  components: {
    SellerNav,
    SideBar,
  },
  methods: {
    selectFile(event) {
      this.image = event.target.files[0];
    },
    async onSubmit() {
      const fd = new FormData();
      fd.append("title", this.formData.title);
      fd.append("category", this.formData.category);
      fd.append("image", this.image);
      fd.append("stock", this.formData.stock);
      fd.append("discount", this.formData.discount);
      fd.append("cost", this.formData.cost);
      fd.append("prev_cost", this.formData.prev_cost);
      fd.append("ratings", this.formData.ratings);
      fd.append("location", this.formData.location);
      fd.append("choice.seller_name", this.formData.choice.seller_name);
      fd.append("choice.distance", this.formData.choice.distance);

      const response = await API.addProduct(fd);
      swal.fire("Success", response.message, "success");
      this.$router.push({
        name: "Dashboard",
        params: { message: response.message },
      });
    },
  },
};
</script>

<style scoped>
form {
  margin-top: 6rem;
  margin-left: 3rem;
  width: 40rem;
}

h1 {
  color: #4caf50;
  text-align: center;
  margin-left: 10rem;
}
#parent {
  display: flex;
}

#signUpbtn {
  color: #fff;
  border: 1px solid #4caf50;
  height: 2.5rem;
  width: 8rem;
  background: #4caf50;
}

#signUpbtn:hover {
  color: #fff;
  background: #2b852e;
  transition: 0.3s linear;
}
</style>
