<template>
  <nav id="nav">
    <router-link class="navItem" to="/">
        <img class="homeIcon" src="../../assets/home_active.svg" alt="home icon">
    </router-link>
    <router-link class="navItem" to="/search">
        <img class="myListIcon" src="../../assets/my_list_inactive.svg" alt="my list icon">
    </router-link>
  </nav>
</template>

<script>
import { Vue } from 'vue-class-component';
export default class Nav extends Vue {}
</script>

<style scoped lang="scss">
  @import 'Nav.scss';
</style>