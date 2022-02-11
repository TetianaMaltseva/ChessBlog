<template>
<div class="my-window" v-if="show" @click="hideWindow">
  <div class="window-content">
    <slot></slot>
  </div>
</div>

</template>
<script>
export default {
  name: 'my-dialog',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideWindow () {
      this.$$emit('update:show', false)
    }
  }

}
</script>
<style>
.my-window{
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
.window-content{
  margin: auto;
  background: white;
  border-radius: 7px;
  min-width: 400px;
  min-height: 50px;
  padding: 30px;
  box-shadow: 0 0 10px #000;

}
</style>
