<template>
  <div class="box">
    <img :src="require('@/assets/' + imageUrl + '')" />
    <h3>{{ serviceName }}</h3>
    <p>{{ description }}</p>
  </div>
</template>
<script>
export default {
  name: "BoxContainer",
  props: {
    imageUrl: String,
    serviceName: String,
    description: String,
  },
};
</script>

<style scoped>
.box {
  padding: 3rem 2rem;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 1rem 1rem 1rem rgba(76, 175, 80, 0.3);
  outline: 0.1rem solid rgb(76, 175, 80);
  outline-offset: -1rem;
  text-align: center;
}

.box:hover {
  outline: 0.2rem solid #4caf50;
  outline-offset: 0rem;
}

.box img {
  margin: 1rem 0;
  height: 4rem;
  width: 4rem;
  color: #4caf50;
}

.box h3 {
  font-size: 1.7rem;
}

.box p {
  font-size: 1.2rem;
  color: #666;
}

.box a {
  text-decoration: none;
}
</style>
