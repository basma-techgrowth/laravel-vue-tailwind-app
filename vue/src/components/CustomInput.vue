
<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    isRoundedBtm: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <label :for="label" class="sr-only">{{ label }}</label>
  <input :value="modelValue" @input="$emit('update:modelValue',$event.target.value)" v-bind="$attrs"
    :class="[isRoundedBtm ? 'rounded-b-md' : 'rounded-t-md'
    , 'relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm']" />
</template>

