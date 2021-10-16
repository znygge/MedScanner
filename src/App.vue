<template>
  <router-view/>
  <Nav />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Nav from '@/components/Nav/Nav.vue';

@Options({
  components: {
    Nav
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
  // @import './styles/globalStyles.scss';
</style>
