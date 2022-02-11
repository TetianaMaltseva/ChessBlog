<template>
  <footer class="footer">
    <div class="menu-footer">
      <nav>
        <div class="home">
          <router-link class="home" to="/">Головна</router-link>
        </div>
        <div class="home">
          <router-link class="home" to="/tournaments">Турнири</router-link>
        </div>
          <div class="home">
            <router-link class="home" to="/createtour">Створити турнир</router-link>
        </div>
        <div class="home">
          <router-link class="home" to="/beginner">Початківці</router-link>
        </div>
        <div class="home">
            <router-link class="home" to="/experienced">Досвідчені</router-link>
        </div>
      </nav>
    </div>
    <div class="footer-logo">
      <a href="/"><img src="img/icons/images/logo-bg.png"></a>
    </div>
    <div class="social-footer">
      <div class="social">
      <a href="#"><img src="img/icons/images/footer-facebook.png"></a>
      </div>
      <div class="social">
       <a href="#"><img src="img/icons/images/footer-instagram.png"></a>
      </div>
      <div class="social">
        <a href="#"><img src="img/icons/images/footer-twitter.png"></a>
      </div>
      <div class="social">
         <a href="#"><img src="img/icons/images/footer-vk.png"></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer{
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background:#f7ce55;
  min-height: 200px;
}
.footer-logo{
  display: flex;
  align-content: center;
  justify-content: center;
  max-width: 300px;
  max-height: 200px;
  flex-wrap: wrap;
}
.social-footer{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.social{
  padding-bottom: 8px;
  padding-top: 8px;
}
.home{
  margin-bottom: 10px;
  font-size: 16px;
}
a{
  text-decoration: none;
  color: #2c2803;
}
a:hover{
  color:#e6d00a ;
}
</style>
