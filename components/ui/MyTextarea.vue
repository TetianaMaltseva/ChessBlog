<template>
  <div id="v-model-basic" class="form-group">
     <label for="textarea">{{label}}</label>
     <textarea v-model="textareaValue"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      textareaValue: ''
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
        this.textareaValue = this.modelValue
      },
      immediate: true
    },
    textareaValue: {
      handler () {
        this.$emit('update:modelValue', this.textareaValue)
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
  margin: 0 auto;
  padding-bottom: 25px;
}
label {
  margin: 5px;
  font-size: 18px;
}
textarea{
 max-width: 100%;
 min-height: 120px;
 box-shadow: 0 0 10px #302b01 ;
}
</style>
