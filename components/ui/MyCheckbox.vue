<template>
  <div id="model-multiple-checkboxes" class="checkbox">
    <div v-for="item in options" :key="item">
      <input type="checkbox" :id="item" :value="item" v-model="checked" />
      <label :for="item">{{item}}</label>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      checked: ''
    }
  },
  props: {
    options: {
      type: Array
    },
    modelValue: {
      type: Boolean
    }
  },
  watch: {
    checked () {
      this.$emit('update:ModelValue', this.checked)
    },
    modelValue () {
      this.checked = this.modelValue
    }
  }
}
</script>

<style>
.checkbox {
  font-family: sans-serif;
  border-radius: 2px;
  margin-top: 1em;
  margin-bottom: 10px;
  user-select: none;
  overflow-x: auto;
}
</style>
