<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    />

    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
      crossorigin="anonymous"
    />

    <header class="header-section">
      <div class="logo">
        <a href="./Fresheries.html"><i class="fas fa-shopping-basket"></i> </a>
        <span>
          <a href="./Fresheries.html">Fresheries</a>
          <br />
          <small>SUPER MARKET</small>
        </span>
        <br />
      </div>

      <nav class="navigation">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
        <router-link :to="{ name: 'SellerRegister' }">
          <button id="seller_page">Join as Seller</button>
        </router-link>
      </nav>
    </header>

    <section id="#" class="hero-section">
      <br />
      <img src="../assets/home-bg.jpg" alt="" />
      <div class="hero-content">
        <HeroContent name="Login" btnName="Buy Now" />
      </div>
    </section>

    <section id="about" class="about">
      <h1 class="heading">
        <span>A</span>
        <span>B</span>
        <span>O</span>
        <span>U</span>
        <span>T</span>
        <span id="space">&nbsp;</span>
        <span>U</span>
        <span>S</span>
      </h1>
      <div class="about_content">
        <div class="text_content">
          <p>
            Every person always wants to eat fresh and stay healthy that's the
            purpose we enter in this business. We always have focus on how to
            grow fresh vegetables and serve our customers best eatables.
          </p>
          <p>
            We offer classic deals with lowest prices and best quality products.
            Also, we take you to satisfy your hunger, we are then there for you
            at the time of your adrenaline cravings! So, get along with us and
            enjoy the best food you want!
          </p>
          <p>
            Our goal is to make you healthy and serve you fresh products for
            lifetime
          </p>
        </div>
        <div>
          <img src="../assets/aboutImg.jpg" alt="" />
        </div>
      </div>
    </section>

    <section id="services" class="services">
      <h1 class="heading">
        <span>S</span>
        <span>E</span>
        <span>R</span>
        <span>V</span>
        <span>I</span>
        <span>C</span>
        <span>E</span>
        <span>S</span>
      </h1>
      <br />
      <br />
      <div class="box-container">
        <BoxContainer
          imageUrl="credit-card-regular.svg"
          serviceName="No Cost EMI"
          description="0 Interest rate | 0 Processing fees"
        />

        <BoxContainer
          imageUrl="service-icon-2.svg"
          serviceName="Trusted and Nearby Sellers"
          description="Fresh and organic"
        />

        <BoxContainer
          imageUrl="telephone-icon.svg"
          serviceName="24/7 Customer Service"
          description="We Offer 24/7 Online Support"
        />
      </div>
    </section>
    <br /><br /><br />
    <section id="testimonials" class="testimonials">
      <h1 class="heading">
        <span>T</span>
        <span>E</span>
        <span>S</span>
        <span>T</span>
        <span>I</span>
        <span>M</span>
        <span>O</span>
        <span>N</span>
        <span>I</span>
        <span>A</span>
        <span>L</span>
      </h1>
      <br />
      <br /><br />
      <div class="testimonial-section">
        <div class="container">
          <div class="row testimonial-wrapper">
            <div class="col-lg-6 col-md-6 -mt-30">
              <div>
                <div class="info">
                  <div class="image">
                    <img src="../assets/test2.webp" alt="" />
                  </div>
                  <div class="text">
                    <h5>Ena Shah</h5>
                    <p>Teacher at Abc School</p>
                  </div>
                </div>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="content">
                  <p>
                    Thank you! It was a tasty and healthy vegetables! I love to
                    make dishes with fresh veggie's! Such a great experience
                    with a fantastic taste &amp; products quality.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-6 -mt-30">
              <div>
                <div class="info">
                  <div class="image">
                    <img src="../assets/test1.jpg" alt="" />
                  </div>
                  <div class="text">
                    <h5>John Doe</h5>
                    <p>Model</p>
                  </div>
                </div>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="content">
                  <p>
                    I had a restaurant where i'd love to serve fresh food to my
                    customers, Even our customers are always excited to order
                    salad which we serve always fresh &amp; healthy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <br /><br /><br />
    <section id="contact">
      <FooterSec />
    </section>
  </div>
</template>

<script>
import BoxContainer from "../components/BoxContainer.vue";
import HeroContent from "@/components/HeroContent.vue";
import FooterSec from "../components/FooterSec.vue";
export default {
  name: "FrontPage",
  components: { FooterSec, BoxContainer, HeroContent },
  mounted() {
    let user = localStorage.getItem("user-info");
    let seller = localStorage.getItem("seller-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
    if (seller) {
      this.$router.push({ name: "Dashboard" });
    }
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
  background: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
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

.header-section .navigation a {
  font-size: 1.3rem;
  color: #666;
  margin: 0 1rem;
  text-decoration: none;
}

.header-section .navigation a:hover {
  color: #4caf50;
}

.hero-section img {
  width: 98.6vw;
  height: 85vh;
  background-size: cover;
}

.hero-content {
  margin-top: -400px;
  margin-left: 9rem;
}

#seller_page {
  color: #4caf50;
  border: 1px solid #4caf50;
  height: 2.5rem;
  margin-left: 1rem;
  width: 9rem;
  background: #fff;
}

#seller_page:hover {
  color: #fff;
  background: #4caf50;
  border: 1px solid #fff;
  transition: 0.3s linear;
}

.about {
  padding: 7rem 10% 0;
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

#space {
  background-color: #fff;
}

.about_content {
  text-align: center;
  display: flex;
  margin-top: 4rem;
  justify-content: space-between;
  gap: 3rem;
}
.text_content {
  margin-top: 8rem;
  color: #4caf50;
  font-size: 1rem;
  font-weight: bold;
}
.about_content img {
  height: 80%;
}

.services .box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(1rem, 1fr));
  gap: 1rem;
}

.services {
  padding: 2rem 8%;
}

.testimonials {
  text-align: center;
}

.testimonial-section {
  text-align: center;
  display: flex;
  justify-content: space-between;
}
.info .image img {
  border-radius: 50%;
  border: 1px solid #4caf50;
}

.rating i {
  color: goldenrod;
}
</style>
