<template>
  <div>
    <div id="search-container">
      <input
        id="search-input"
        v-model="term"
        placeholder="Search product name here.."
        @keypress.enter="search(term)"
      />
      <button id="search">Search</button>
    </div>

    <div id="buttons">
      <button
        class="button-value"
        v-for="filter in filters"
        :key="filter"
        @click="() => filterPosts(filter)"
      >
        {{ filter }}
      </button>
    </div>
  </div>
</template>

<script>
const filters = ["all", "fruits", "vegetables", "dairy"];
export default {
  props: ["filterPosts", "search", "filteredPosts"],
  data() {
    return {
      filters,
      term: "",
    };
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: none;
  outline: none;
  font-family: "Poppins", sans-serif;
}

.wrapper {
  width: 95%;
  margin: 0 auto;
  text-align: center;
}

.wrapper .buttons {
  text-align: center;
}
.button-value {
  margin-top: 2rem;
  margin-right: 0.5rem;
  border: 2px solid #4caf50;
  padding: 0.5em 2.2em;
  border-radius: 3em;
  background-color: transparent;
  color: #4caf50;
  cursor: pointer;
}

#search-container {
  margin: 1em 0;
  text-align: center;
  margin-top: 5rem;
}
#search-container input {
  background-color: transparent;
  width: 40%;
  border-bottom: 2px solid #110f29;
  padding: 1em 0.3em;
}
#search-container input:focus {
  border-bottom-color: #4caf50;
}
#search-container button {
  padding: 0.5em 2em;
  margin-left: 1em;
  background-color: #4caf50;
  color: #ffffff;
  border-radius: 5px;
  margin-top: 0.5em;
}
</style>
