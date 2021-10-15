<template>
  <nav id="nav">
    <router-link class="navItem" to="/">Home</router-link>
    <router-link class="navItem" to="/about">About</router-link>
  </nav>
</template>

<script>
import { Vue } from 'vue-class-component';
export default class Nav extends Vue {}
</script>

<style scoped lang="scss">
  @import 'Nav.scss';
</style>