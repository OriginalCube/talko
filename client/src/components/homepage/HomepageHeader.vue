<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps({
  hasAccount: Boolean,
});
</script>

<template>
  <div class="h-20 flex items-center justify-between w-5/6">
    <div class="flex items-center justify-center gap-4">
      <Icon icon="ic:round-spa" width="24" />
      <p class="text-2xl">Talko</p>
    </div>
    <p class="text-md" v-if="props.hasAccount">
      Do you have an account?
      <span
        class="text-blue-500 cursor-pointer"
        @click="$emit('handleForm', false)"
        >create now.</span
      >
    </p>
    <p class="text-md" v-if="!props.hasAccount">
      Already have an account?
      <span
        class="text-blue-500 cursor-pointer"
        @click="$emit('handleForm', true)"
        >login now.</span
      >
    </p>
  </div>
</template>
