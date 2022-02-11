<template>
<div class="v-btn">
  <button><slot></slot></button>
</div>
</template>

<script>
export default {

  methods: {
    Press () {
      this.$emit('click')
    }
  }
}
</script>

<style>
.v-btn{
  margin-top: 20px ;
   margin: 0 auto;
}
button{
  cursor: pointer;
  background:#fff;
  border: 1px solid #e6d00a;
  min-width: 128px;
  min-height: 30px;
  font-size: 14px;
  vertical-align: middle;
  color: #837002;
  box-shadow: 0 0 5px #e6d00a ;
}
button:hover{
  background: #f3e886;
}
</style>
