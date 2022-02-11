<template>
  <div id="v-model-basic" class="form-group">
     <label for="input">{{label}}</label>
     <input
            :type="type"
            :id="id"
            :placeholder="placeholder"
            v-model="inputValue"
            />
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputValue: ''
    }
  },
  props: {
    modelValue: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: ''
    }
  },
  watch: {
    modelValue: {
      handler () {
        this.inputValue = this.modelValue
      },
      immediate: true
    },
    inputValue: {
      handler () {
        this.$emit('update:modelValue', this.inputValue)
      }
    }
  }
}
</script>

<style>
.form-group{
  display: flex;
  flex-direction: column;
  margin: 3px;
}
h1{
  text-align: center;
  font-size: 20px;
  margin: 0 auto;
  padding-bottom: 25px;
}
label {
  font-size: 20px;
}
input{
 max-width: 100%x;
 min-height: 40px;
}
</style>
