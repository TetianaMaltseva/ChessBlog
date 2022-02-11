<template>
  <section class="section-tour">
  <div class="container">
  <!--  <div class="dialog">
          <div v-for="post in postsArray"
     :key="post.id" class="">
     <div>{{post.title}}</div>
      <div>{{post.description}}</div>
     <router-link :to="`${post.id}`">Перейти</router-link>
    </div>
    </div>  -->
  </div>
</section>
</template>
<script>
export default {
  props: {
    tournamentArray: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>
.dialog{
  align-items: center;
  max-width: 1200px;
  min-height: 300px;
  background: #fff;
  margin: 0 auto;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 10px #000;
  position: relative;
  margin-bottom: 15px;
}
</style>
