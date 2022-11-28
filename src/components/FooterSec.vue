<template>
  <div>
    <footer class="footer" id="footer">
      <div class="box-container">
        <div class="box">
          <h3>Fresheries <i class="fas fa-shopping-basket"></i></h3>
          <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
          </div>
        </div>

        <div class="box">
          <h3>contact info</h3>
          <a href="tel:123-456-789" class="links"> +123-456-7890 </a>
          <a href="mailto:fresheries@xyz.com" class="links"> fresh@xyz.com </a>
        </div>

        <div class="box">
          <h3>quick links</h3>
          <a href="#" class="links">
            <i class="fas fa-arrow-right"></i> home
          </a>
          <a href="#about" class="links">
            <i class="fas fa-arrow-right"></i> about
          </a>
          <a href="#services" class="links">
            <i class="fas fa-arrow-right"></i> services
          </a>
          <a href="#testimonials" class="links">
            <i class="fas fa-arrow-right"></i> testimonials
          </a>
        </div>

        <div class="box">
          <h3>Newsletter</h3>
          <p>subscribe for latest updates</p>
          <input type="email" placeholder="your email" class="email" />
          <input type="submit" value="subscribe" class="btn" />
          <img src="../assets/payment.png" class="payment-img" alt="" />
        </div>
      </div>

      <div class="credit">
        &copy; <span> Fresheries Super Market </span> | All rights reserved
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterSec",
};
</script>

<style scoped>
.footer {
  background: black;
  color: #4caf50;
  border-top: 4px solid #4caf50;
}

/* .footer a {
  color: #fff;
} */

.footer .box-container {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
}

.footer .box-container .box h3 {
  font-size: 2.5rem;
  color: #4caf50;
  padding: 1rem 0;
}

.footer .box-container .box h3 i {
  color: #4caf50;
}

.footer .box-container .box .links {
  display: block;
  font-size: 1.5rem;
  color: #666;
  padding: 1rem 0;
  text-decoration: none;
}

.footer .box-container .box .links i {
  color: #4caf50;
  padding-right: 0.5rem;
}

.footer .box-container .box p {
  font-size: 1.5rem;
  color: #666;
  padding: 1rem 0;
}

.footer .box-container .box .share a {
  height: 4rem;
  width: 4rem;
  line-height: 4rem;
  border-radius: 0.5rem;
  font-size: 2rem;
  color: #4caf50;
  text-decoration: none;
  margin-right: 0.2rem;
  background: #eee;
  text-align: center;
}

.footer .box-container .box .share a:hover {
  background: #4caf50;
  color: #fff;
}

.footer .box-container .box .email {
  width: 70%;
  margin: 0.7rem 0;
  padding: 1rem;
  border-radius: 0.5rem;
  background: #eee;
  font-size: 1rem;
  color: #130f40;
  text-transform: none;
}

.footer .box-container .box .btn {
  width: 70%;
  margin: 0.7rem 0;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #4caf50;
  display: inline-block;
  padding: 0.8rem 3rem;
  border: 0.2rem solid #4caf50;
  cursor: pointer;
  background: none;
}

.footer .box-container .box .btn:hover {
  background: #4caf50;
  color: #fff;
}

.footer .box-container .box .payment-img {
  margin-top: 1rem;
  height: 2rem;
  display: block;
}

.footer .credit {
  text-align: center;
  margin-top: 2rem;
  padding: 1rem;
  padding-top: 2.5rem;
  font-size: 2rem;
  color: #fff;
  border-top: 0.2rem solid rgba(0, 0, 0, 0.1);
}

.footer .credit span {
  color: #4caf50;
}

/* .footer .box a i {
  color: #fff;
} */
</style>
