<template>
  <div id="v-model-radiobutton" class="radiobtn">
    <div v-for="item in options" :key="item">
      <input type="radio" :id="item" :value="item" v-model="picked" />
      <label :for="item">{{item}}</label>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      picked: ''
    }
  },
  props: {
    options: {
      type: Array
    },
    modelValue: {
      type: String
    }
  },
  watch: {
    picked () {
      this.$emit('update:modelValue', this.picked)
    }
  },
  modelValue () {
    this.picked = this.modelValue
  }
}
</script>

<style>
.radiobtn {
  font-family: sans-serif;
  border-radius: 2px;
  margin-top: 1em;
  margin-bottom: 10px;
  user-select: none;
}
</style>
