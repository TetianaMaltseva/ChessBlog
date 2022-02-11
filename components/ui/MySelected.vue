<template>    MY_SELECT
<select v-model="modelValue" @change="changeOption">
<option disabled value="">Виберіть зі списку</option>
<option
  v-for="option in options"
  :key="option.value"
  :value="option">
  {{option.name}}
</option>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption (option) {
      this.$emit('update:modelValue', option)
    }
  }
}
</script>

