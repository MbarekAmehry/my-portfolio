<template>
  <div class="relative">
    <!-- Dropdown toggle button -->
    <button
      class="flex items-center p-2 rounded-sm"
      @blur="show = false"
      @click="show = !show"
    >
      <slot name="head" />
    </button>

    <!-- Dropdown menu -->
    <div
      v-show="show"
      class="absolute right-0 p-2 mt-2 bg-white text-gray-800 rounded-md border z-10 w-44"
    >
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'DropdownCustom',
  data () {
    return {
      show: false
    }
  }
}
</script>
