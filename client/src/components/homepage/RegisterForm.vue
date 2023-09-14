<script setup lang="ts">
import { ref } from "vue";
import { useUsers } from "../../composables/useUsers";
const userDetails = ref({
  username: "",
  email: "",
  password: "",
  confirmPassowrd: "",
  birthdate: new Date(),
});

const err = ref("");
const suc = ref("");

const handleSubmit = async () => {
  if (userDetails.value.password === userDetails.value.confirmPassowrd) {
    err.value = "";
    const create = await useUsers().create(userDetails.value);
    if (create.status === 201) {
      suc.value = create.message;
    } else {
      err.value = create.message;
    }
  } else {
    suc.value = "";
    err.value = "Passwords do not match.";
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
        v-model="userDetails.email"
        label="Email"
        type="email"
      ></v-text-field>
    </div>
    <div class="w-5/6 h-auto">
      <v-text-field
        v-model="userDetails.birthdate"
        label="Birthday"
        type="date"
      ></v-text-field>
    </div>
    <div class="w-5/6 h-auto">
      <v-text-field
        v-model="userDetails.password"
        label="Password"
        type="password"
      ></v-text-field>
    </div>
    <div class="w-5/6 h-auto">
      <v-text-field
        v-model="userDetails.confirmPassowrd"
        label="Confirm Password"
        type="password"
      ></v-text-field>
    </div>
    <p class="text-red-500 text-sm" v-if="err.length">{{ err }}</p>
    <p class="text-green-500 text-sm" v-if="suc.length">{{ suc }}</p>
    <v-btn variant="outlined" @click="handleSubmit">Register</v-btn>
  </div>
</template>
