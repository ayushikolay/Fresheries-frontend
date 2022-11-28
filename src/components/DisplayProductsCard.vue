<template>
  <div id="products">
    <div v-for="product in products" :key="product.id"></div>
  </div>
</template>

<script>
import API from "@/services/Api";
export default {
  name: "DisplayProductsCard",
  components: {},
  async created() {
    this.products = await API.getAllProduct();
    // for (let i of this.products) {
    //   let card = document.createElement("div");
    //   card.classList.add("card", i.category, "hide");

    //   let imgContainer = document.createElement("div");
    //   imgContainer.classList.add("image-container");

    //   let image = document.createElement("img");
    //   image.setAttribute("src", i.image);
    //   imgContainer.appendChild(image);
    //   card.appendChild(imgContainer);

    //   let container = document.createElement("div");
    //   container.classList.add("container");

    //   let name = document.createElement("h5");
    //   name.classList.add("product-name");
    //   name.innerText = i.title.toUpperCase();
    //   container.appendChild(name);
    //   let price = document.createElement("h6");
    //   price.innerText = "Rs. " + i.cost;
    //   container.appendChild(price);
    //   card.appendChild(container);
    //   document.getElementById("products").appendChild(card);
    // }
  },
};
</script>

<style scoped>
.active {
  background-color: #4caf50;
  color: #ffffff;
}
#products {
  margin: 5rem 10%;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 1.5em;
  padding: 2em 0;
}
.card {
  background: #f7f7f7;
  max-width: 18em;
  margin-top: 2rem;
  padding: 1em;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.9);
  outline: 0.1rem solid rgba(0, 0, 0, 0.4);
  outline-offset: -1rem;
  border-radius: 5px;
}

.card:hover {
  outline: 0.2rem solid #4caf50;
  outline-offset: 0rem;
  transform: scale(1.1);
  cursor: pointer;
}
.image-container {
  text-align: center;
}
img {
  max-width: 100%;
  object-fit: contain;
  height: 15em;
}

img:hover {
  opacity: 0.7;
}
.container {
  padding-top: 1em;
  color: #110f29;
}
.container h5 {
  font-weight: 500;
}
.hide {
  display: none;
}
</style>
