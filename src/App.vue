<script setup>
import { RouterView } from "vue-router";
import './scss/main.css';

import Nav from "./components/Nav.vue";
import Contacts from "./components/Contacts.vue";

</script>

<template>
  <div>
    <Nav />
    <RouterView />
    <Contacts />
    
  </div>
</template>