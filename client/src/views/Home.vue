<template>
  <div class="h-screen w-full flex items-center justify-center">
    <div class="w-1/2 h-5/6 flex items-center justify-center">
      <HomepageForm />
    </div>
    <div class="w-1/2 h-5/6 flex items-center justify-center">
      <img class="w-5/6 h-auto" src="/assets/images/homepage.jpg" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import HomepageForm from "@/components/homepage/HomepageForm.vue";
</script>
