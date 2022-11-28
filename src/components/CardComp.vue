<template>
  <div class="box">
    <img :src="require('@/assets/' + imageUrl + '')" />
    <h3>{{ serviceName }}</h3>
    <p>{{ description }}</p>
    <a href="#" class="btn">{{ btnName }}</a>
  </div>
</template>
<script>
export default {
  name: "CardComp",
  props: {
    imageUrl: String,
    serviceName: String,
    description: String,
    btnName: String,
  },
};
</script>

<style scoped>
.box {
  padding: 3rem 2rem;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
  outline: 0.1rem solid rgba(0, 0, 0, 0.1);
  outline-offset: -1rem;
  text-align: center;
}
.box:hover {
  outline: 0.2rem solid #4caf50;
  outline-offset: 0rem;
}

.box img {
  margin: 1rem 0;
  height: 15rem;
}

.heading {
  text-align: center;
}
.heading span {
  font-size: 2rem;
  background: #4caf50;
  color: #fff;
  gap: 1rem;
  padding: 0.2rem 1rem;
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

.btn {
  margin-top: 0.5rem;
  display: inline-block;
  padding: 0.8rem 3rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  border: 0.2rem solid #4caf50;
  color: #4caf50;
  cursor: pointer;
  background: none;
}

.btn:hover {
  background: #4caf50;
  color: #fff;
  border: 0.2rem solid #fff;
}
</style>
