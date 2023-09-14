<script setup lang="ts">
import { ref } from "vue";
import { useUsers } from "@/composables/useUsers";
import router from "@/router";

const userDetails = ref({
  username: "",
  password: "",
});

const err = ref("");

const handleSubmit = async () => {
  const handleLogin = await useUsers().login(userDetails.value);
  if (handleLogin.status === 200) {
    //navigate to different page
    router.push("/homepage");
  } else {
    err.value = handleLogin.message;
  }
};
</script>

<template>
  <div class="w-full h-auto flex flex-col items-center justify-center gap-2">
    <div class="w-5/6 h-auto">
      <v-text-field
        v-model="userDetails.username"
        label="Username"
        type="text"
      ></v-text-field>
    </div>
    <div class="w-5/6 h-auto">
      <v-text-field
        v-model="userDetails.password"
        label="Password"
        type="password"
      ></v-text-field>
    </div>
    <v-btn variant="outlined" @click="handleSubmit">Login</v-btn>
  </div>
</template>
