<template>
  <div>
    <span id="first_span">don't panic, go organic</span>
    <h1>
      Home Delivery
      <span
        >From<br />
        <div id="trusted_id">Trusted</div>
        Stores Near You</span
      >
    </h1>
    <p>
      We provide organic and fresh vegetables from your trusted
      sellers/vendors,<br />
      and give our customers best to eat products.
    </p>
    <br />
    <router-link :to="{ name: name }" id="accCreate">
      <button id="buyNow">{{ btnName }}</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HeroContent",
  props: {
    name: String,
    btnName: String,
  },
};
</script>

<style scoped>
#first_span {
  color: #4caf50;
  font-size: 1.5rem;
}

#trusted_id {
  color: #4caf50;
  animation: blinker 2s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}

#buyNow {
  color: #fff;
  border: 1px solid #fff;
  background: #4caf50;
  height: 3rem;
  width: 8rem;
}

#buyNow:hover {
  background: #2b852e;
  transition: 0.3s linear;
}
</style>
