<script setup lang="ts">
import { ref } from "vue";
import RegisterForm from "@/components/homepage/RegisterForm.vue";
import HomepageHeader from "@/components/homepage/HomepageHeader.vue";
import LoginForm from "@/components/homepage/LoginForm.vue";

const hasAccount = ref(false);

const handleSubmit = () => {};

const handleForm = (e: boolean) => {
  console.log("recieved");
  hasAccount.value = e;
};

defineEmits(["handleForm"]);
</script>

<template>
  <div class="w-4/6 h-full flex flex-col items-center justify-center">
    <HomepageHeader :hasAccount="hasAccount" @handleForm="handleForm" />
    <RegisterForm v-if="!hasAccount" />
    <LoginForm v-if="hasAccount" />
  </div>
</template>
