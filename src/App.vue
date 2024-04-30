<script setup>
import { RouterView } from "vue-router";
import './scss/main.css';

import Nav from "./components/Nav.vue";
import Contacts from "./components/Contacts.vue";

function assets(path) {
  return import.meta.env.VITE_APP_BASE_URL + path;
}
</script>

<template>
  <div>
    <Nav />
    <RouterView />
    <Contacts />
    
  </div>
</template>